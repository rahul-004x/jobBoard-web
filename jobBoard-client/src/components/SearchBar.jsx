import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 6,
        mb: 4,
        maxWidth: '600px',
        mx: 'auto'
      }}
    >
      <TextField
        placeholder="Search for jobs (e.g. 'React Developer in New York')"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          sx: {
            borderRadius: '12px 0 0 12px',
            bgcolor: 'white',
            '& fieldset': { borderRight: 'none' },
            '&:hover fieldset': { borderColor: '#2563eb' },
            '&.Mui-focused fieldset': { borderColor: '#2563eb' }
          }
        }}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        disableElevation
        sx={{
          borderRadius: '0 12px 12px 0',
          px: 4,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          backgroundColor: '#2563eb',
          '&:hover': {
            backgroundColor: '#1d4ed8',
          }
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
      </Button>
    </Box>
  );
};

export default SearchBar;