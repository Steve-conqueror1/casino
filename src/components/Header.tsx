import React  from 'react';
import { Box, AppBar, IconButton, Typography, Toolbar, Button } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CasinoIcon onClick={() => navigate('/')} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Popular casino
          </Typography>
          <Button onClick={() => navigate('/admin')} variant='contained'>
            Casino Employees
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
