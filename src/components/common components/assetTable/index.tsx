import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './style';

const AssetsTableComponent = (props: any) => {
    const {assets} = props
    const classes = useStyles()
    return (
        <Grid item xs={12} className={classes.topPrice}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Change %</TableCell>
            <TableCell align="right">Change $</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.current_price}</TableCell>
              <TableCell align="right">{row.price_change_24h.toFixed(2)}</TableCell>
              <TableCell align="right">{row.price_change_percentage_24h.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    );
};

export default AssetsTableComponent;