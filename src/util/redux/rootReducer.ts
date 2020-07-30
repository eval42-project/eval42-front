import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from 'util/redux/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};
const reducers = combineReducers({ user });
const rootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
