import axios, { AxiosResponse } from 'axios';

import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as slicesActions from './slices';
import { GamesResponseType } from './types';

function* getGamesApi(action: ReturnType<typeof actions.getGamesApi>) {
  yield put(slicesActions.setIsLoading(true));

  const {
    payload: { limit },
  } = action;

  try {
    const { data }: AxiosResponse<GamesResponseType> = yield axios.get(
      `${process.env.REACT_APP_API_SERVER}?limit=${limit}`
    );
    yield put(slicesActions.setGames(data));
  } catch (err) {
    console.error(err);
  }

  yield put(slicesActions.setIsLoading(false));
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getGamesApi.type, getGamesApi);
}
