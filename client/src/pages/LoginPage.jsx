import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login as logUser } from '../api/products.api'; //renombramos para que no entre en conficto con el login del contexto
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = ({ onLogin }) => {
    const { login } = useAuth()
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    const handleLogin = async () => {
        try {
            loginData.password = password;
            const response = await logUser({ email: loginData.email, password: loginData.password });
            const { token } = response.data;

            // Guardamos en localstorage el token
            localStorage.setItem('token', token);

            // Notificar login correcto
            login(token)
            navigate('/panel')
        } catch (error) {
            if (error.response.status === 401) {
                alert("Login fallido, por favor intente nuevamente")
            } else {
                console.error('Login fallido por otros motivos', error);
                // Manejamos el error de login
            }
        }
    };

    return (
        <Container sx={{ marginTop: '20px' }}>
            <h4>Por favor, para acceder, identifíquese</h4>
            <form >
                <TextField fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    required
                />
                <TextField fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    label="Password"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                    onKeyPress={handleKeyPress}
                    required
                />
                <Button variant='contained' onClick={() => handleLogin()} sx={{ mt: 2 }}>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;
