import React from 'react';
import { Box, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { CardsContainer } from './../components';

export const Home = () => {
  return (
    <Box sx={{ padding: '10px 0' }}>
      <Typography
        variant="h4"
        component="h5"
        sx={{ marginBottom: '40px', marginTop: '64px' }}
      >
        Welcome to the most popular casino in town
      </Typography>
      <CardsContainer />
    </Box>
  );
};
