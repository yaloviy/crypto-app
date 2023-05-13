import { makeStyles } from "@mui/styles"
import { tokens } from "../../../theme"
import { Theme } from "@mui/material"



export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            flexGrow: 1,
        },
        container: {
            padding: '32px',
            
        },
        card: {
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : '#232323'}`,
            padding: '20px 16px',
            minHeight: '185px',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12

        },
        cardLeftSide: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '50%'
        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: '30px',
            textTransform: 'capitalize'
        },
        
        cardDetails: {
           display: 'flex',
           justifyContent: 'flex-end',
           flexDirection: 'column'

        }
    }
})