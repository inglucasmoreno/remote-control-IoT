import React, {useReducer} from 'react';
import axios from '../../config/axios';
import {useHistory} from 'react-router-dom';
import authContext from './authContext';
import authReducer from './authReducer';

import { LOGIN_EXITOSO } from '../../types';

const AuthState = props => {

    const history = useHistory();
    
    const initalState = {
        autenticado: null,
        mensaje: null,
        cargando: true
    }

    const [ state, dispatch ] = useReducer(authReducer, initalState);

    const iniciarSesion = async data => {
        try{
            const response = await axios.post('api/auth',data);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: response.data
            });
            history.push('/home');
        }catch(error){
            console.log(error);    
        }
    }

    return(
        <authContext.Provider
            value={{
                autenticado: state.autenticado,
                mensaje: state.mensaje,
                cargando: state.cargando,
                iniciarSesion
            }}
        >
            {props.children}    
        </authContext.Provider>
    )

}
 
export default AuthState;