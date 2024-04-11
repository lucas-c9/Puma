import { Button, Grid, Link, Paper, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import remeras from '../imagenes/remeras.png';
import zapatillas from '../imagenes/zapatillas.jpg';

const Home = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
                <Link href='/Product?type=remeras' style={{ textDecoration: 'none' }}>
                    <Button fullWidth >
                        <Paper elevation={50}>
                            <img src={remeras} alt="Remeras" 
                            style={{ width: '100%', height: isSmallScreen ? '200px' : '100%', height: '100%', 
                            height: isSmallScreen ? '250px' : '100%', objectFit: 'cover' }} />
                        </Paper>
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Link href='/Product?type=zapatillas' style={{ textDecoration: 'none' }}>
                    <Button fullWidth>
                        <Paper elevation={50}>
                            <img src={zapatillas} alt="Zapatillas"
                            style={{ width: '100%', 
                            height: isSmallScreen ? '200px' : '100%', 
                            height: '100%', height: isSmallScreen ? '250px' : '100%', objectFit: 'cover' }} />
                        </Paper>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Home;
