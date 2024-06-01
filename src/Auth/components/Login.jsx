import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from './LoginForm';
import LoginSideImage from './LoginSideImage';

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <LoginSideImage />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <LoginForm handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
