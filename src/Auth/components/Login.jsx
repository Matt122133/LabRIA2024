import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginSideImage, LoginForm } from "./index";

const defaultTheme = createTheme();

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <LoginSideImage />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <LoginForm handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
