import { Button, Grid, Link } from "@mui/material";
import remeras from '../imagenes/remeras.png';
import zapatillas from '../imagenes/zapatillas.jpg';


const Home = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Link href='/Product?type=remeras' style={{ textDecoration: 'none' }}>
                    <Button fullWidth>
                        <img src={remeras} alt="Remeras" style={{ width: '100%', height: '12cm' }} />
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link href='/Product?type=zapatillas' style={{ textDecoration: 'none' }}>
                    <Button fullWidth>
                        <img src={zapatillas} alt="Zapatillas" style={{ width: '100%', height: '12cm', color: 'black' }} />
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Home;
