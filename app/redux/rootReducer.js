import {combineReducers} from 'redux';

import {globalSlice} from './global/Slice';

export const rootReducer = combineReducers({
  global: globalSlice.reducer,
});
