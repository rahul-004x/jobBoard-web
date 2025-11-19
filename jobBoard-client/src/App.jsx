import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { JobList } from './components/JobList';
import axios from 'axios';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f7fafc',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
    }
  },
  shape: {
    borderRadius: 12,
  }
});

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3003/api/jobs`, {
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
      <Router>
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
          <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <Container maxWidth="lg">
              <Toolbar disableGutters>
                <WorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'primary.main' }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  JobBoard
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>

          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Box textAlign="center" mb={6} mt={4}>
                      <Typography variant="h3" component="h1" gutterBottom fontWeight="800" sx={{ letterSpacing: '-0.03em', color: '#1a202c' }}>
                        Find Your Dream Job
                      </Typography>
                      <Typography variant="h6" color="text.secondary" fontWeight="400">
                        Search thousands of job listings from top companies
                      </Typography>
                    </Box>
                    <SearchBar onSearch={handleSearch} loading={loading} />
                    <JobList jobs={jobs} loading={loading} />
                  </>
                }
              />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
