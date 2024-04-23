import { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, CircularProgress } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function ModalRegister({ open, handleClose, handleRegister }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
    
        // Regular expression pattern for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!formData.email || !emailPattern.test(formData.email)) {
            setErrors(prev => ({ ...prev, email: 'Por favor ingrese un email válido' }));
            setLoading(false);
            return;
        }
    
        if (formData.password !== formData.confirmPassword) {
            setErrors(prev => ({ ...prev, confirmPassword: 'Las contraseñas no coinciden' }));
            setLoading(false);
            return;
        }
    
        try {
            // Call the handleRegister function with form data
            await handleRegister(formData);
            setLoading(false);
            handleClose();
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration error
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Registrar nuevo usuario</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Dirección de email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        name="password"
                        label="Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        value={formData.password}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirmar Contraseña"
                        type={showConfirmPassword ? 'text' : 'password'}
                        fullWidth
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={toggleConfirmPasswordVisibility}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button type="submit" color="primary" disabled={loading}>
                            {loading ? <CircularProgress size={24} /> : 'Registrar'}
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default ModalRegister;
