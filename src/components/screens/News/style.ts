import { makeStyles } from "@mui/styles"
import { tokens } from "../../../theme"
import { Theme } from "@mui/material"
import { Height } from "@mui/icons-material"



export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    
    return {
        root: {
            justifyContent: 'center',
            gap: '30px',
            padding: '50px 30px',
            '& a': {
                textDecoradion: 'none !important',
                color: `${theme.palette.mode === 'light' ? colors.black.DEFAULT : colors.white.DEFAULT}`
            }
        },
        newsCard: {
            '&:hover': {
                boxShadow: "0px 0px 50px 0px rgba(255, 255, 255, 0.2)",
                transition: '1s'
            },
            transition: '1s',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 5,
            padding: 5,
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : '#232323'}`,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        newsImg: {
            display: 'flex',
            justifyContent: 'center',
            verticalAlign: 'center',
            paddingTop: '0px !important'
        },
        newsText: {
            // display: 'flex',
            textAlign: 'center',
            padding: '0px !important',
            marginTop: '10px !important',
            textDecoration: 'none !important'
        },
        newsTextBody: {
            marginTop: '10px !important',
            fontSize: '12px',
            marginBottom: '10px !important',
        },
        newsReadMore: {
            color: 'white !important',
            textDecoration: 'none !important'
        }
    }
})