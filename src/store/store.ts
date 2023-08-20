import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import calendar from './reducers/calendarSlice';

export const store = configureStore({
  reducer: {
    calendar,
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
