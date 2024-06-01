import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Drawer,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavListDrawer } from "./NavListDrawer"; // Asegúrate de importar NavListDrawer

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // Nuevo estado para controlar el Drawer

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <Link to={"/"}>
              <Typography variant="h6">Logo</Typography>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Buscar productos..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Link to="/cart">
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <IconButton color="inherit" onClick={handleDrawerOpen}>
              <AccountCircleIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <NavListDrawer onClose={handleDrawerClose} />
            </Drawer>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
