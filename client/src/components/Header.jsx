import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cart from '../components/Cart';
import imagen from "../imagenes/logo-puma.jpg";
import { AppBar, Divider, Toolbar, Button, Typography, Box } from "@mui/material";
import { useAuth } from '../context/AuthContext';
import Search from './Search';

const Header = () => {
    const { isUserLogged, logout, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if (isAuthenticated) {
            login(isAuthenticated)
        }
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/')
    }


    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'rgb(227, 9, 25)' }}>
                <Toolbar>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button sx={{ my: 2, marginRight: 3, color: 'white', display: 'block' }}>
                            <img src={imagen} alt="logo" style={{ width: '3cm', height: '2cm', marginRight: '1rem' }} />
                        </Button>
                    </Link>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Lobster', color: 'white', fontSize: '50px' }}>
                        Oulet
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Search></Search>

                        {isUserLogged && (
                            <Link to='/panel' style={{ textDecoration: 'none', marginRight: '1rem' }}>
                                <Button sx={{ color: 'white' }}>
                                    Panel Administrativo
                                </Button>
                            </Link>
                        )}

                        <Cart />

                        <Button aria-label="Admin Access"
                            sx={{ ml: 2, color: 'white', border: 2, textDecoration: 'none' }}
                            onClick={!isUserLogged ? () => navigate('/panel') : handleLogout}
                        >
                            {!isUserLogged ? "Iniciar Sesión" : "Cerrar Sesión"}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Divider style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Header;
