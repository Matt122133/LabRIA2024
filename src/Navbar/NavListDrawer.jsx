import React, { useContext } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../Auth/context/AuthContext";
import { CartContext } from "../Cart/context/CartContext";

export const NavListDrawer = ({ onClose }) => {
  const { isAuthenticated, logout } = useAuth();
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    onClose();
  };

  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {isAuthenticated ? (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    clearCart();
                    handleLogout();
                  }}
                >
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cerrar sesión" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/modifyAccount");
                    onClose();
                  }}
                >
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Modificar perfil" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/login" onClick={onClose}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Iniciar sesión" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </nav>
    </Box>
  );
};
