import React from 'react';
import { TextField, Button, Typography } from '@mui/material'
import { IPropsRegister } from '../../../../common/types/auth/auth';
import { useStyles } from '../styles';
import AppLoadingButton from '../../../common components/loading-button';

const Register: React.FC<IPropsRegister> = (props:IPropsRegister): JSX.Element => {
    const { setPassword, navigate, setRepeatPassword, register, errors, loading } = props
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" fontFamily='Popins' component="h2" textAlign='center'>Регистрация</Typography>
            <TextField error={!!errors.firstName} helperText={errors.firstName ? `${errors.firstName.message}` : ''} fullWidth={true} margin='normal' id="outlined-basic" label="Ваше имя" variant="outlined" placeholder='Введите ваше имя' {...register('firstName')} />
            
            <TextField error={!!errors.username} helperText={errors.username ? `${errors.username.message}` : ''} fullWidth={true} margin='normal' id="outlined-basic" label="Ваш логин" variant="outlined" placeholder='Придумайте логин' {...register('username')} />
           
            <TextField error={!!errors.email} helperText={errors.email ? `${errors.email.message}` : ''} fullWidth={true} margin='normal' id="outlined-basic" label="Ваша почта" variant="outlined" placeholder='Введите вашу почту' type='text' {...register('email')} />
            
            <TextField error={!!errors.password} helperText={errors.password ? `${errors.password.message}` : ''} fullWidth={true} margin='normal' id="outlined-basic" label="Ваш пароль" variant="outlined" placeholder='Придумайте пароль' type='password' {...register('password')} />
            
            <TextField error={!!errors.confirmPassword} helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''} fullWidth={true} margin='normal' id="outlined-basic" label="Повторите ваш пароль" variant="outlined" placeholder='Пароль' type='password' {...register('confirmPassword')} />
            
            <AppLoadingButton  loading={loading} sx={{ fontFamily: 'Popins', margin: 'auto', width: 'fit-content', marginTop: 2, marginBottom: 2 }} size='large' variant="contained" type="submit">Зарегистрироваться!</AppLoadingButton>
            <Typography  variant="body1" fontFamily='Popins' component="h2" textAlign='center'>У вас есть аккаунт? <span onClick={() => navigate('/login')} className={classes.incitingText}>Логин</span></Typography>
        </>
    );
};

export default Register;