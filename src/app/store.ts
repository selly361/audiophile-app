import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import cartReducer from 'features/cartSlice'
import modalReducer from 'features/modalSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
