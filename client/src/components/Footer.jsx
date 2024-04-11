import React from 'react';
import Social from './Social';
import LocalFloristSharpIcon from '@mui/icons-material/LocalFloristSharp';

import { Paper } from "@mui/material";


function Footer(props) {
    return (
        <Paper
            sx={{
                marginTop: 'calc(10% + 60px)',
                position: 'fixed',
                bottom: 0,
                padding: 2,
                width: '100%',
                textAlign: 'center',
             
                 // Alinear elementos a la derecha
                alignItems: 'center', // Alinear verticalmente al centro
                backgroundColor: 'rgb(227, 9, 25)'
                
            }}
            square
            variant="outlined"
        >
            <Social />
            <div style={{ color: 'white' }}>By Julieta Alcaraz <LocalFloristSharpIcon></LocalFloristSharpIcon> </div>
        </Paper>
    );
}

export default Footer;
