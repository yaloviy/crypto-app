import { makeStyles } from "@mui/styles"
import {Theme} from '@mui/material'
import { tokens } from "../../../theme"


export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                justifyContent: 'center',
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                        borderColor: colors.blue
                    }
                },
                '& label.Mui-focused': {
                    color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`
                },
                '& .Mui-checked': {
                    color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT} !important`
                }
            },
            wrapper: {
                maxWidth: '50%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                marginTop:'50px',
                textAlign: 'center'
            },
            inputText: {
                width: '100%'
            },
            inputSubmit: {
                backgroundColor: `${colors.blue} !important`,
                color: `${colors.white.DEFAULT} !important`,
                maxWidth: '100%',
                width: '50%'
            }
        }
    )
})