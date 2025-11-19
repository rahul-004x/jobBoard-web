import { Card, CardContent, CardActions, Typography, Button, Grid, CircularProgress, Box, Chip, Avatar } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const JobCard = ({ job }) => {
    const applyLink = job.apply_options?.[0]?.link || job.link || '#';

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                },
                background: '#ffffff',
                border: '1px solid #f1f5f9',
                overflow: 'hidden'
            }}>
            <CardContent sx={{ p: 2.5 }}>
                <Box display="flex" alignItems="flex-start" mb={2}>
                    <Avatar
                        src={job.thumbnail}
                        alt={job.company_name}
                        variant="rounded"
                        sx={{
                            width: 48,
                            height: 48,
                            mr: 2,
                            bgcolor: '#f8fafc',
                            color: '#64748b',
                            border: '1px solid #e2e8f0'
                        }}
                    >
                        <BusinessIcon fontSize="small" />
                    </Avatar>
                    <Box>
                        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 700, lineHeight: 1.3, mb: 0.5, fontSize: '1rem' }}>
                            {job.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                            {job.company_name}
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" alignItems="center" mb={2} color="text.secondary">
                    <LocationOnIcon sx={{ fontSize: 16, mr: 0.5, color: '#94a3b8' }} />
                    <Typography variant="caption" sx={{ fontSize: '0.85rem' }}>
                        {job.location}
                    </Typography>
                </Box>

                <Box mb={2} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {job.extensions?.slice(0, 3).map((ext, index) => (
                        <Chip
                            key={index}
                            label={ext}
                            size="small"
                            sx={{
                                bgcolor: '#f1f5f9',
                                color: '#475569',
                                fontSize: '0.75rem',
                                height: '24px',
                                fontWeight: 500
                            }}
                        />
                    ))}
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    fontSize: '0.875rem',
                    lineHeight: 1.6
                }}>
                    {job.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ p: 2.5, pt: 0 }}>
                <Button
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    endIcon={<OpenInNewIcon sx={{ fontSize: '1rem !important' }} />}
                    fullWidth
                    sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        fontWeight: 600,
                        py: 1,
                        borderColor: '#e2e8f0',
                        color: '#2563eb',
                        '&:hover': {
                            borderColor: '#2563eb',
                            backgroundColor: '#eff6ff',
                        }
                    }}
                >
                    Apply Now
                </Button>
            </CardActions>
        </Card>
    );
};

export const JobList = ({ jobs, loading }) => {
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress size={50} thickness={4} sx={{ color: '#2563eb' }} />
            </Box>
        );
    }

    if (jobs.length === 0) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" minHeight="50vh">
                <WorkOutlineIcon sx={{ fontSize: 64, color: '#cbd5e1', mb: 2 }} />
                <Typography variant="h6" color="text.secondary" fontWeight={600}>
                    No jobs found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Try adjusting your search terms
                </Typography>
            </Box>
        );
    }

    return (
        <Grid container spacing={3} sx={{ mt: 2, pb: 8 }}>
            {jobs.map((job, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} display="flex">
                    <JobCard job={job} />
                </Grid>
            ))}
        </Grid>
    );
};