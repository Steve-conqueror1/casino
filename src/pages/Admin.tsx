import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Box, Typography, Divider, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Dashboard } from '../components';

export const Admin = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ padding: '10px 0' }}>
      <Typography
        variant="h4"
        component="h5"
        sx={{ marginBottom: '12px', marginTop: '64px' }}
      >
        Welcome to the to Employees dashboard
      </Typography>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={() => navigate('/admin/games/add')} endIcon={<AddIcon/>} variant='contained'>Add Game</Button>
        </Box>
      <Divider sx={{ marginBottom: '40px' }} />
      <Dashboard />
    </Box>
  );
};
