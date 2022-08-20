import { createAction } from '@reduxjs/toolkit';
import { GetGamesApiPayload,UpdateGameApiPayload, DeleteGameApiPayload, CreateGame } from '../types';

export const getGamesApi = createAction<GetGamesApiPayload>('getGamesApi');

export const updateGameApi =
  createAction<UpdateGameApiPayload>('updateGamesApi');

export const createGameApi =
  createAction<CreateGame>('createGameApi');

export const deleteGameApi =
  createAction<DeleteGameApiPayload>('deleteGamesApi');

export const clearStore = createAction('clearStore');
