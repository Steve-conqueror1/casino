import { AxiosResponse } from 'axios';
import { api } from '../api';

import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as slicesActions from './slices';
import { GamesResponseType } from '../types';

function* getGamesApi(action: ReturnType<typeof actions.getGamesApi>) {
  yield put(slicesActions.setIsLoading(true));

  const {
    payload: { limit },
  } = action;

  try {
    const { data }: AxiosResponse<GamesResponseType> = yield api.get(
      `?limit=${limit}`
    );
    yield put(slicesActions.setGames(data));
  } catch (err) {
    console.error(err);
  }
  yield put(slicesActions.setIsLoading(false));
}

function* updateGameStatusApi(
  action: ReturnType<typeof actions.updateGameApi>
) {
  yield put(slicesActions.setUpdated(true));
  const {
    payload: { id, status },
  } = action;
  try {
    yield api.put(`/${id}`, {
      status: status,
    });
  } catch (err) {
    console.error(err);
  }
  yield put(slicesActions.setUpdated(false));
}

function* deleteGameApi(action: ReturnType<typeof actions.updateGameApi>) {
  yield put(slicesActions.setUpdated(true));
  const {
    payload: { id },
  } = action;
  try {
    yield api.delete(`/${id}`);
  } catch (err) {
    console.error(err);
  }
  yield put(slicesActions.setUpdated(false));
}

function* createGameApi(action: ReturnType<typeof actions.createGameApi>) {
  yield put(slicesActions.setIsCreated(true));
  const {
    payload: { title, thumbnail, profileUrl, shortDescription },
  } = action;
  try {
    yield api.post('/', {
      title,
      thumbnail,
      profileUrl,
      shortDescription,
    });
  } catch (err) {
    console.error(err);
  }
  yield put(slicesActions.setUpdated(false));
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getGamesApi.type, getGamesApi);
  yield takeLatest(actions.updateGameApi.type, updateGameStatusApi);
  yield takeLatest(actions.deleteGameApi.type, deleteGameApi);
  yield takeLatest(actions.createGameApi.type, createGameApi);
}
