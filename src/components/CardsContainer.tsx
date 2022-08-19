import React from 'react';
import { Paper, Grid, Button } from '@mui/material';
import { GameCard } from './GameCard';
import { useTypedSelection, useActions } from './../hooks';
import { IntersectionContainter } from './IntersectionContainter';
import { Loader } from './Loader';

export const CardsContainer = () => {
  const actions = useActions();
  const state = useTypedSelection((state) => state);
  const { isLoading, limit, games } = state;

  React.useEffect(() => {
    actions.getGamesApi({ limit });
  }, [limit]);

  const loadMore = () => {
    if (limit + 9 < games.count) {
      actions.setLimit(limit + 9);
    } else {
      actions.setLimit(games.count);
    }
  };

  return (
    <Paper elevation={1}>
      {state.isLoading && <Loader />}
      <Grid container spacing={3} alignItems="stretch">
        {games.data.filter((game) => game.status === 'open').map((game, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <GameCard
              thumbnail={game.thumbnail}
              title={game.title}
              shortDescription={game.shortDescription}
              profileUrl={game.profileUrl}
            />
          </Grid>
        ))}
      </Grid>
      {limit < games.count && (
        <IntersectionContainter isLoading={isLoading} loadMore={loadMore}>
          <Loader />
        </IntersectionContainter>
      )}
    </Paper>
  );
};
