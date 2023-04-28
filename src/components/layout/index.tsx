
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ILayout } from '../../common/types/layout/index'
import TopBarComponent from '../common/top-bar';
import { useMediaQuery } from '@mui/material'
import {Box} from '@mui/material'
import SideBar from '../common/side-bar';
import {useState} from 'react'
import { useStyles } from '../layout/styles';


const LayoutComponent = (): JSX.Element => {

    const location  = useLocation()
    const isNonMobile = useMediaQuery('(min-width:600px)')

    const [isOpen, setIsOpen] = useState(true)

    const classes = useStyles()

    return (
        location.pathname === '/login' || location.pathname === '/register' 
        ? 
        (
        <>
            <Outlet />
        </>
        ) 
        :
        (
            <Box display={isNonMobile === true ? 'flex' : 'block'} width='100%' height='100%'>
                <SideBar isNonMobile={isNonMobile} drawerWidth='250px' isOpen={isOpen} setIsOpen={setIsOpen} />
                <Box className={classes.mainSection}>
                    <TopBarComponent  isOpen={isOpen} setIsOpen={setIsOpen}/> 
                    <Outlet />
                </Box>
            </Box>
        )
    );
};

export default LayoutComponent;