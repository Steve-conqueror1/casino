import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux';

export const useTypedSelection: TypedUseSelectorHook<RootState> = useSelector;
