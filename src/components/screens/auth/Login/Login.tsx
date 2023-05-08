import React, { Fragment } from 'react';
import Header from '../../../../common/Header/Header';
import { TextField, Button, Typography } from '@mui/material'
import styles from './style.module.css'
import { margin } from '@mui/system';
import { IPropsLogin } from '../../../../common/types/auth/auth';
import { jsx } from '@emotion/react';
import { useStyles } from '../styles';
import AppLoadingButton from '../../../common/loading-button';
// import { useAppSelector } from '../../../utils/hook/hook';

interface IForm {
    email: () => string,
    password: () => string,
}

const Login: React.FC<IPropsLogin> = ( props: IPropsLogin ): JSX.Element => {
    const {navigate, register, errors, loading } = props
    const classes = useStyles()
    // const user = useAppSelector(state => state.auth)
    return (
        < > 
            <Typography variant="h2" fontFamily='Poppins' component="h2" textAlign='center'>Авторизация</Typography>
            <TextField 
            
            fullWidth={true} 
            margin='normal' 
            id="outlined-basic" 
            label="Ваша почта" 
            variant="outlined" 
            placeholder='Почта' 
            
            error={!!errors.email}
            helperText={errors.email? `${errors.email.message}` : ''}
            {...register('email', )} 
            />
            <TextField fullWidth={true} 
            margin='normal' 
            id="outlined-basic" 
            label="Ваш пароль" 
            variant="outlined" 
            placeholder='Пароль' 
            type='password' 
            error={!!errors.password}
            helperText={errors.password? `${errors.password.message}` : ''}
            {...register('password', )} 
             />
            
            {/* <Button type='submit' sx={{ fontFamily: 'Poppins', margin: 'auto', width: '40%', marginTop: 2, marginBottom: 2 }} size='medium' variant="contained">Войти!</Button> */}
            <AppLoadingButton loading={loading} type='submit' sx={{ fontFamily: 'Poppins', margin: 'auto', width: '60%', marginTop: 2, marginBottom: 2 }} size='medium' variant="contained">Войти!</AppLoadingButton>
            <Typography variant="body1" fontFamily='Poppins' component="h2" textAlign='center'>У вас нет аккаунта? <span onClick={() => navigate('/register')} className={classes.incitingText}>Зарегистрироваться</span></Typography>
        </ >
    );
};

export default Login;