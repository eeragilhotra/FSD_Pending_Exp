import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 10, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={0} sx={{ p: 4, textAlign: 'center', border: '1px solid #ddd', borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Have questions or want to collaborate? <br />
          You can reach us at: <b>support@example.com</b> <br />
          Or visit our headquarters in Mumbai, India.
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, color: '#1976d2' }}>
          Available 24/7 for your support.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Contact;