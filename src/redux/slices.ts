import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';
import { GameType, GamesResponseType, CreateGame } from '../types';
import { clearStore } from './actions';

const games = createSlice({
  name: 'games',
  initialState: { data: [] as Array<GameType>, count: 0 },
  reducers: {
    setGames: (_, { payload }: PayloadAction<GamesResponseType>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => ({ data: [] as Array<GameType>, count: 0 }),
  },
});

const newGame = createSlice({
  name: 'newGame',
  initialState: {
    title: '',
    thumbnail: '',
    profileUrl: '',
    shortDescription: '',
  },
  reducers: {
    setNewGame: (initialState, { payload }: PayloadAction<CreateGame>) => ({
      ...initialState,
      ...payload,
    }),
  },
  extraReducers: {
    [clearStore.type]: () => ({
      title: '',
      thumbnail: '',
      profileUrl: '',
      shortDescription: '',
    }),
  },
});

const limit = createSlice({
  name: 'limit',
  initialState: 9,
  reducers: {
    setLimit: (_, { payload }: PayloadAction<number>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => 0,
  },
});

const isLoading = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (_, { payload }: PayloadAction<boolean>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
});

const updated = createSlice({
  name: 'updated',
  initialState: false,
  reducers: {
    setUpdated: (_, { payload }: PayloadAction<boolean>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
});

const isCreated = createSlice({
  name: 'isCreated',
  initialState: false,
  reducers: {
    setIsCreated: (_, { payload }: PayloadAction<boolean>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
});

export const { setGames } = games.actions;
export const { setIsLoading } = isLoading.actions;
export const { setLimit } = limit.actions;
export const { setUpdated } = updated.actions;
export const { setIsCreated } = isCreated.actions;
export const { setNewGame } = newGame.actions;

export default combineReducers({
  games: games.reducer,
  isLoading: isLoading.reducer,
  limit: limit.reducer,
  updated: updated.reducer,
  isCreated: isCreated.reducer,
  newGame: newGame.reducer,
});
