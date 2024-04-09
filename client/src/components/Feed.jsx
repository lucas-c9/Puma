import React from 'react';
import { Card, CardContent, CardHeader,IconButton, Typography,Tooltip, CardMedia, Button, Link } from '@mui/material';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Feed(props) {
    const { addToCart } = useCart();

    return (
        <div style={style.feed} >
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={props.product.name} sx={{ color: 'black'}}
                />
                <Link href={`/ViewProduct?product=${props.product.name}`} style={{ textDecoration: 'none' }}>
                    <Button fullWidth>
                        <CardMedia
                            component="img"
                            height="194"
                            image={props.product.image ? props.product.image : 'https://wallpapercave.com/wp/8ZfIwgY.jpg'}
                            alt=""
                        />
                    </Button>
                </Link>  

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock: {props.product.stock} unidades
                    </Typography>
                    <p>$ {props.product.price}</p>
                    <p>{props.product.catalog ? props.product.catalog : 'Sin categoría'}</p>
                    <Tooltip title="Agregar al carrito" arrow>
                    <IconButton onClick={() => addToCart(props.product)} aria-label="Agregar al carrito">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Tooltip>
                </CardContent>
            </Card>
        </div>
    );
}
const style = {
    feed: {
    }
}
export default Feed;