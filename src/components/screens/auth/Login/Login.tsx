import React, { Fragment } from 'react';
import Header from '../../../common/Header/Header';
import { TextField, Button, Typography } from '@mui/material'
import styles from './style.module.css'
import { margin } from '@mui/system';
import { IPropsLogin } from '../../../common/types/auth/auth';
import { jsx } from '@emotion/react';


interface IForm {
    email: () => string,
    password: () => string,
}

const Login: React.FC<IPropsLogin> = ( props: IPropsLogin ): JSX.Element => {
    const {email, password, navigate} = props
    return (
        < > 
            <Typography variant="h2" fontFamily='Poppins' component="h2" textAlign='center'>Авторизация</Typography>
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Ваша почта" variant="outlined" placeholder='Почта' onChange={(e) => (email(e.target.value))} />
            <TextField fullWidth={true} margin='normal' id="outlined-basic" label="Ваш пароль" variant="outlined" placeholder='Пароль' type='password' onChange={(e) => (password(e.target.value))} />
            <Button type='submit' sx={{ fontFamily: 'Poppins', margin: 'auto', width: '40%', marginTop: 2, marginBottom: 2 }} size='medium' variant="contained">Войти!</Button>
            <Typography variant="body1" fontFamily='Poppins' component="h2" textAlign='center'>У вас нет аккаунта? <span onClick={() => navigate('/register')} className='auth-form__incitingtext'>Зарегистрироваться</span></Typography>
        </ >
    );
};

export default Login;