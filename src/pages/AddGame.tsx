import React, { FormEvent } from 'react';
import {
  Box,
  Typography,
  Divider,
  FormControl,
  TextField,
  Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import { useActions, useTypedSelection } from '../hooks';
import { CreateGame } from '../types';

export const AddGame = () => {
  const actions = useActions();
  const state = useTypedSelection((state) => state);
  const navigate = useNavigate();

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    actions.setNewGame({
      [event.currentTarget.name]: event.currentTarget.value,
    } as CreateGame);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actions.createGameApi(state.newGame);
    navigate('/admin');
  };

  return (
    <Box sx={{ padding: '10px 0' }}>
      <Typography
        variant="h4"
        component="h5"
        sx={{ marginBottom: '12px', marginTop: '64px' }}
      >
        Create a new game
      </Typography>
      <Divider sx={{ marginBottom: '40px' }} />
      <Box sx={{ padding: '10px 50px' }}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Game Title"
              id="title"
              name="title"
              sx={{ marginBottom: '20px' }}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Game Thumbnail"
              id="thumbnail"
              name="thumbnail"
              sx={{ marginBottom: '20px' }}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Game Url"
              id="profileUrl"
              name="profileUrl"
              sx={{ marginBottom: '20px' }}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Short Description"
              id="shortDescription"
              name="shortDescription"
              sx={{ marginBottom: '20px' }}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
            >
              Create Game
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};
