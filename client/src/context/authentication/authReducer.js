import {
    LOGIN_EXITOSO
} from '../../types';

export default (state, action) => {
    switch (action.type){
       
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return({
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            });    
       
        default:
            return state;    
    }
}