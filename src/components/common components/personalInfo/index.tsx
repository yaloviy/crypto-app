import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField } from '@mui/material';
import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import { changeUserInfo, getPublicUser } from '../../store/thrunks/auth';
import { useStyles } from './style';

const SettingsPersonalInfoComponent = () => {

    const dispatch = useAppDispatch()
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        username: '',
        email: ''
    })
    
    const classes = useStyles()
    const { user } = useAppSelector(state => state.auth)

    useEffect(() => {
        user && setUserInfo({ 
            firstName: user.firstName as string,
            username: user.username as string,
            email: user.email as string,
        })
    }, [user])

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(changeUserInfo(userInfo))
    }

    console.log(user)

    return (
        <Grid component='form' className={classes.root} container onSubmit={handleSubmit}>
            <Box className={classes.wrapper}>
                <TextField onChange={(e) => (setUserInfo({...userInfo, firstName: e.target.value}))} value={userInfo.firstName} className={classes.inputText} label='Имя' type='text' variant='outlined' />
                <TextField onChange={(e) => (setUserInfo({...userInfo, username: e.target.value}))} value={userInfo.username} className={classes.inputText} label='Логин' type='text' variant='outlined' />
                <TextField onChange={(e) => (setUserInfo({...userInfo, email: e.target.value}))} value={userInfo.email} className={classes.inputText} label='Почта' type='text' variant='outlined' />
                <LoadingButton className={classes.inputSubmit} type='submit'>Сохранить изменения</LoadingButton>
            </Box>
        </Grid>
    );
};

export default SettingsPersonalInfoComponent;