import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
    ChevronLeft,
    ExitToApp,
    PeopleOutline,
    Home
} from '@material-ui/icons';

import {
        Drawer,
        IconButton,
        Divider,
        List,
        ListItem,
        ListItemIcon,
        ListItemText
    } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles( theme =>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    link:{
        textDecoration: 'none',
        color: 'black'   
    }

}));

const Menu = ({ open, closeDrawer, logout }) => {
    
    const classes = useStyles();
    
    return ( 

        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{ paper: classes.drawerPaper }}
            >
            
            <div className={classes.drawerHeader}>
                <IconButton onClick={closeDrawer}>
                    <ChevronLeft />  
                </IconButton>
            </div>
            
            <Divider />

            <List>

                <Link to="/home" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon> <Home /> </ListItemIcon>
                        <ListItemText> Inicio </ListItemText>
                    </ListItem>
                </Link>

                <Link to="/usuarios" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon> <PeopleOutline /> </ListItemIcon>
                        <ListItemText> Usuarios </ListItemText>
                    </ListItem>
                </Link>
               
                <ListItem onClick={logout} button>
                    <ListItemIcon> <ExitToApp /> </ListItemIcon>
                    <ListItemText> Cerrar Sesión </ListItemText>
                </ListItem>

            </List>

        </Drawer>

     );
}
 
export default Menu;