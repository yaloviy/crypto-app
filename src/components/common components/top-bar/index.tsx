
import React, { useContext, useEffect } from 'react';
import { display } from '@mui/system';
import { Box, Grid, useTheme, IconButton, InputBase, AppBar, Toolbar } from '@mui/material';
import { useAppSelector } from '../../../utils/hook/hook';
import { ColorModeContext } from '../../../theme';
import { tokens } from '../../../theme';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import { useStyles } from './style';
import { ITopBarProps } from '../../../common/types/topbar';
import ThemeSwitch from '../theme-switch';
import SearchBarComponent from '../search-bar';


const TopBarComponent: React.FC<ITopBarProps> = ({isOpen, setIsOpen, isNonMobile}:ITopBarProps):JSX.Element => {
    const user = useAppSelector(state => state.auth.user.firstName)
    const theme =  useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar} >
            <Grid className={classes.greetings}>
                <IconButton className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon /> 
                </IconButton>
                Добро пожаловать, {sessionStorage.getItem('firstName')}
            </Grid>
                {isNonMobile && (<Box display='flex' alignItems='center'>
                    <ThemeSwitch />
                    <SearchBarComponent />
                </Box>)}
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;