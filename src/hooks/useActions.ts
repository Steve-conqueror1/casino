import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import {
  getGamesApi,
  clearStore,
  updateGameApi,
  deleteGameApi,
  createGameApi,
} from '../redux';
import {
  setLimit,
  setUpdated,
  setIsCreated,
  setNewGame,
} from '../redux/slices';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      getGamesApi,
      clearStore,
      setLimit,
      updateGameApi,
      deleteGameApi,
      setUpdated,
      setNewGame,
      createGameApi,
    },
    dispatch
  );
};
