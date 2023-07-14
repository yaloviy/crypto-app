import {makeStyles} from '@mui/styles'
import { Theme } from '@mui/material'
import { tokens } from '../../../theme'
import { Height } from '@mui/icons-material'



export const useStyles = makeStyles((theme:Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                backgroundColor: `${colors.primary.DEFAULT} !important`,
                
                
            },
            drawer: {
                
                '&. MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    height: '100%',
                    background: `${colors.primary.DEFAULT} !important`,
                },
                '&. MuiDrawer-root': {
                    background: `${colors.primary.DEFAULT} !important`
                },
                '& .MuiDrawer-docked': {
                    background: `${colors.primary.DEFAULT} !important`
                },
                '& .MuiDrawer-modal': {
                    background: `${colors.primary.DEFAULT} !important`
                },
                height: '100%',
                background: `${colors.primary.DEFAULT} !important`,
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
            active: {
                backgroundColor: '#1900D5 !important',
                borderRadius: '4px', 
                color: `white !important`,
                '& .MuiSvgIcon-root': {
                    color: 'white !important'
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
            },
            prompt: {
                position: 'absolute',
                maxWidth: '50%',
                width: '100%',
                maxHeight: '50%',
                height: '100%',
                border: '1px solid black'
            }
        }
    )
})