import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, CircularProgress, Box } from '@mui/material';

// 1. Correct Path for Home (No Lazy Loading)
import Home from './pages/Home'; 

// 2. Correct Paths for Lazy Loaded Pages with 1-second delay
const About = lazy(() => {
  return Promise.all([
    import('./pages/About'), // path corrected to ./pages/
    new Promise(resolve => setTimeout(resolve, 1000))
  ]).then(([module]) => module);
});

const Contact = lazy(() => {
  return Promise.all([
    import('./pages/Contact'), // path corrected to ./pages/
    new Promise(resolve => setTimeout(resolve, 1000))
  ]).then(([module]) => module);
});

const LoadingSpinner = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;