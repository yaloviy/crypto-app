import { YouTube } from '@mui/icons-material'
import * as yup from 'yup'
import { AppErrors } from '../../common/errors'

export const RegisterSchema = yup.object().shape({
    firstName: yup.string().required(AppErrors.ObligatoryField),
    username: yup.string().required(AppErrors.ObligatoryField),
    email: yup.string().email(AppErrors.EmailNotValidated).required(AppErrors.ObligatoryField),
    password: yup.string().required(AppErrors.ObligatoryField).matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g, AppErrors.InvalidPasswordFormat),
    confirmPassword: yup.string().required(AppErrors.ObligatoryField).matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g, AppErrors.InvalidPasswordFormat).oneOf([yup.ref("password")], "Пароли не совпадают"),
})


export const LoginSchema = yup.object().shape({
    email: yup.string().email(AppErrors.EmailNotValidated).required(AppErrors.ObligatoryField),
    password: yup.string().required(AppErrors.ObligatoryField).matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g, AppErrors.InvalidPasswordFormat),
})

