import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Tooltip,
    Modal,
    Box,
    Button,
    Grid
} from '@mui/material';

const ProductCard = styled(Card)({
    display: 'flex',
    marginBottom: 1,
    
});

const ProductMedia = styled(CardMedia)({
    width: '100%', // Ajusta la imagen para que ocupe todo el ancho disponible
    paddingTop: '5%', // Proporción 1:1 para mantener el tamaño de la imagen
    cursor: 'pointer',
   
   

});

function ViewProduct(props) {
    const { addToCart } = useCart();
    const [open, setOpen] = useState(false);

    const handleImageClick = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <Grid container spacing={1} >
            {/* Primer Grid (50% de la pantalla en dispositivos extra pequeños y pequeños) */}
            <Grid item xs={12} sm={6} sx={{ marginTop: '16px' }}>
                <ProductCard sx={{justifyContent:'center'}}>
                    <ProductMedia
                        component="img"
                        image={props.product.image ? props.product.image : 'https://wallpapercave.com/wp/8ZfIwgY.jpg'}
                        alt={props.product.name}
                        sx={{ width: '35%', height: '35%' }}            
                        onClick={handleImageClick}
                    />
                </ProductCard>
            </Grid>
            {/* Segundo Grid (50% de la pantalla en dispositivos extra pequeños y pequeños) */}
            <Grid item xs={12} sm={6} sx={{ marginTop: '16px' }}>
                <ProductCard>
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{ fontFamily: 'Lobster', fontSize: '28px' }}>
                            {props.product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                            ${props.product.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" sx={{ fontSize: '16px', marginBottom: '16px' }}>
                            {props.product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" sx={{ fontSize: '16px', marginBottom: '16px' }}>
                            Stock: {props.product.stock} unidades
                        </Typography>
                        <Tooltip title="Agregar al carrito" arrow>
                            <IconButton onClick={() => addToCart(props.product)} aria-label="Agregar al carrito" color="error">
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Tooltip>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => window.history.back()} // Acción para volver atrás
                                sx={{ minWidth: 120 }} // Ancho mínimo para el botón
                            >
                                Volver
                            </Button>
                        </Box>
                    </CardContent>
                </ProductCard>
            </Grid>
            {/* Modal para mostrar la imagen en tamaño completo */}
            <Modal open={open} onClose={handleCloseModal}>
            <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        bgcolor: 'rgba(0, 0, 0, 0.8)',
                    }}
                >
                    <img
                        src={props.product.image}
                        alt={props.product.name}
                        style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                    />
                    <Box sx={{ marginTop: '16px' }}>
                        <Button variant="contained" color="error" onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Grid>
    );
}

export default ViewProduct;
