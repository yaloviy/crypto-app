import { Alert, AlertColor, Avatar, Box, Grid, Snackbar, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import { useStyles } from './style';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createWatchList} from '../../store/thrunks/assets';





const SingleAssetPage: FC = (): JSX.Element =>   {
    const { id } = useParams()
    const topPriceData:any = useAppSelector(state => state.asset.topPriceData)

    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor | undefined>('success')
    
    const asset =  topPriceData.find((el:any) => el.name === id?.slice(1))
    
    const classes = useStyles()

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const postFavorite = () => {
        try {
            const data = {name:asset.name, assetId: asset.id}
            dispatch(createWatchList(data))
            setOpen(true)
            setSeverity('success')
            setTimeout(() => {
                setOpen(false)
            }, 1500)
        } catch (error) { 
            setOpen(true)
            setSeverity('error')
            setTimeout(() => {
                setOpen(false)
            }, 1500)
        }
        
       }



    return (
        <>
            {asset && (
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={12} className={classes.contents}>
                        <Typography className={classes.contentsName} variant='h2'>{asset.name}</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Avatar src={asset.image} sx={{marginRight: '10px'}} />
                            <Typography sx={{fontSize: 22, fontWeight: 600}}>{asset.symbol.toUpperCase()}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Typography variant='h2' sx={{fontSize: 22, fontWeight: 600, marginRight: 2}}>Цена:</Typography>
                            <Typography variant='h2' sx={{fontSize: 18, fontWeight: 400}}>${asset.current_price}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                        <Typography variant='h2' sx={{fontSize: 22, fontWeight: 600, marginRight: 2}}>Изменение цены:</Typography>
                            <Typography variant='h2' sx={{fontSize: 22, fontWeight: 600}}>${asset.price_change_24h.toFixed(5)}</Typography>
                        </Grid>
                        
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Typography variant='h2' sx={{fontSize: 22, fontWeight: 600, marginRight: 2}}>% Изменение цены:</Typography>
                            <Typography variant='h2' sx={{fontSize: 22, fontWeight: 600}}>{asset.price_change_percentage_24h.toFixed(5)}%</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.buttons} >
                        <Avatar className={classes.button} onClick={() => navigate(-1)}><ArrowBackIcon /></Avatar>
                        <Avatar onClick={postFavorite} className={classes.button}><FavoriteIcon /></Avatar>
                        <Avatar className={classes.button} sx={{transform: 'rotate(180deg)'}} onClick={() => navigate(+1)}><ArrowBackIcon /></Avatar>
                    </Grid> 
                    <Snackbar open={open} autoHideDuration={6000}>
                        <Alert severity={severity} sx={{ width: '100%' }}>
                            Успешно добавлено
                        </Alert>
                    </Snackbar>
                </Grid>
            )}
            
        </>
    );
};

export default SingleAssetPage;