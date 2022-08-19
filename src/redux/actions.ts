import { createAction } from '@reduxjs/toolkit';
import { GetGamesApiPayload } from './types';

export const getGamesApi = createAction<GetGamesApiPayload>('getGamesApi');
export const clearStore = createAction('clearStore');
