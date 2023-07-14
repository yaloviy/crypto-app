import { createAsyncThunk } from "@reduxjs/toolkit";
import {userDataLogin, userDataRegister} from '../../../../common/types/auth/auth'
import { useAppDispatch } from "../../../../utils/hook/hook";
import { axiosinstance, axiosinstanceAuth } from "../../../../utils/router/axios";




export const loginUser = createAsyncThunk(
    'auth/login',
    async (data:userDataLogin, {rejectWithValue})  => {
        try {
            const user = await axiosinstance.post('/auth/login', data)
            sessionStorage.setItem('token', user.data.token)
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
            if (user.data.status === 400 || user.data.status === 401 || user.data.status === 500) {
                return 
            }
                sessionStorage.setItem('token', user.data.token)
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
            return await user.data
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
            const user = await axiosinstanceAuth.patch('/users', data)
            
            return await user.data
        } catch (error:any) {
            if (error.response && error.response.data.message) {
                rejectWithValue(error.response.data.message)
            }  else {
                return rejectWithValue(error.message)
            }
        } 
    }

)



export const deleteUser = createAsyncThunk(
    'users/delete-user',
    async (_, {rejectWithValue})  => {
        try {
            return await axiosinstanceAuth.delete('/users')

        } catch (error:any) {
            if (error.response && error.response.data.message) {
                rejectWithValue(error.response.data.message)
            }  else {
                return rejectWithValue(error.message)
            }
        }
    }

)