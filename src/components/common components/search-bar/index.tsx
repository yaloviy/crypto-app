import { Grid, colors, IconButton, useTheme, InputBase, Stack, Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './style';
import { ColorModeContext, tokens } from '../../../theme';
import React, { useContext, useEffect, useState } from 'react'
import { useAppSelector } from '../../../utils/hook/hook';
import { elements } from 'chart.js';
import { useNavigate } from 'react-router-dom';

const SearchBarComponent = () => {
    const topPriceData:any = useAppSelector(state => state.asset.topPriceData)
    const [selectedItem, SetSelectedItem] = useState<string | null>('')
    const navigate = useNavigate()

    return (
        <Stack spacing={2} sx={{width: '300px'}}>
            <Autocomplete 
            onChange={(e:any, value:string | null) => navigate(`single/:${value}`)}
            renderInput={(el) => (<TextField {...el} label='Поиск...' inputProps={{ ...el.inputProps, type: 'search' }}/>)} 
            options={topPriceData.map((el: {name:string}) => el.name)}></Autocomplete>
        </Stack>
    );
};

export default SearchBarComponent;