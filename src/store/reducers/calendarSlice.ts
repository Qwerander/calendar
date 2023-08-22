import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export interface CalendarState {
  calendar: null;
  records: Record<string, { id: string; name: string; phone: string; time: number }>;
  time: number | null;
  choosenDate: string;
}

const initialState: CalendarState = {
  calendar: null,
  choosenDate: new Date().toISOString(),
  time: null,
  records: {},
};

export const incrementAsync = createAsyncThunk('calendar/calendar', async (amount: number) => {
  return;
});

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setChoosenDate: (state, action: PayloadAction<{ date: string }>) => {
      state.choosenDate = action.payload.date;
    },
    addRecord: (state, action: PayloadAction<{ id: string; name: string; phone: string }>) => {
      const { id, name, phone } = action.payload;
      state.records[id] = { id, name, phone, time: state.time! };
      state.time = null;
    },
    setTimeRecord: (state, action: PayloadAction<{ time: number }>) => {
      state.time = action.payload.time;
    },
  },
});

export const { setChoosenDate, addRecord, setTimeRecord } = calendarSlice.actions;

export const selectCalendar = (state: RootState) => state.calendar.calendar;
export const selectChoosenDate = (state: RootState) => state.calendar.choosenDate;
export const selectRecords = (state: RootState) => state.calendar.records;
export const selectTime = (state: RootState) => state.calendar.time;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    // const currentValue = selectCalendar(getState());
    // if (currentValue % 2 === 1) {
    //   // dispatch(incrementByAmount(amount));
    // }
  };

export default calendarSlice.reducer;
