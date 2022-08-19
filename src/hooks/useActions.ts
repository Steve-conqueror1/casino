import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { getGamesApi, clearStore, updateGameApi, deleteGameApi } from '../redux';
import { setLimit, setUpdated } from '../redux/slices';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ getGamesApi, clearStore, setLimit, updateGameApi, deleteGameApi, setUpdated }, dispatch);
};
