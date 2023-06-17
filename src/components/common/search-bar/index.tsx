import { Grid, colors, IconButton, useTheme, InputBase, Stack, Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './style';
import { ColorModeContext, tokens } from '../../../theme';
import React, { useContext, useEffect } from 'react'
import { useAppSelector } from '../../../utils/hook/hook';
import { elements } from 'chart.js';

const SearchBarComponent = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()
    const colorMode: any = useContext(ColorModeContext)
    const topPriceData:any = useAppSelector(state => state.asset.topPriceData)
    return (
        // <Grid className={classes.searchBlock}>
        //                 <IconButton className={classes.searchIcon} sx={{padding: '12px'}}> 
        //                     <SearchIcon /> 
        //                 </IconButton>
        //                 <InputBase className={classes.searchInput} placeholder='Поиск...' />
        // </Grid>
        <Stack spacing={2} sx={{width: '300px'}}>
            <Autocomplete 
            freeSolo
            renderInput={(el) => (<TextField {...el} label='Поиск...' inputProps={{ ...el.inputProps, type: 'search' }}/>)} 
            options={topPriceData.map((el: {name:string}) => el.name)}></Autocomplete>
        </Stack>
    );
};

export default SearchBarComponent;