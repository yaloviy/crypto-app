import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosinstance } from "../../../../utils/router/axios";


export const loginUser = createAsyncThunk(
    'auth/login',
    async (data:any, {rejectWithValue, }) => {
        try {
            const user = await axiosinstance.post('/auth/login', data)
            return user.data
        } catch (error:any) {
            if (error.response & error.response.data.message) {
               return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)