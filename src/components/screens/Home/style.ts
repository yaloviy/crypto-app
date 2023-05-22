import { makeStyles } from "@mui/styles"
import { tokens } from "../../../theme"
import { Theme } from "@mui/material"



export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            flexGrow: 1,
            padding: 32
        },
        areaChart: {
            marginBottom: '32px'
        },
        container: {
            padding: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%'
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

        },
        cardInfoPercentage: {
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            marginTop: '10px'
        },
        cardPercentageUp: {
            display: 'flex',
            alignItems: 'center',
            padding: '4px 8px',
            justifyContent: 'center',
            backgroundColor: colors.price_percentage.up,
            borderRadius: '4px',
            gap: '5px',
            color: '#037400',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '18px',

        },
        cardPercentageDown: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.price_percentage.down,
            borderRadius: '4px',
            color: '#740000',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '18px',

        },
        lineChart: {
            backgroundColor: `${
                theme.palette.mode === 'light'
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: '20px 16px',
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        },
        

    }
})