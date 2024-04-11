import React, { useState, useRef, useEffect } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion, AnimatePresence } from 'framer-motion';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchContainerRef = useRef(null);

    const handleToggleSearch = () => {
        setIsSearchOpen((prev) => !prev);
        if (!isSearchOpen) {
            setSearchTerm('');
        }
    };

    const handleFilter = () => {
        if (searchTerm.trim() !== '') {
            // Perform search logic or navigate to search results page
            window.location.href = `/Product?type=${encodeURIComponent(searchTerm.trim())}`;
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleFilter();
        }
    };

    const handleClickOutside = (event) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
            setIsSearchOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Container maxWidth="sm">
            <Grid container spacing={1} alignItems="center" ref={searchContainerRef}>
                {/* Text Field and Search Button */}
                <Grid item XS={9}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={searchTerm}
                                    label="Buscar..."
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />                  
                </Grid>
                
                <Grid item xs={3} sm={2}>
                    <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        onClick={isSearchOpen ? handleFilter : handleToggleSearch}
                        sx={{
                            height: '100%',
                            backgroundColor: 'red',
                            color: 'white',
                            margin: '1rem'
                        }}
                    >
                        <SearchIcon />
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Search;
