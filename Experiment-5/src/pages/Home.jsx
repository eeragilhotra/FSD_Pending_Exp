import React from 'react';
import { Typography, Box, TextField, Stack, Button } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ py: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Welcome Home
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, color: 'gray' }}>
        Please enter your details below
      </Typography>

      <Stack spacing={3} sx={{ width: '100%', maxWidth: 400 }}>
        <TextField label="Full Name" variant="outlined" fullWidth />
        <TextField label="Email Address" variant="outlined" type="email" fullWidth />
        <TextField label="Age" variant="outlined" type="number" fullWidth />
        <Button variant="contained" size="large" sx={{ py: 1.5 }}>
          Save Details
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;