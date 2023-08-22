import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const now = new Date();
const timezoneOffset = now.getTimezoneOffset();
now.setUTCHours(0, 0, 0, 0);
const modifiedDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
const choosenDate = new Date(modifiedDate.getTime() - timezoneOffset * 60 * 1000).toISOString();

export interface CalendarState {
  calendar: Record<string, Record<string, { id: string; name: string; phone: string; time: number }>>;
  time: number | null;
  choosenDate: string;
}

const initialState: CalendarState = {
  calendar: {},
  choosenDate: choosenDate,
  time: null,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setChoosenDate: (state, action: PayloadAction<{ date: string }>) => {
      state.choosenDate = action.payload.date;
    },
    addRecord: (state, action: PayloadAction<{ id: string; name: string; phone: string }>) => {
      const { id, name, phone } = action.payload;
      const currentDate = state.choosenDate;
      state.calendar = state.calendar || {};
      state.calendar[currentDate] = state.calendar[currentDate] || {};
      state.calendar[currentDate][id] = { id, name, phone, time: state.time! };
      state.time = null;
    },
    setTimeRecord: (state, action: PayloadAction<{ time: number }>) => {
      state.time = action.payload.time;
    },
    removeRecord: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const currentDate = state.choosenDate;
      if (state.calendar[currentDate]?.[id]) {
        delete state.calendar[currentDate][id];
      }
    },
  },
});

export const { setChoosenDate, addRecord, setTimeRecord, removeRecord } = calendarSlice.actions;

export const selectCalendar = (state: RootState) => state.calendar.calendar;
export const selectChoosenDate = (state: RootState) => state.calendar.choosenDate;
export const selectRecords = createSelector(
  (state: RootState) => state.calendar.calendar,
  selectChoosenDate,
  (calendar, choosenDate) => calendar?.[choosenDate] || {}
);
export const selectTime = (state: RootState) => state.calendar.time;

export default calendarSlice.reducer;
