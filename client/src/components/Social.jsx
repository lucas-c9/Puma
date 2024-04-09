import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Tooltip, Link } from '@mui/material';

const Social = () => {
    return (
        <div>

            <Tooltip title="Preguntas frecuentes">
                <Link href='/FaqPage' target="_blank" sx={{ my: 2, marginRight: 3, color: 'white' }}>
                    <QuestionMarkIcon></QuestionMarkIcon>
                </Link>
            </Tooltip>

            <Tooltip title="Facebook">
                <Link href="https://www.facebook.com/?locale=es_LA" target="_blank" sx={{ my: 2, marginRight: 3, color: 'white' }}>
                    <FacebookIcon></FacebookIcon>
                </Link>
            </Tooltip>

            <Tooltip title="Twitter">
                <Link href="https://twitter.com/?lang=es" target="_blank" sx={{ my: 2, marginRight: 3, color: 'white' }}>
                    <TwitterIcon></TwitterIcon>
                </Link>
            </Tooltip>

            <Tooltip title="Instagram">
                <Link href="https://www.instagram.com/" target="_blank" sx={{ my: 2, marginRight: 3, color: 'white' }}>
                    <InstagramIcon></InstagramIcon>
                </Link>
            </Tooltip>

            <Tooltip title="LinkedIn">
                <Link href="https://www.linkedin.com/in/jul1alcaraz/" target="_blank" sx={{ my: 2, marginRight: 3, color: 'white' }}>
                    <LinkedInIcon></LinkedInIcon>
                </Link>
            </Tooltip>

            <Tooltip title="Comunicate con nosotros">
                <Link href="/contact" target="_blank" sx={{ my: 2, marginRight: 3, color: 'white' }}>
                    <ContactMailIcon></ContactMailIcon>
                </Link>
            </Tooltip>

        </div>
    );
};

export default Social;