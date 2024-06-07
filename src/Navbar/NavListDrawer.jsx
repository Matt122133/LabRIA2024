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

export const NavListDrawer = ({ onClose }) => {
  const router = useNavigate();
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/login" onClick={onClose}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Iniciar sesión" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                router("/login");
                onClose();
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
                router("/modifyAccount");
                onClose();
              }}
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Modificar perfil" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
