import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import NavBar from './Navbar/NavBar';

const drawerWidth = 240;
const useStyles = makeStyles( theme => ({

    root: {
        display: 'flex',
    },
    
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }  

}))

const Layout = (props) => {

    const history = useHistory();
    const classes = useStyles();
    
    // Estado Local - Control de Menu (Open/Close)
    const [open, setOpen] = useState(false);

    // Abrir Menu
    const openDrawer = () => {
        setOpen(true);
    }

    // Cerrar Menu
    const closeDrawer = () => {
        setOpen(false);
    }

    // Cerrar Sesión
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    return ( 
        <div className={classes.root}>
            
            <NavBar 
                open={open} 
                openDrawer={openDrawer} 
                closeDrawer={closeDrawer} 
                logout={logout}
            />

            <main className={clsx(classes.content, {[classes.contentShift]: open,})}>
                <div className={classes.drawerHeader} />
                {props.children}
            </main>
        
        </div>
     );
}
 
export default Layout;