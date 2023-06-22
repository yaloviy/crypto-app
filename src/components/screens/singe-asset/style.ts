import { makeStyles } from "@mui/styles"
import { tokens } from "../../../theme"
import { Theme } from "@mui/material"



export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    
    return {
        root: {
            alignItems: 'center',
        },
        contents: {
            paddingTop: '100px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: 22, 
            fontWeight: 600,
            margin: '50px 0 !important'
        },
        contentsName: {
            fontWeight: 600,
            fontSize: '23px'
        },
        card: {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
        },
        cardItem: {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '100%',
            maxWidth: '500px',
            minHeight: '200px',
            height: '100%',
            border: `1px solid ${colors.borderColor}`,
            backgroundColor: `${colors.primary[600]}`,
            borderRadius: 12,
        },
        cardItemHeader: {
            fontSize: 22, 
            fontWeight: 600, 
            marginRight: 2
        },
        buttons: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px'
        },
        button: {
            background: `${colors.primary[600]} !important`,
            '& .MuiSvgIcon-root': {
                color: 'white !important'
            },
            cursor: 'pointer'
        }

    }
})