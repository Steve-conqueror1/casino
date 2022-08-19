import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import GamesIcon from '@mui/icons-material/Games';

type Props = {
  title: string;
  thumbnail: string;
  profileUrl: string;
  shortDescription: string;
};

export const GameCard: React.FC<Props> = (props: Props) => {
  const { title, thumbnail, profileUrl, shortDescription } = props;

  return (
    <Card sx={{ maxWidth: 354 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={thumbnail} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          startIcon={<GamesIcon />}
          onClick={() => window.open(profileUrl)}
        >
          Play now
        </Button>
      </CardActions>
    </Card>
  );
};
