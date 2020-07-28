import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from 'util/redux/store';
import { Token } from 'util/redux/types';

const initialState: Token = { token: '' };

const tokenSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    submitToken(_state, action: PayloadAction<Token>) {
      return action.payload;
    },
  },
});

// removeToken -> token = ''
export const submitToken = (token: string): AppThunk => async (dispatch: AppDispatch) => {
  const newToken: Token = { token };
  dispatch(tokenSlice.actions.submitToken(newToken));
};

export default tokenSlice.reducer;
