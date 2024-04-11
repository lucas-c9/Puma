import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import Search from './Search';
import Cart from '../components/Cart';
import Logo from '../imagenes/logo-puma.jpg';

const Header = () => {
    const { isUserLogged, logout, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if (isAuthenticated) {
            login(isAuthenticated);
        }
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(227, 9, 25)' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
               
                {/* Left Section (Logo) */}
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt="logo" style={{ width: '100%', height: '100px', marginLeft: '8px', maxWidth: '120px' }} />
                </Link>

                {/* Center Section (Search) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Search />
                </Box>

                {/* Right Section (Buttons) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Cart */}
                    <Cart />

                    {/* Admin Access Button (visible for logged-in users) */}
                    {isUserLogged && (
                        <Link to="/panel" style={{ textDecoration: 'none', marginRight: '8px' }}>
                            <Button variant="outlined" sx={{
                                color: 'white',
                                borderColor: 'white',
                                borderRadius: '20px',
                                textTransform: 'none',
                                display: 'flex',
                                alignItems: 'center', // Hide on mobile
                            }}>
                                Panel Administrativo
                            </Button>
                        </Link>
                    )}
                    
                    {/* Admin Access Button (always visible) */}
                    <Button
                        aria-label="Admin Access"
                        variant="contained"
                        sx={{
                            backgroundColor: isUserLogged ? 'red' : 'black',
                            color: 'white',
                            borderRadius: '20px',
                            padding: '8px 16px',
                            textTransform: 'none',
                            marginLeft: '8px', // Adjust margin for spacing
                            display: 'flex',
                             alignItems: 'center'
                        }}
                        onClick={isUserLogged ? handleLogout : () => navigate('/panel')}
                    >
                        {isUserLogged ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
