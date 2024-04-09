
import { getAllProducts } from '../../api/products.api';
import { useEffect, useState } from 'react';
import { Container, TableRow, Table, Avatar, TableBody, TableCell, TableHead, TableContainer, Paper , IconButton } from '@mui/material';
import FormProduct from '../../components/FormProduct';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Edit';
import { removeProduct } from "../../api/products.api";

function HomePagePanel() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const [open, setOpen] = useState(false);//controla el popup de producto
   
    const [product, setProduct] = useState({
        name: '',
        catalog: '',
        image: '',
        description: '',
        price: 0,
        stock: 0
    });

    
    const handleClickOpen = () => {
        setOpen(true);
        setProduct({
            name: '',
            catalog: '',
            image: '',
            description: '',
            price: 0,
            stock: 0
        })
    }

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) => {
            setProducts(response.data);
            setLoad(false)
        });
    }

    const handleRemoveItem = (id) => {
        const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
        if (confirmed) {
            removeProduct(id)
                .then((response) => {
                    if (response) {
                        console.log('Producto eliminado');
                        fetchData();
                    }
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };
    
    const handleUpdateItem = (item) => {
        const confirmed = window.confirm('¿Estás seguro de que deseas editar este producto?');
        if (confirmed) {
            setProduct(item);
            setOpen(true);
        }
    };


    return (
        <Container>
            <FormProduct product={product} handleClose={handleClose} handleClickOpen={handleClickOpen} open={open} fetchData={fetchData}></FormProduct>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Imagen</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell >Catalogo</TableCell>
                            <TableCell > Stock </TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>  <Avatar alt="Product Image" src={row.image} /></TableCell>
                                <TableCell sx={{ fontWeight: '800' }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>$ {row.price}</TableCell>
                                <TableCell>{row.catalog}</TableCell>
                                <TableCell>{row.stock}</TableCell>

                                <TableCell align="right">                            
                                    <IconButton color="error" aria-label="eliminar" onClick = {() => 
                                    handleRemoveItem(row._id)}>                                    
                                      <DeleteIcon/>  
                                    </IconButton>

                                    <IconButton color="error" aria-label="editar"  onClick = {() => 
                                    handleUpdateItem(row)}>                                    
                                      <UpdateIcon/>  
                                    </IconButton>
                                
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <br/><br/><br/><br/><br/>
            </TableContainer>
        </Container>
    )
}
export default HomePagePanel;
