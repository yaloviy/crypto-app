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
    userinfo: {} | IPublicUser,
    isLogin: boolean
}

interface IPublicUser {
    id: null | number,
    firstName: string,
    username: string,
    email:string,
    createdAt: string,
    updatedAt: string,
    watchList: [IWatchList]
}


interface IWatchList {
    id: null | number,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: null | number,
}