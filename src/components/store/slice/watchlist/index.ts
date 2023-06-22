
import { createSlice } from '@reduxjs/toolkit'
import { getWatchList } from '../../thrunks/assets'




const initialState:any = {
    assets: [

    ]
}


export const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {}, 
    extraReducers: (builder ) => {
        builder.addCase(getWatchList.fulfilled, (state, action) => {
            state.assets = action.payload
        })
    }
})



export default watchlistSlice.reducer