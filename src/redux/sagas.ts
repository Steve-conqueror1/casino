import axios, { AxiosResponse } from 'axios';

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
    const { data }: AxiosResponse<GamesResponseType> = yield axios.get(
      `${process.env.REACT_APP_API_SERVER}?limit=${limit}`
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
     yield axios.put(
      `${process.env.REACT_APP_API_SERVER}/${id}`, {
            status: status
         }
    );

  } catch (err) {
    console.error(err);
  }
  yield put(slicesActions.setUpdated(false));
}

function* deleteGameApi(
  action: ReturnType<typeof actions.updateGameApi>
) {
   yield put(slicesActions.setUpdated(true));
  const {
    payload: { id },
  } = action;
  try {
     yield axios.delete(
      `${process.env.REACT_APP_API_SERVER}/${id}`
    );

  } catch (err) {
    console.error(err);
  }
  yield put(slicesActions.setUpdated(false));
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getGamesApi.type, getGamesApi);
  yield takeLatest(actions.updateGameApi.type, updateGameStatusApi);
  yield takeLatest(actions.deleteGameApi.type, deleteGameApi);
}

