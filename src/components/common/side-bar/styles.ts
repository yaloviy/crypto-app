import {makeStyles} from '@mui/styles'
import { Theme } from '@mui/material'
import { tokens } from '../../../theme'



export const useStyles = makeStyles((theme:Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                backgroundColor: `${colors.primary.DEFAULT} !important`,
                width: '250px', 
                
            },
            drawer: {
                '&. MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    height: '100%',
                    backgroundColor: `${colors.primary.DEFAULT} !important`,
                },
                height: '100%',
                backgroundColor: `${colors.primary.DEFAULT} !important`,
            },
            brand: {
                display: 'flex' ,
                alignItems:'center' ,
                gap:'10px' ,
                padding:'30px 15px',
            },
            navitem: {
                '&:hover': {
                    backgroundColor: '#1900D5 !important',
                    borderRadius: '4px', 
                    color: `${colors.white.DEFAULT}`,
                    '& .MuiSvgIcon-root': {
                        color: 'white !important'
                    }
                }
            },
            topBox: {
                paddingBottom: '31px',
                borderBottom: `1px solid ${colors.borderColor}`
            },
            navList: {
                
            },
            bottomBox: {
                marginTop: '10px'
            }
        }
    )
})