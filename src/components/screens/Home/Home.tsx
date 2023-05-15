

import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import TopBarComponent from '../../common/top-bar';
import { getCoinGeckoAssets } from '../../store/thrunks/assets';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Box, Grid } from '@mui/material';

import { useStyles } from './style';
import AreaChartComponent from '../../common/charts/area-chart';


export const Home: React.FC  = ():JSX.Element => {
    const dispatch = useAppDispatch()
    const assets = useAppSelector(state => state.asset)
    const getFavoriteAsset: any[] = useAppSelector(state => state.asset.favoriteAssets)
    const classes = useStyles()
    const fetchDataRef = useRef(false)
    console.log(getFavoriteAsset)

    

    const [favoriteAssets, setFaviriteAssets] = useState([
        'bitcoin', 'ethereum'
    ])


    const filteredArray = getFavoriteAsset.filter((value:any, index, self) => index === self.findIndex((t:any) => t.name === value.name))
    const getFavoriteAssets = useCallback((data:any) => {
        data.forEach((el:string) => {
            dispatch(getCoinGeckoAssets(el))
            
        })
    }, [dispatch]

    )
 
    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        getFavoriteAssets(favoriteAssets)
    }, [favoriteAssets, getFavoriteAssets])

    const renderFavoriteBlock = filteredArray.map((el:any, id) =>  {
        const elPrice = el.data.prices[0][1].toFixed(3)
        const currentCap = el.data.market_caps[0][1].toFixed(0)
        console.log(el)
        return (
            <Grid  item key={id} lg={6} md={6} xs={12}>
                    <Grid container className={classes.card}>
                        <Box className={classes.cardLeftSide} >
                            <h5 className={classes.assetName}>{el.name}</h5> 
                            <Box className={classes.cardDetails}>
                                <h3>${elPrice}</h3>
                                <p>${currentCap}</p>
                            </Box>
                        </Box>
                        <Grid item lg={6} md={6} xs={12}>
                            <AreaChartComponent data={el.data.prices}></AreaChartComponent>
                        </Grid>
                    </Grid>
            </Grid>
        )
    }) 

    return (
       <div>
            <Box className={classes.root}>
                <Grid className={classes.container} container spacing={2}>
                    {renderFavoriteBlock}
                </Grid>
            </Box>
       </div>
    );
};


export default Home
