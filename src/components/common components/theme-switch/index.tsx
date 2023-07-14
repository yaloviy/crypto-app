import { Grid, colors, IconButton, useTheme } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ColorModeContext, tokens } from '../../../theme';

import { useStyles } from './style';


const ThemeSwitch = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()
    const colorMode: any = useContext(ColorModeContext)
    return (
        <Grid>
                        <IconButton onClick={colorMode.toggleColorMode} className={classes.themeIcon} sx={{mr:'45px'}}>
                            {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
                        </IconButton>
         </Grid>
    );
};

export default ThemeSwitch;