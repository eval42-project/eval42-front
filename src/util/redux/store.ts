import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer, { RootState } from 'util/redux/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
