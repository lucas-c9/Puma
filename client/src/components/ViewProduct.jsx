import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardMedia, CardContent, Typography, IconButton, Tooltip, Modal, Box, Button, Link } from '@mui/material';


const ProductCard = styled(Card)({
    display: 'flex',
    marginBottom: 16,
});

const ProductMedia = styled(CardMedia)({
    width: 200,
    height: 200,
    objectFit: 'cover',
    cursor: 'pointer', // Establecer cursor como puntero para indicar que la imagen es clickable
});

function ViewProduct(props) {
    const { addToCart } = useCart();
    const [open, setOpen] = useState(false); // Estado para controlar la visibilidad del modal



    const handleImageClick = () => {
        setOpen(true); // Abrir el modal cuando se haga clic en la imagen
    };

    const handleCloseModal = () => {
        setOpen(false); // Cerrar el modal cuando se haga clic en el botón de cerrar
    };

    return (
        <ProductCard sx={{ margin: '5%' }}>
            {/* Imagen pequeña */}
            <ProductMedia
                component="img"
                image={props.product.image ? props.product.image : 'https://wallpapercave.com/wp/8ZfIwgY.jpg'}
                alt={props.product.name}
                sx={{ width: '31%', height: '31%' }}
                onClick={handleImageClick} // Manejar clic en la imagen para mostrarla a tamaño completo
            />

            {/* Contenido del producto */}
            <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontFamily: 'Lobster', fontSize: '50px' }}>
                    {props.product.name}
                </Typography>

                <br/>

                <Typography variant="body2" color="textSecondary" component="p" sx={{ fontSize: '25px', fontWeight: 'bold' }}>
                    ${props.product.price}
                </Typography>

                <br/>

                <Typography variant="body2" color="textSecondary" component="p" sx={{ fontSize: '15px' }}>
                    {props.product.description}
                </Typography>

                <br/>

                <Typography variant="body2" color="textSecondary" component="p" sx={{ fontSize: '15px' }}>
                    Stock: {props.product.stock} unidades
                </Typography>

                <br/>

                <Tooltip title="Agregar al carrito" arrow>
                    <IconButton onClick={() => addToCart(props.product)} aria-label="Agregar al carrito" color="error">
                        <AddShoppingCartIcon />
                    </IconButton>
                </Tooltip>

                <br/>

                <Box sx={{ display: 'flex', marginTop: '16px' }}>
                <Link href="javascript:void(0);" onClick={() => window.history.back()} underline="none">
                    <Button variant="contained" color="error">
                        Volver
                    </Button>
                </Link>
            </Box>

            </CardContent>

            {/* Modal para mostrar la imagen a tamaño completo */}
            <Modal open={open} onClose={handleCloseModal}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'rgba(0, 0, 0, 0.8)' }}>
                    <img src={props.product.image} alt={props.product.name} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                    <Button variant="contained" color="error" onClick={handleCloseModal} sx={{ marginTop: '16px' }}>
                        Cerrar
                    </Button>
                </Box>
            </Modal>
        </ProductCard>
    );
}

export default ViewProduct;
