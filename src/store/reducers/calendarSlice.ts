import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export interface CounterState {
  calendar: any;
}

const initialState: CounterState = {
  calendar: null,
};

export const incrementAsync = createAsyncThunk(
  'calendar/calendar',
  async (amount: number) => {
    return;
  }
);

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
});

// export const {} = calendarSlice.actions;

export const selectCalendar = (state: RootState) => state.calendar.calendar;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCalendar(getState());
    if (currentValue % 2 === 1) {
      // dispatch(incrementByAmount(amount));
    }
  };

export default calendarSlice.reducer;
