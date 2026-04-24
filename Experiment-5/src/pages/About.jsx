import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom color="primary">
        About Our Story
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
        <b>React Lazy Loading</b> and 
        <b> Code Splitting</b>. By delaying the load of this page by 1 second, 
        we simulate how real-world apps handle large modules to keep the initial 
        loading time lightning fast.
      </Typography>
    </Container>
  );
};

export default About;