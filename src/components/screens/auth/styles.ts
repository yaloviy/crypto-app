import { makeStyles } from "@mui/styles";
import { tokens } from "../../../theme"
import { Theme } from "@mui/material"



export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                // padding: '10px'
            },
            incitingText: {
                color: 'blue',
                textDecoration: 'none',
                cursor: 'pointer',
            },
            spanValidation: {
                color: 'red',
                fontSize: '14px'
            },
            loginButton: {
                fontFamily: 'Poppins !important', 
                margin: 'auto !important',
                width: '60% !important', 
                marginTop: '10px !important', 
                marginBottom: '10px !important',
                color: `${colors.white.DEFAULT} !important`
            }
        }
    )
})