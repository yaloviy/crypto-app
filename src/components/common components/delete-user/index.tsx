import { LoadingButton } from '@mui/lab';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './style';
import { useAppDispatch } from '../../../utils/hook/hook';
import { deleteUser } from '../../store/thrunks/auth';
import { useNavigate } from 'react-router-dom';

const DeleteUserComponent = () => {
    
    const classes = useStyles()
    
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    
    const [checked, setChecked] = useState(false)

    const handleDelete = () => {
        dispatch(deleteUser())
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('firstName')
        navigate('/login')
    }
    
    return (
        <Grid className={classes.root} container>
            <Box className={classes.wrapper}>
                <Grid>
                    <Typography variant='h2'>Удаляя аккаунт, вы удаляете всю персональную информацию. Вы уверены?</Typography>
                </Grid>
                <FormGroup>
                    <FormControlLabel onChange={() => setChecked(!checked)} control={<Checkbox checked={checked} />} label="Я хочу удалить свой аккаунт" />
                </FormGroup>
                <Button  
                    onClick={handleDelete}
                    disabled={!checked}
                    variant='outlined'
                    color='secondary'
                    >Удалить аккаунт
                </Button>
            </Box>
        </Grid>
    );
};

export default DeleteUserComponent;