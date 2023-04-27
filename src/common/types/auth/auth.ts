import { SliderUnstyledValueLabelSlotPropsOverrides } from "@mui/base"

export interface IPropsLogin  {
    email: (value:string) => void,
    password: (value:string) => void,
    navigate: (to:string) => void,
}

export interface IPropsRegister {
    firstName: (value:string) => void,
    username: (value:string) => void,
    email: (value:string) => void,
    password: (value:string) => void,
    repeatPassword: (value:string) => void,
    navigate: (to:string) => void,
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