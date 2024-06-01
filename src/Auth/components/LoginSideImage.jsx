import React from 'react';
import Grid from '@mui/material/Grid';

export const LoginSideImage = () => (
  <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage: `url(${import.meta.env.VITE_SIDE_IMAGE_LOGIN_URL})`,
      backgroundRepeat: "no-repeat",
      backgroundColor: (t) =>
        t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
);
