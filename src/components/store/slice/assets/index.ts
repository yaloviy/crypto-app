
import { createSlice } from '@reduxjs/toolkit'


import { getCoinGeckoAssets, getTopPriceData } from '../../thrunks/assets'



const initialState:any = {
    assets: [

    ],
    favoriteAssets: [
        
    ],
    topPriceData: [

    ],
    isLoading: true
}


export const assetSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {}, 
    extraReducers: (builder ) => {
        builder.addCase(getCoinGeckoAssets.pending, (state, action) => {
            state.isLoading = true
            
        })
        builder.addCase(getCoinGeckoAssets.fulfilled, (state, action) => {
            state.favoriteAssets.push(action.payload)
            state.isLoading = false
        })
        builder.addCase(getCoinGeckoAssets.rejected, (state, action) => {
            
        })
        builder.addCase(getTopPriceData.fulfilled, (state,action) => {
            state.topPriceData = action.payload
        })
    }
})


export default assetSlice.reducer