import { makeStyles } from "@mui/styles"
import {Theme} from '@mui/material'
import { tokens } from "../../../theme"


export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                display: 'flex',
                justifyContent: 'space-between',
                padding:'32px 22px',
                alignItems: 'center',
                backgroundColor: `${colors.primary.DEFAULT}`,
                borderBottom: `1px solid ${colors.borderColor}`
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
                marginLeft: '30px',
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