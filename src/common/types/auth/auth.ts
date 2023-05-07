import { SliderUnstyledValueLabelSlotPropsOverrides } from "@mui/base"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export interface IPropsLogin<
TFieldValues extends FieldValues = FieldValues,
TContext = any,
>  {
    
    navigate: (to:string) => void,
    register: UseFormRegister<TFieldValues>,
    errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister {
    firstName: (value:string) => void,
    username: (value:string) => void,
    email: (value:string) => void,
    password: (value:string) => void,
    navigate: (to:string) => void,
    wrongFirstName: string,
    wrongUsername: string,
    wrongEmail: string,
    wrongPassword: string,
    repeatPassword: string,
    setRepeatPassword: (value:string) => void,
    validationRepeatPassword: string
}

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



export interface userDataLogin {
    email: string,
    password: string,
}


export interface userDataRegister {
    firstName: string,
    username: string,
    email: string,
    password: string,
}