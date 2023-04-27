import React from "react";

import { Box, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, IconButton } 
from '@mui/material'
import {Home, ChevronLeft, ChevronRight, Timeline, Settings, MeetingRoom, ImportContacts, Favorite} 
from '@mui/icons-material';


export const navMenu = [
    {
        name: 'Главная',
        icon: <Home />,
        path: '/',
        id: 1
    },
    {
        name: 'Избранное',
        icon: <Favorite />,
        path: '/watchlist',
        id: 2
    },
    {
        name: 'Новости',
        icon: <ImportContacts />,
        path: '/news',
        id: 3
    },
    {
        name: 'Настройки',
        icon: <Settings />,
        path: '/settings',
        id: 4
    },
]