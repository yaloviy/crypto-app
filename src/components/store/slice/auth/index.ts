import { createSlice } from '@reduxjs/toolkit'

import { loginUser } from '../../thrunks/auth'

export interface IAuthState {
    userinfo: object | IPublicUser,
    isLogin: boolean,
    token: string
}

export interface IPublicUser {
    id: null | number,
    firstName: string | object,
    username: string,
    email:string,
    createdAt: string,
    updatedAt: string,
    watchList: [IWatchList]
}


export interface IWatchList {
    id: null | number,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: null | number,
}


const initialState: any = {
    user: {
        id: null,
        firstName: '',
        username: '',
        email:'',
        createdAt: '',
        updatedAt: '',
        watchList: [{
            id: null,
            name: '',
            assetId: '',
            createdAt: '',
            updatedAt: '',
            user: null,
        }]
    },
    token: '',
    isLogin: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload.user
            state.isLogin = true
            state.token = action.payload.token
            
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isLogin = true
            state.token = action.payload.token
        })
    }
})

export const { login } = authSlice.actions
export default authSlice.reducer