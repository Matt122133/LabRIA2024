import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(){

    const[open, setOpen] = useState(false)

    return (
      <>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <Button href="/home" color="inherit">
              Home
            </Button>
            <Button href="/login" color="inherit">
              Login
            </Button>
            <Button href="/register" color="inherit">
              Register
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
          <NavListDrawer />
        </Drawer>
      </>
    );


}