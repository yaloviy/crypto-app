

import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import TopBarComponent from '../../common/top-bar';
import { getCoinGeckoAssets, getTopPriceData } from '../../store/thrunks/assets';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { Box, Grid, Icon } from '@mui/material';

import { useStyles } from './style';
import AreaChartComponent from '../../common/charts/area-chart';


import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';


import LineСhartComponent from '../../common/charts/line-chart';
import { IChartData, ISingleAsset } from '../../../common/types/assets';
import TopPriceComponent from '../../common/top-price';

export const Home: React.FC  = ():JSX.Element => {
    const dispatch = useAppDispatch()
    const assets = useAppSelector(state => state.asset)
    const getFavoriteAsset: IChartData[] = useAppSelector(state => state.asset.favoriteAssets)
    const favoriteIsLoading: boolean = useAppSelector(state => state.asset.isLoading)
    const classes = useStyles()
    const fetchDataRef = useRef(false)
    const topPriceData:any = useAppSelector(state => state.asset.topPriceData)
    

    const [favoriteAssets, setFaviriteAssets] = useState([
        'bitcoin', 'ethereum'
    ])

    const filteredArray = getFavoriteAsset.filter((value:any, index, self) => index === self.findIndex((t:any) => t.name === value.name))

    const getFavoriteAssets = useCallback((data:any) => {
        data.forEach((el:string) => {
            dispatch(getCoinGeckoAssets(el))
            
        })
    }, [dispatch])

    const filteredTopPriceData = topPriceData.slice().sort((a:any,b:any) => (b.current_price - a.current_price))
 
    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        getFavoriteAssets(favoriteAssets)
        dispatch(getTopPriceData())
    }, [favoriteAssets, getFavoriteAssets])

    const renderFavoriteBlock = filteredArray.map((el:any, id) =>  {
        const elPrice = el.data[el.data.length-1][1].toFixed(2)
        let changePrice = el.singleAsset.price_change_24h.toFixed(2)
        let changePricePercentage = el.singleAsset.price_change_percentage_24h.toFixed(2)

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
                <Grid className={classes.areaChart} container spacing={2}>
                    {renderFavoriteBlock}
                </Grid>
                <Box className={classes.lineChart} >
                   <Grid  item lg={12} md={12} xs={12}>
                    {filteredArray.length && <LineСhartComponent data={filteredArray}  />}
                   </Grid>
                </Box>
                <Grid container>
                <Grid className={classes.topPrice}  item lg={12} md={12} xs={12}>
                        <TopPriceComponent topPriceData={filteredTopPriceData.slice(0, 5)}></TopPriceComponent>
                   </Grid>
                </Grid>
            </Box>
    );
};


export default Home
