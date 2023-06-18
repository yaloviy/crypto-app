import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
  
import { Box, fabClasses } from '@mui/material'
import { axiosinstance } from '../../../utils/router/axios';
import axios from 'axios';
// import { login } from '../../../components/store/slice/auth'
import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import { useSelector } from 'react-redux';
import { finished } from 'stream/promises';
import { AppErrors } from '../../../common/errors';

import { useStyles } from './styles';
import { userDataLogin, userDataRegister } from '../../../common/types/auth/auth';



import { DataArray } from '@mui/icons-material';



import { LoginSchema } from '../../../utils/yup';
import { RegisterSchema } from '../../../utils/yup';
import { loginUser, registerUser } from '../../store/thrunks/auth';
import { rejectLogin } from '../../store/slice/auth';

const AuthPage = () => {
    const classes = useStyles()
    const location = useLocation()
    const [firstName, setFirstName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [wrongFirstName, setWrongFirstName] = useState('')
    const [wrongUsername, setWrongUsername] = useState('')
    const [wrongEmail, setWrongEmail] = useState('')
    const [wrongPassword, setWrongPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [validationRepeatPassword, setValidationRepeatPassword] = useState('')
    
    const dispatch = useAppDispatch()
    const useSelector = useAppSelector
    const navigate = useNavigate()


    const {
        register, 
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema)
    })

    const handleSubmitForm = async (data: any) => {
        if (location.pathname === '/login') {
        try {
                await dispatch(loginUser(data))
                navigate('/')
            }

         catch (error) {
            console.log(error)
        } 

        } else if (location.pathname === '/register') {
            try {
                const userData = {
                    firstName: data.firstName,
                    username: data.username,
                    email: data.email,
                    password: data.password
                }

                await dispatch(registerUser(userData))
                navigate('/')
                
            } catch (error) {
                console.log(error)
            }
        }
    }

    const loading = useAppSelector(state => state.auth.isLoading)


    return (
        <div className='wrapper'>
            <form className={classes.root} onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                    maxWidth={500}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    width='100%'
                >
                    {location.pathname === '/login' ? <Login  
                        errors={errors}
                        register={register}
                        navigate={navigate}
                        loading={loading}
                         /> 
                        
                    : location.pathname === '/register' ? <Register 
            
                        setPassword={setPassword}
                        setRepeatPassword={setRepeatPassword}
                        navigate={navigate}
                        register={register}
                        errors={errors}
                        loading={loading}
                        /> 
                    : null}
                </Box>
            </form>
        </div>
    );
};

export default AuthPage; 