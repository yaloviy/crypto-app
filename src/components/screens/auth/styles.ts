import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(() => {
    return (
        {
            root: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '20px'
            },
            incitingText: {
                color: 'blue',
                textDecoration: 'none',
                cursor: 'pointer',
            },
            spanValidation: {
                color: 'red',
                fontSize: '14px'
            }
        }
    )
})