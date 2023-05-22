

import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import TopBarComponent from '../../common/top-bar';
import { getCoinGeckoAssets } from '../../store/thrunks/assets';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Box, Grid, Icon } from '@mui/material';

import { useStyles } from './style';
import AreaChartComponent from '../../common/charts/area-chart';


import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';


import waitingForDownload from '../../../assets/images/99px_ru_animacii_10620_kot_prjachetsja_v_chashke.gif'


export const Home: React.FC  = ():JSX.Element => {
    const dispatch = useAppDispatch()
    const assets = useAppSelector(state => state.asset)
    const getFavoriteAsset: any[] = useAppSelector(state => state.asset.favoriteAssets)
    const favoriteIsLoading: boolean = useAppSelector(state => state.asset.isLoading)
    const classes = useStyles()
    const fetchDataRef = useRef(false)

    

    const [favoriteAssets, setFaviriteAssets] = useState([
        'bitcoin', 'ethereum'
    ])
    console.log(getFavoriteAsset)

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
        const elPrice = el.data[el.data.length-1][1].toFixed(3)
        const changePrice = el.singleAsset.price_change_24h.toFixed(2)
        const changePricePercentage = el.singleAsset.price_change_percentage_24h.toFixed(0)
        return (
            <Grid  item key={id} lg={6} md={6} xs={12}>
                    <Grid container className={classes.card}>
                        <Box className={classes.cardLeftSide} >
                            <h5 className={classes.assetName}>{el.name}</h5> 
                            <Box className={classes.cardDetails}>
                                <h3>${elPrice}</h3>
                                <Box className={classes.cardInfoPercentage}>
                                    {changePricePercentage > 0 ? <Box className={classes.cardPercentageUp}><Icon>{changePricePercentage > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}</Icon><p>{changePricePercentage}%</p></Box> 
                                    : 
                                    <Box className={classes.cardPercentageDown}><Icon>{changePricePercentage > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}</Icon><p>{changePricePercentage}%</p></Box>}
                                    <Box>
                                        ${changePrice}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Grid  item lg={6} md={6} xs={12}>
                            <AreaChartComponent data={el.data}></AreaChartComponent>
                        </Grid>
                    </Grid>
            </Grid>
        )
    }) 

    return (
            <Box className={classes.root}>
                <Grid className={classes.container} container spacing={2}>
                    {renderFavoriteBlock}
                </Grid>
            </Box>
    );
};


export default Home
