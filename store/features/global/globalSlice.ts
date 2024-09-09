import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RootState } from '../../store';

export interface GlobalState {
  isUserLoggedIn: boolean;
}

const initialState: GlobalState = {
  isUserLoggedIn: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUserLoggedIn: (
      state: GlobalState,
      action: PayloadAction<GlobalState>
    ) => {
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },
   
  }
});

export const { setUserLoggedIn } =
  globalSlice.actions;

export const SelectGlobal = (state: RootState): GlobalState => state.global;

export default globalSlice;
