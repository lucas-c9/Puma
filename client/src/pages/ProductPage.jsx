import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllProducts } from '../api/products.api';
import { Container, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Feed from '../components/Feed';


function ProductPage(props) {

    const [load, setLoad] = useState(false);
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    useEffect(() => {
        const type = searchParams.get('type');
        fetchData(type);
    }, []);

    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) => {
            setProducts(response.data);
            setLoad(false)
        });
    }

    return (

        <Container>

            {load ?
                <Box sx={{ display: 'flex',  justifyContent: 'center', margin:'15%',  padding: '8px'}}>
      <CircularProgress   color='error'/>
    </Box> :
                <Grid container spacing={2}>
                    {products.map((product, idx) => (
                        <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                            <Feed product={product}  />
                        </Grid>
                    ))}
                </Grid>}

            <div style={{ marginBottom: 100 }}></div>

        </Container>
    );
}

export default ProductPage;
