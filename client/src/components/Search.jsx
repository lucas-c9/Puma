import { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilter = () => {
        window.location.href = '/Product?type=' + searchTerm;
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleFilter();
        }
    };

    return (
        <Container>
            <TextField
                placeholder=""
                value={searchTerm}
                variant="standard"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            ></TextField>
            <Button variant="text" onClick={handleFilter}
                sx={{ my: 2, marginRight: 3, color: 'white' }}>
                <SearchIcon></SearchIcon>
            </Button>
        </Container>
    )
}
export default Search;
