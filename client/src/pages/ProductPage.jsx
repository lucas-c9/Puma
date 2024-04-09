import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllProducts } from '../api/products.api';
import { Container, Grid } from '@mui/material';
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
                '1' :
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
