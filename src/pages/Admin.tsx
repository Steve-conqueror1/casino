import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Dashboard } from '../components';

export const Admin = () => {
  return (
    <Box sx={{ padding: '10px 0' }}>
      <Typography
        variant="h4"
        component="h5"
        sx={{ marginBottom: '12px', marginTop: '64px' }}
      >
        Welcome to the to Employees dashboard
      </Typography>
      <Divider sx={{ marginBottom: '40px' }} />
      <Dashboard />
    </Box>
  );
};
