

import { makeStyles } from "@mui/styles"
import { tokens } from "../../../theme"
import { Theme } from "@mui/material"



export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        topPrice: {
            backgroundColor: `${
                theme.palette.mode === 'light'
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            border: `1px solid ${colors.borderColor}`,
            padding: '20px 16px',
            borderRadius: 12,
            '& .MuiPaper-root': {
                backgroundColor: `${colors.primary[600]} !important`,
                boxShadow: 'none !important',
                backgroundImage: 'none !important'
            }
        }
    }
})