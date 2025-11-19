import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Paper, TextField, Button } from '@mui/material';

const ApplyPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');
    const company = queryParams.get('company');
    const jobLocation = queryParams.get('location');
    const description = queryParams.get('description');

    return (
        <Container sx={{
            padding: '20px',
        }} >
            <Paper sx={{
                padding: '20px',
                boxShadow: '0 4px 8px #1976d2',
            }}>
                <Typography variant="h4" gutterBottom>
                    Apply for {title} at {company}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    {company} - {jobLocation}
                </Typography>
                <Typography variant="body1" paragraph>
                    {description}
                </Typography>
                <form>
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Resume (URL or text)"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                            marginTop: '20px',
                            backgroundColor: '#1976d2',
                        }}
                    >
                        Submit Application
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default ApplyPage;