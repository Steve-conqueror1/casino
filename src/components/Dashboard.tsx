import React from 'react';
import { Box } from '@mui/material';
import { useTypedSelection, useActions } from './../hooks';
import { GameTable } from './GameTable';

export const Dashboard = () => {
  const actions = useActions();
  const state = useTypedSelection((state) => state);
  const { games, updated } = state;

  React.useEffect(() => {
    actions.getGamesApi({ limit: games.count });
  }, [updated]);

  return (
    <Box sx={{ height: '450px', width: '100%' }}>
      <GameTable rows={games.data} />
    </Box>
  );
};
