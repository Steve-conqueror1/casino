export type GetGamesApiPayload = {
  limit: number;
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
