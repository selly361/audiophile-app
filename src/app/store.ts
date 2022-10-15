import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import dataReducer from 'features/dataSlice'
import slideReducer from 'features/slideSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    slide: slideReducer
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
