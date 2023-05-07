import React from 'react';
import { TextField, Button, Typography } from '@mui/material'
import { IPropsRegister } from '../../../../common/types/auth/auth';
import { useStyles } from '../styles';

const Register: React.FC<IPropsRegister> = (props:IPropsRegister): JSX.Element => {
    const {firstName, username, email, password, navigate, wrongFirstName, wrongUsername, wrongEmail, wrongPassword, repeatPassword, setRepeatPassword, validationRepeatPassword } = props
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" fontFamily='Popins' component="h2" textAlign='center'>Регистрация</Typography>
            <TextField onChange={e => (firstName(e.target.value))} fullWidth={true} margin='normal' id="outlined-basic" label="Ваше имя" variant="outlined" placeholder='Введите ваше имя' />
            <span className={classes.spanValidation}>{wrongFirstName}</span>
            <TextField onChange={e => (username(e.target.value))} fullWidth={true} margin='normal' id="outlined-basic" label="Ваш логин" variant="outlined" placeholder='Придумайте логин' />
            <span className={classes.spanValidation}>{wrongUsername}</span>
            <TextField onChange={e => (email(e.target.value))} fullWidth={true} margin='normal' id="outlined-basic" label="Ваша почта" variant="outlined" placeholder='Введите вашу почту' type='text' />
            <span className={classes.spanValidation}>{wrongEmail}</span>
            <TextField onChange={e => (password(e.target.value))} fullWidth={true} margin='normal' id="outlined-basic" label="Ваш пароль" variant="outlined" placeholder='Придумайте пароль' type='password' />
            <span className={classes.spanValidation}>{wrongPassword}</span>
            <TextField onChange={(e) => setRepeatPassword(e.target.value)} fullWidth={true} margin='normal' id="outlined-basic" label="Повторите ваш пароль" variant="outlined" placeholder='Пароль' type='password' />
            <span className={classes.spanValidation}>{validationRepeatPassword}</span>
            <Button sx={{ fontFamily: 'Popins', margin: 'auto', width: '40%', marginTop: 2, marginBottom: 2 }} size='large' variant="contained" type="submit">Зарегистрироваться!</Button>
            <Typography variant="body1" fontFamily='Popins' component="h2" textAlign='center'>У вас есть аккаунт? <span onClick={() => navigate('/login')} className={classes.incitingText}>Логин</span></Typography>
        </>
    );
};

export default Register;