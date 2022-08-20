export type GetGamesApiPayload = {
  limit: number;
};

export type UpdateGameApiPayload = {
  id: string;
  status: string;
};

export type DeleteGameApiPayload = {
  id: string;
};

export type CreateGame = {
  title: string;
  thumbnail: string;
  profileUrl: string;
  shortDescription: string;
};

export type GameType = {
  title: string;
  thumbnail: string;
  profileUrl: string;
  shortDescription: string;
  status: string;
  _id: string;
};

export type GamesResponseType = {
  data: GameType[];
  count: number;
};
