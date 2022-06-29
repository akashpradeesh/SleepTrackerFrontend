import {React} from 'react';
// import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableData({datas}) {
 


  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 2000}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Slept</TableCell>
            <TableCell align="right">Wake</TableCell>
            <TableCell align="right">Duration</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <TableRow
              key= {data.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
              {data.date}
              </TableCell>
              <TableCell align="right">{data.slept}</TableCell>
              <TableCell align="right">{data.wake}</TableCell>
              <TableCell align="right">{data.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
