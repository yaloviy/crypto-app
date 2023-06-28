import { Grid, Box, Typography, Link } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/hook/hook';
import { getNews } from '../../store/thrunks/news';
import { useStyles } from './style';

const NewsPage = () => {
    const classes = useStyles()
    const newsAssets = useAppSelector(state => state.news.assets)
    const dispatch = useAppDispatch()
    useEffect(( ) => {
        dispatch(getNews())
    }, [])
    console.log(newsAssets)
    const renderNews = newsAssets.map((el:any) => (
        <Grid container spacing={2} className={classes.newsCard} key={el.id}>
            <Grid item className={classes.newsImg} xs={12} md={1} >
                <img  alt={el.category} src={`${el.imageurl}?w=100%&fit=crop&auto=format`}></img>
            </Grid>
            <Grid item sm={12} md={7} className={classes.newsText}>
                <Grid item xs={12}>
                    <Typography variant='h2'>{el.title}</Typography>
                </Grid>
                <Grid item className={classes.newsTextBody} xs={12}>
                    {el.body}
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.newsReadMore} variant='h4'>
                        <Link href={el.url} target='_blank'>Read more...</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    ))
    return (
        <Grid container className={classes.root}>
            {newsAssets && (renderNews)}
        </Grid>
    );
};

export default NewsPage;