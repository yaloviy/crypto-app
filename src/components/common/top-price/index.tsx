import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';
import { ISingleAsset } from '../../../common/types/assets';

const TopPriceComponent = (props: any) => {
    const {topPriceData } = props
      
    return (
        <>
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
          {topPriceData.map((row:any) => (
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
        </>
    );
};

export default TopPriceComponent;