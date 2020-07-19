import React,{useState, useEffect, useContext} from 'react';
import axios from '../config/axios';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
        Grid, 
        Button, 
        Paper, 
        Typography, 
        Input, 
        InputLabel, 
        InputAdornment , 
        FormControl
    } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import { AccountCircle, Lock,} from '@material-ui/icons'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';

import AuthContext from '../context/authentication/authContext';

const useStyles = makeStyles( (theme) => ({

    container:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    },

    input:{
        padding: '10px',
    },

    inputContainer:{
        marginBottom: '20px'
    },

    title:{
        marginBottom: '20px;'
    },

    error:{
        color: 'red'
    },

    form:{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        marginTop: '80px'
    }

}));

const Login = (props) => {

    const history = useHistory();
    const classes = useStyles();

    // Context - Autenticacion
    const authContext = useContext(AuthContext);
    const { iniciarSesion } = authContext;


    useEffect(()=>{
        if(localStorage.getItem('token')) history.push('/home');
    },[history])

    const [errorMessage, setErrorMessage] = useState('');

    const formik = useFormik({

        initialValues:{
            dni: '',
            password: ''
        },
        validationSchema: Yup.object({
            dni: Yup.string().required('* El DNI es obligatorio'),
            password: Yup.string().required('* La constraseña es obligatoria')
        }),
        onSubmit: async data => {          
            try{
                const response = await axios.post('/api/auth', data);                
                localStorage.setItem('token',response.data.token);
                props.history.push('/home');
            }catch(error){
                formik.values.dni = '';
                formik.values.password = '';
                setErrorMessage(error.response.data.msg);

                setTimeout(()=>{
                    setErrorMessage('');
                },2000);

            }
        }
    });

    return ( 

        <>

        <Grid container className={classes.container}>
            <Grid item xs={12} sm={8} md={3} >
                <form onSubmit={formik.handleSubmit}>
                    <Paper className={classes.form} elevation={3}>
                        <Typography className={classes.title} variant="h5"> Ingreso al sistema </Typography>

                        <FormControl color="secondary" className={classes.inputContainer}>                        
                            <InputLabel id="dni"> Ingresar DNI </InputLabel>
                            <Input
                                id="dni"
                                name="dni"
                                className={classes.input}
                                value={formik.values.dni}
                                onChange={formik.handleChange}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                            />        

                            {formik.errors.dni && (
                                <Typography className={classes.error} variant="caption" component="p"> {formik.errors.dni} </Typography>    
                            )}
                          
                        </FormControl>

                        <FormControl color="secondary" className={classes.inputContainer}>
                            <InputLabel id="password"> Ingresar Contraseña </InputLabel>
                            <Input 
                                label="probando"
                                id="password"
                                name="password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                className={classes.input}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock /> 
                                    </InputAdornment>
                                }
                            />
                            {formik.errors.password && (
                                <Typography className={classes.error} variant="caption" component="p"> {formik.errors.password} </Typography>    
                            )}
                        </FormControl>

                        <Button type="submit" variant="contained" color="secondary"> Ingresar </Button>
                    </Paper>
                </form>     
            </Grid>
        </Grid>

        {errorMessage && (
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={8} md={3}>
                    <Alert variant="filled" severity="error"> {errorMessage} </Alert>
                </Grid>
            </Grid>
        )}                            

        </>

     );
}
 
export default Login;