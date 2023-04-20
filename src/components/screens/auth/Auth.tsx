import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import './style.scss'
import { Box } from '@mui/material'
import { axiosinstance } from '../../../utils/router/axios';
import axios from 'axios';
import { login } from '../../../components/store/slice/auth'
import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import { useSelector } from 'react-redux';
import { finished } from 'stream/promises';
import { AppErrors } from '../../common/errors';


const Auth = () => {
    const location = useLocation()
    const [firstName, setFirstName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const dispatch = useAppDispatch()
    const useSelector = useAppSelector
    const navigate = useNavigate()



    const registerValidation = (value:object) => {
        
    }


    const handleSubmit = async (e: { preventDefault: () => void}) => {
        e.preventDefault()
        if (location.pathname == '/login') {
        try {
            const userData = {
                email,
                password
            }
            const user = await axiosinstance.post('/auth/login', userData)
            await dispatch(login(user.data))
            navigate('/')

        } catch (error) {
            console.log(AppErrors.SomethingWentWrong)
        } finally {
            
        }

        } else if (location.pathname == '/register') {
            const userData = {
                firstName,
                username,
                email,
                password,
            }
            registerValidation(userData)
            const createUser = await axiosinstance.post('/auth/register', userData)
            await console.log(createUser.data)
            
        }
    }
    return (
        <div className='wrapper'>
            <form className='auth-form' onSubmit={handleSubmit}>
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
                        email={setEmail} 
                        password={setPassword} 
                        navigate={navigate} /> 
                    : location.pathname === '/register' ? <Register 
                        firstName={setFirstName} 
                        username={setUsername}
                        email={setEmail}
                        password={setPassword}
                        repeatPassword={setRepeatPassword} 
                        navigate={navigate}/> 
                    : null}
                </Box>
            </form>
        </div>
    );
};

export default Auth;