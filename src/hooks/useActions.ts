import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { getGamesApi, clearStore } from '../redux';
import { setLimit } from '../redux/slices';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ getGamesApi, clearStore, setLimit }, dispatch);
};
