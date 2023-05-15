import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from '../../thrunks/auth'



export interface IAuthState {
    user:  IPublicUser,
    isLogin: boolean,
    token: string,
    isLoading: boolean
    
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


const initialState: IAuthState = {
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
    isLogin: false,
    isLoading: false,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login(state, action) {
        //     state.user = action.payload.user
        //     state.isLogin = true
        //     state.token = action.payload.token
            
        // },
        rejectLogin(state,action) {
            console.log(action)
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, ( state, action ) => {
            state.user = action.payload.user
            state.isLogin = true
            state.token = action.payload.token
            state.isLoading = false
        })
        builder.addCase(loginUser.pending, ( state, action ) => {
            state.isLogin = false
            state.isLoading = true
        })
        builder.addCase(loginUser.rejected, ( state, action ) => {
            state.isLogin = false
            state.isLoading = false
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isLogin = true
            state.token = action.payload.token
            state.isLoading = false
        })
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLogin = false
            state.isLoading = true
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLogin = false
            state.isLoading = false 
        })
    }
    
})

export const { rejectLogin } = authSlice.actions
export default authSlice.reducer