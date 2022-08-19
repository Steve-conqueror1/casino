import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';
import { GameType } from '../types';
import { Button, Box, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useActions, useTypedSelection } from '../hooks';
import { Loader } from './Loader';

type Props = {
  rows: GameType[];
};

export const GameTable = (props: Props) => {
  const { rows } = props;
  const actions = useActions();
  const { isLoading } = useTypedSelection((state) => state);

  const handleCheckBox = (id: string, status: string) => {
    actions.updateGameApi({ id, status });
  };

  const handleRemove = (id: string) => {
    actions.deleteGameApi({ id });
  };

  if (isLoading) return <Loader />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>TITLE</TableCell>
            <TableCell align="center">SHORT DESCRIPTION</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.shortDescription}</TableCell>
              <TableCell align="center">
                <Box sx={{ display: 'flex' }}>
                  <CircleIcon
                    sx={{
                      color: row.status === 'open' ? '#4caf50' : '#ff3d00',
                      marginRight: '5px',
                    }}
                  />
                  {row.status}
                </Box>
              </TableCell>
              <TableCell align="center">
                <Checkbox
                  checked={row.status === 'open'}
                  onClick={() =>
                    handleCheckBox(
                      row._id,
                      row.status === 'open' ? 'restricted' : 'open'
                    )
                  }
                />
                <Button size="small" onClick={() => handleRemove(row._id)}>
                  <DeleteIcon fontSize="small" color="warning" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
