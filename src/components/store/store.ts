import {configureStore} from '@reduxjs/toolkit'
import authSlice from './slice/auth'
import  assetSlice  from './slice/assets'
import  watchlistSlice  from './slice/watchlist'
import  getNewsSlice  from './slice/news'

const store = configureStore({
    reducer: {
        auth: authSlice,
        asset: assetSlice,
        watchlist: watchlistSlice,
        news: getNewsSlice,
    }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState> 

export default store

