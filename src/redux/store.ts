import saga from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { all, fork } from 'redux-saga/effects';
import { watchCommonSaga } from './sagas';
import RootReducer from './slices';

function* RootSaga() {
  yield all([fork(watchCommonSaga)]);
}

const sagaMiddleware = saga();

export const store = configureStore({
  reducer: RootReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(RootSaga);
export type RootState = ReturnType<typeof store.getState>;
