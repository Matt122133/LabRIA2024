import { useContext, useState } from "react";
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
import { NavListDrawer } from "./NavListDrawer";
import { ProductContext } from "../Products/context/ProductContext";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(ProductContext);

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
            <Link
              onClick={() => {
                setSearchTerm("");
              }}
              to={"/"}
            >
              <Typography variant="h6">Logo</Typography>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
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
