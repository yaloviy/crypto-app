import { createAsyncThunk } from "@reduxjs/toolkit";
import {userDataLogin, userDataRegister} from '../../../../common/types/auth/auth'
import { axiosinstance, axiosinstanceAuth } from "../../../../utils/router/axios";


export const loginUser = createAsyncThunk(
    'auth/login',
    async (data:userDataLogin, {rejectWithValue})  => {
        try {
            const user = await axiosinstance.post('/auth/login', data)
            sessionStorage.setItem('token', user.data.token)
            sessionStorage.setItem('firstName', user.data.user.firstName)
            return user.data
        } catch (error:any) {
            if (error.response && error.response.data.message) {
                rejectWithValue(error.response.data.message)
            }  else {
                return rejectWithValue(error.message)
            }
        }
    }

)



export const registerUser = createAsyncThunk(
    'auth/register',
    async (data:userDataRegister, {rejectWithValue})  => {
        try {
            const user = await axiosinstance.post('/auth/register', data)
            sessionStorage.setItem('token', user.data.token)
            sessionStorage.setItem('firstName', user.data.user.firstName)
            return user.data
        } catch (error:any) {
            if (error.response && error.response.data.message) {
                rejectWithValue(error.response.data.message)
            }  else {
                return rejectWithValue(error.message)
            }
        }
    }

)


export const getPublicUser = createAsyncThunk(
    'auth/get-public-user-info',
    async (_, {rejectWithValue})  => {
        try {
            const user = await axiosinstanceAuth.get('auth/get-public-user-info')
            return user.data
        } catch (error:any) {
            if (error.response && error.response.data.message) {
                rejectWithValue(error.response.data.message)
            }  else {
                return rejectWithValue(error.message)
            }
        }
    }

)


export const changeUserInfo = createAsyncThunk(
    'users/update',
    async (data:any, {rejectWithValue})  => {
        try {
            console.log('+')
            const user = await axiosinstanceAuth.patch('/users', data)
            sessionStorage.setItem('firstName', user.data.firstName)
            console.log(user)
            return user.data
        } catch (error:any) {
            if (error.response && error.response.data.message) {
                rejectWithValue(error.response.data.message)
            }  else {
                return rejectWithValue(error.message)
            }
        }
    }

)