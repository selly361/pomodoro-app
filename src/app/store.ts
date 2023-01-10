import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import pomodoroReducer from 'features/pomodoroSlice';

export const store = configureStore({
  reducer: pomodoroReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
