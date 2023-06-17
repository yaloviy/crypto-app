import { makeStyles } from "@mui/styles"
import {Theme} from '@mui/material'
import { tokens } from "../../../theme"


export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                padding:'32px 22px',
                background: `${colors.primary.DEFAULT} !important`,
                borderBottom: `1px solid ${colors.borderColor}`,
                position: 'static',
                boxShadow: 'none !important',

            },
            toolbar: {
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
            },
            greetings: {
                display: 'flex',
                alignItems: 'center',
            },
            menuIcon: {
                marginRight: '20px',
                cursor: 'pointer',
            },
            searchIcon: {
                padding: '12px 12px',
                '&:hover': {
                    'backgroundColor': 'transparent !important',
        
                },
                
            },
            themeIcon: {
                backgroundColor: 'transparent'
            },
            searchBlock: {
                display: 'flex', 
                borderRadius: '8px', 
                // marginLeft: '30px',
                
                backgroundColor: `${colors.primary[600]}`,
                border: `1px solid ${colors.black.DEFAULT}`

            },
            sundryBlock: {
        
            },
            searchInput: {
                padding: '12px'
            }
            
        }
    )
})