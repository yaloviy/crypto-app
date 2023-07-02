import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Alert, AlertColor, Box, Grid, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../utils/hook/hook';
import { changePassword} from '../../../utils/yup';
import { updateUserPassword } from '../../store/thrunks/assets';
import { useStyles } from './style';

const ChangePasswordComponent = () => {
    const classes = useStyles()


    const dispatch = useAppDispatch()



    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor | undefined>('success')


    const {
        register, 
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(changePassword)
    })

    const handleSubmitForm = (data: any) => {
        console.log(data)
        try {
            dispatch(updateUserPassword(data))
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
        <Grid className={classes.root} container component='form' onSubmit={handleSubmit(handleSubmitForm)}>
            <Box className={classes.wrapper}>

                <TextField 
                    error={!!errors.oldPassword} 
                    {...register('oldPassword', )}
                    helperText={errors.oldPassword ? `${errors.oldPassword.message}` : ''}
                    label='Старый пароль' 
                    className={classes.inputText}
                ></TextField>

                <TextField 
                    error={!!errors.newPassword} 
                    {...register('newPassword', )}
                    helperText={errors.newPassword ? `${errors.newPassword.message}` : ''}
                    label='Новый пароль' 
                    className={classes.inputText}
                ></TextField>

                <LoadingButton 
                    className={classes.inputSubmit} 
                    type='submit'>Сохранить изменения
                </LoadingButton>

            </Box>
            <Snackbar open={open}>
                        <Alert severity={severity} sx={{ width: '100%' }}>
                            {severity === 'success' ? 'Пароль успешно изменен': 'Что-то пошло не так'}
                        </Alert>
            </Snackbar>
        </Grid>
    );
};

export default ChangePasswordComponent;

function updatePassword(data: any): any {
    throw new Error('Function not implemented.');
}
