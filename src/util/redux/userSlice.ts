import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from 'util/redux/store';
import { Users } from 'util/redux/types';
import { getUser } from 'util/ft_api';

const initialState: Users = {
  token: '',
  id: 0,
  login: '',
  displayname: '',
  imageUrl: '',
  isCadet: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserToken(_state, action: PayloadAction<Users>) {
      return action.payload;
    },
    removeUserToken() {
      return {
        token: '',
        id: 0,
        login: '',
        displayname: '',
        imageUrl: '',
        isCadet: false,
        isLoading: false,
      };
    },
    loadingUser(state) {
      state.isLoading = true;
    }
  },
});

export const setUserToken = (token: string): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.loadingUser());
  const newUser = getUser(token);
  dispatch(userSlice.actions.setUserToken(await newUser));
};

export const { removeUserToken } = userSlice.actions;

export default userSlice.reducer;
