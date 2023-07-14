import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import AssetsTableComponent from '../../common components/assetTable';
import { getTopPriceData, getWatchList } from '../../store/thrunks/assets';

const WatchListPage = () => {

    const watchlistAssets = useAppSelector(state => state.watchlist.assets)

    const dispatch = useAppDispatch()

    const { topPriceData } = useAppSelector(state => state.asset)

    const filteredArray = topPriceData.filter((el:any) => {
        return watchlistAssets.some((watchlistEl:any) => {
            return watchlistEl.assetId === el.id
        })
    })

    

    useEffect(() => {
        dispatch(getTopPriceData())
        dispatch(getWatchList())
    }, [])




    return (
        <>
        <Grid item xs={12} sx={{padding: 5}}>
            <AssetsTableComponent assets={filteredArray}></AssetsTableComponent>
        </Grid>
        </>
    );
};

export default WatchListPage;