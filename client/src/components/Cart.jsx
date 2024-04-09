import React, { useState } from 'react';
import { IconButton, Badge, Popover, Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Snackbar, Alert } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../context/CartContext';
import emailjs from "emailjs-com";

const Cart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { cart, removeFromCart, resetCart } = useCart();
    const total = calculateTotalPrice(cart);
    const [openAlert, setOpenAlert] = useState(false);

    const handleCartClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCartClose = () => {
        setAnchorEl(null); 
    };

    const handleRemoveItem = (item) => {
        // Logica para remover un item del carrito
        removeFromCart(item)
    };

    const handleCheckout = (e) => {
        // Aca la logica seria simplemente editar un articulo en la db y decrementarle el stock. posterior a eso limpiar carrito
        let str ="";
        cart.map((item) =>{
            str += 'Nombre: ' + item.product.name + ',' + ' Cantidad: ' + item.quantity + ',' + ' Precio: ' + item.product.price + '\n';
            //str += '${item.product.name}, cantidad: ${item.quantity ? item.quantity : 1 }, precio unitario: $${item.product.price} \n'
        });
            let template = {
            to_email: 'prof.alcaraz022@gamil.com',
            subject: 'nuevo pedido',
            str: str 
        }


        emailjs.send(
            'service_g92y06y', 'template_roq0en7',template,'sSBYt8blXo_5NvUPs')
        .then((result)=> {
                if (result.text ==='OK'){
                    setOpenAlert (true)
                    resetCart();
                    handleCartClose();
                }
        }
        , (error) => {
            console.log(error.text)
        });
        e.preventDefault()
        
        handleCartClose();
    };

    const handleClose = (e) => {
        setOpenAlert(false);
    }

    function calculateTotalPrice(cart) {
        let total = 0;
        for (const item of cart) {
            total += item.product.price * item.quantity;
        }
        return total;
    }

    return (
        <div>
            <Badge badgeContent={cart.length} color="secondary">
                <IconButton color="inherit" aria-label="Shopping Cart" onClick={handleCartClick}>
                    <ShoppingCartIcon />
                </IconButton>
            </Badge>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleCartClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Paper sx={{ padding: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Mi Carrito de compras
                    </Typography>
                    {cart.length > 0 ? (
                        <>
                            <List>
                                {cart.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar alt="Product Image" src={item.product.image} />
                                        </ListItemAvatar>
                                        <ListItemText primary={`${item.product.name} (Cant.: ${item.quantity})`} secondary={item.product.price ? `$${item.product.price.toFixed(2)}` : ''} />
                                        <IconButton
                                            color="error"
                                            aria-label="Delete"
                                            onClick={() => handleRemoveItem(item)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="h6" sx={{ textAlign: 'right' }}>
                                Total Carrito: ${total.toFixed(2)}
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary" onClick={handleCheckout}>
                                    Checkout
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Typography variant="body2">Su carrito está vacío.</Typography>
                    )}
                </Paper>
            </Popover>
            <Snackbar anchorOrigin={{vertical: 'top', horizontal:'center'}} open={openAlert} autoHideDurtion={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity ="success" sx={{ width:'100%' }}>
                       Tu pedido fue enviado para confirmar stock!
                    </Alert> 
                </Snackbar>
        </div>
    )
}

export default Cart;
