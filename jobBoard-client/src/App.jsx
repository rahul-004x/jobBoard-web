import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import axios from 'axios';
import { Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/jobs`, {
        params: { query }
      });
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job listings:', error);
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
      <SearchBar onSearch={handleSearch} loading={loading} />
      <JobList jobs={jobs}  loading={loading} />
      </Container>
    </ThemeProvider>
  );
};

export default App;

