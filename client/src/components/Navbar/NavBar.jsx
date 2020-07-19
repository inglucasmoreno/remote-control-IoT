import React from 'react';
import Bar from './Bar';
import Menu from './Menu';
import { CssBaseline } from '@material-ui/core';

const NavBar = ({open, openDrawer, closeDrawer, logout}) => {
    return ( 
        <>
            <CssBaseline />  
            <Bar open={open} openDrawer={openDrawer} />
            <Menu open={open} closeDrawer={closeDrawer} logout={logout}/>
        </>
    );
}
 
export default NavBar;