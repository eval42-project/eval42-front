import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
