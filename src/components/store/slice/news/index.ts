
import { createSlice } from '@reduxjs/toolkit'
import { getNews } from '../../thrunks/news'




const initialState:any = {
    assets: [

    ]
}


export const getNewsSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {}, 
    extraReducers: (builder ) => {
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.assets = action.payload
        })
    }
})



export default getNewsSlice.reducer