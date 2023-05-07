import * as yup from 'yup'
import { AppErrors } from '../../common/errors'

export const LoginSchema = yup.object().shape({
    email: yup.string().email(AppErrors.EmailNotValidated).required(AppErrors.ObligatoryField),
    password: yup.string().required(AppErrors.ObligatoryField).matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g, AppErrors.InvalidPasswordFormat)
})