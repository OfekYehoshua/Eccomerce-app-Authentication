import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './styles.css'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function HomeHeader() {
  return (
    <Box className='header'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '30vh',
    }}
    >
    
      <CssBaseline />
      <Container  component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          The Aucation store
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Look up for some items?'}
          {'Here you can get them in the best prices!'}
        </Typography>
        <Typography variant="body1">The home of all the item you want!</Typography>
      </Container>
     
    </Box>
  );
}