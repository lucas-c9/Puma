import React, { useState } from 'react';
import { Button, Container, TextField, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login as logUser } from '../api/products.api'; // Renombramos para evitar conflicto con el login del contexto
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ModalRegister from '../components/ModalRegister';
import { register as registerUser } from '../api/products.api';

const Login = ({ onLogin }) => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);

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

            // Guardamos el token en localStorage
            localStorage.setItem('token', token);

            // Notificamos el inicio de sesión correcto
            login(token);
            navigate('/panel');
        } catch (error) {
            if (error.response.status === 401) {
                alert("Inicio de sesión fallido, por favor intente nuevamente");
            } else {
                console.error('Inicio de sesión fallido por otros motivos', error);
                // Manejamos el error de inicio de sesión
            }
        }
    };

    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };

    const closeRegisterModal = () => {
        setIsRegisterModalOpen(false);
    };

    const handleRegister = async (formData) => {
        try {
            const response = await registerUser(formData);
            console.log('Usuario registrado:', response);
            setIsRegisterModalOpen(false);
            setSuccessMessage('Usuario registrado exitosamente');
            setOpenSuccessSnackbar(true);
        } catch (error) {
            console.error('Registro fallido:', error);
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccessSnackbar(false);
    };

    return (
        <Container sx={{ marginTop: '20px' }}>
            <h4>Por favor, para acceder, identifíquese</h4>
            <form>
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
                    Iniciar sesión
                </Button>
                <Button variant='outlined' onClick={() => openRegisterModal()} sx={{ mt: 2, ml: 2 }}>
                    Registrarse
                </Button>
                <ModalRegister open={isRegisterModalOpen} handleClose={closeRegisterModal} handleRegister={handleRegister} />
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={openSuccessSnackbar}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    message={successMessage}
                />
            </form>
        </Container>
    );
};

export default Login;
