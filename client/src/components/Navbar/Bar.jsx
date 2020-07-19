import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles( theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    }
}))

const Bar = ({ openDrawer, open}) => {
    const classes = useStyles();
    return ( 
        <AppBar position="fixed" color="secondary"
            className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
            <Toolbar>
                <IconButton 
                    color="inherit"
                    aria-label="open drawer"
                    adge="start"
                    onClick={openDrawer}
                    className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />    
                </IconButton>
                <Typography variant="h6" noWrap> 
                    Remote Control IoT  
                </Typography>
            </Toolbar>
        </AppBar>
     );
}
 
export default Bar;