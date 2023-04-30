
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


const TopBarComponent = ({isOpen, setIsOpen}:any) => {
    const user = useAppSelector(state => state.auth)
    const theme =  useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar} >
            <Grid className={classes.greetings}>
                <IconButton className={classes.menuIcon} onClick={() => setIsOpen((prev:boolean) => !prev)}>
                    <MenuIcon /> 
                </IconButton>
                Welcome, {user.isLogin && (user.userinfo.firstName)}
            </Grid>
                <Box display='flex' alignItems='center'>
                    <Grid sx={{pr: '37px', borderRight: `1px solid ${colors.mineShaft.DEFAULT}`}}>

                        <IconButton onClick={colorMode.toggleColorMode} className={classes.themeIcon} sx={{mr:'45px'}}>
                            {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
                        </IconButton>

                        <IconButton> 
                            <NotificationsNoneOutlinedIcon  /> 
                        </IconButton>

                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon} sx={{padding: '12px'}}> 
                            <SearchIcon /> 
                        </IconButton>
                        <InputBase className={classes.searchInput} placeholder='Поиск...' />
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
        /* <div>
            <Box className={classes.root}> 
                <Grid>Welcome, {user.isLogin && (user.userinfo.firstName)}</Grid>
                <Box display='flex' alignItems='center'>
                    <Grid sx={{pr: '37px', borderRight: `1px solid ${colors.mineShaft.DEFAULT}`}}>

                        <IconButton onClick={colorMode.toggleColorMode} className={classes.themeIcon} sx={{mr:'45px'}}>
                            {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
                        </IconButton>

                        <IconButton> 
                            <NotificationsNoneOutlinedIcon  /> 
                        </IconButton>

                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon} sx={{padding: '12px'}}> 
                            <SearchIcon /> 
                        </IconButton>
                        <InputBase className={classes.searchInput} placeholder='Поиск...' />
                    </Grid>

                </Box>
            </Box>
        </div> */
    );
};

export default TopBarComponent;