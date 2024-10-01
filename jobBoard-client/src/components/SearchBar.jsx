import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', }}>
      <TextField
        label="Search Jobs"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '10px', width: '300px' }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch} 
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Search'}
      </Button>
    </div>
  );
};

export default SearchBar;