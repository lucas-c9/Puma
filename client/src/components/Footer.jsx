import React from 'react';
import Social from './Social'
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Divider, IconButton, Toolbar, Button, Typography, Box, Paper } from "@mui/material";

function Footer(props) {
    return (


        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            position: 'fixed',
            bottom: 0,
            padding: 2,
            width: '100%',
            textAlign: 'center',
            backgroundColor: 'rgb(227, 9, 25)'
        }} square variant="outlined" >
            <Social></Social>
        </Paper>
    );
}

export default Footer;