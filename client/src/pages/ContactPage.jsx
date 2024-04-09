import {  useState } from 'react';
import { TextField, Button, Container, Snackbar, Alert } from '@mui/material';
import emailjs from "emailjs-com";

const ContactPage = () => {
    const [contact, setContact] = useState({
        name: '',
        lastname: '',
        email: '',
        message: ''
    });

    const [open, setOpen] = useState (false);
    const handleClose =()=> {
        setOpen(false);
    }


    const handleSubmit = (e) => {
        emailjs.sendForm (
            'service_g92y06y', 'template_iz44js6',e.target,'sSBYt8blXo_5NvUPs')
        .then((result)=> {
                if (result.text ==='OK'){
                setOpen (true)}
                setContact({
                    name: '',
                    lastname: '',
                    email: '',
                    message: ''
                });
            //window.location.reload()
        }
        , (error) => {
        console.log(error.text)});
        e.preventDefault()
      
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    return (
        <Container sx={{ marginTop: '20px' }}>
            <h4>Complete su información y envíe su consulta</h4>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth
                    label="Nombre"
                    margin="normal"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Apellido"
                    margin="normal"
                    name="lastname"
                    value={contact.lastname}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Mensaje"
                    margin="normal"
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                    multiline
                    rows={5}
                />
                <Button variant='contained' type="submit" sx={{ mt: 2 , backgroundColor: 'rgb(227, 9, 25)'}}>
                    Enviar
                </Button>

<br/> <br/> <br/> <br/> <br/> 
            
                <Snackbar anchorOrigin={{vertical:'top', horizontal:'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity ="success" sx={{ width:'100%' }}>
                        Mensaje enviado
                    </Alert> 
                </Snackbar>

            </form>
        </Container>
    );
};

export default ContactPage;