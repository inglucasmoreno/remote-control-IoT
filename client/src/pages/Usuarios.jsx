import React,{useEffect} from 'react';
import Layout from '../components/Layout';
import UserTable from '../components/Usuarios/UserTable';
import {useHistory} from 'react-router-dom';

const Usuarios = () => {
    
    const history = useHistory();
    
    useEffect(()=>{
        if(!localStorage.getItem('token')) history.push('/');    
    },[])

    return ( 
        <Layout>
            <UserTable />
        </Layout>
     );
}
 
export default Usuarios;