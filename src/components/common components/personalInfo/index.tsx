import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Alert, AlertColor, Box, Grid, Snackbar, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import { changePersonalInfo,} from '../../../utils/yup';
import { changeUserInfo, getPublicUser} from '../../store/thrunks/auth';
import { useStyles } from './style';

const SettingsPersonalInfoComponent = () => {

    const dispatch = useAppDispatch()
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        username: '',
        email: ''
    })

    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor | undefined>('success')

    
    const classes = useStyles()
    const { user } = useAppSelector(state => state.auth)

    useEffect(() => {
        user && setUserInfo({ 
            firstName: user.firstName as string,
            username: user.username as string,
            email: user.email as string,
        })
    }, [user])

    const {
        register, 
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(changePersonalInfo)
    })

    const handleSubmitForm = async (data: any) => {
        try {
            await dispatch(changeUserInfo(data))
            dispatch(getPublicUser())
            setOpen(true)
            setSeverity('success')
            setTimeout(() => {
                setOpen(false)
            }, 3000)
        } catch (error) { 
            setOpen(true)
            setSeverity('error')
            setTimeout(() => {
                setOpen(false)
            }, 3000)
        }
    }

    return (
        <Grid component='form' className={classes.root} container onSubmit={handleSubmit(handleSubmitForm)}>
            <Box className={classes.wrapper}>
                <TextField 
                error={!!errors.firstName}
                helperText={errors.firstName ? `${errors.firstName.message}` : ''}
                {...register('firstName', )}  
                className={classes.inputText} 
                label='Имя' 
                type='text' 
                variant='outlined' 
                placeholder={userInfo.firstName}
                />
                <TextField 
                    error={!!errors.username}
                    helperText={errors.username ? `${errors.username.message}` : ''}
                    {...register('username', )}  
                    className={classes.inputText} 
                    label='Логин' 
                    type='text' 
                    variant='outlined' 
                    placeholder={userInfo.username}
                />
                <TextField 
                    error={!!errors.email}
                    helperText={errors.email ? `${errors.email.message}` : ''}
                    {...register('email', )}  
                    className={classes.inputText} 
                    label='Почта' 
                    type='text' 
                    variant='outlined' 
                    placeholder={userInfo.email}
                    />
                    
                <LoadingButton className={classes.inputSubmit} type='submit'>Сохранить изменения</LoadingButton>
            </Box>
            <Snackbar open={open}>
                        <Alert severity={severity} sx={{ width: '100%' }}>
                            Персональные данные изменены
                        </Alert>
            </Snackbar>
        </Grid>
    );
};

export default SettingsPersonalInfoComponent;