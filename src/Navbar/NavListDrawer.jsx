import {Box} from '@mui/system';
import {List, ListItem, ListItemButton, ListItemIcon,ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DraftIcon from '@mui/icons-material/Home';


import React from 'react';

export default function NavListDrawer(){
    return(
        
        
        <Box sx={{widht:250}}>
           <nav> 
            <List>

                <ListItem>
                    <ListItemIcon>
                        <HomeIcon />    
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DraftIcon />    
                    </ListItemIcon>
                    <ListItemText primary="Carro"/>
                </ListItem>
            </List>
            </nav>
    
            <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton 
                        component="a"
                        href="#conhref">
                        <ListItemText primary="Mis Compras"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component="a"
                        href="#conhref"
                    >
                        <ListItemText primary="Con href"/>
                    </ListItemButton>
                </ListItem>

            </List>
            </nav>
        </Box>
        

        )


}