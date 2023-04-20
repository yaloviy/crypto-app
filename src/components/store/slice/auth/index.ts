import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../../common/types/auth/auth'


const initialState: IAuthState = {
    userinfo: {
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
    isLogin: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.userinfo = action.payload
            state.isLogin = true
            console.log(state.isLogin)
            console.log(state.userinfo)
        },
        register() {
            
        }
    }
})

export const { login } = authSlice.actions
export default authSlice.reducer