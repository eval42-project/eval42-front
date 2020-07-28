import { combineReducers } from '@reduxjs/toolkit';
import token from 'util/redux/tokenSlice';

const rootReducer = combineReducers({ token });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
