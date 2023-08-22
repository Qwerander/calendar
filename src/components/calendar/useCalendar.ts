import { useState, useEffect } from 'react';

export interface IDay {
  year: number;
  month: number;
  day: number;
  dayOfWeek?: number;
  dayName?: string;
  monthName?: string;
}

const initialState: IDay = {
  day: 0,
  dayName: '',
  dayOfWeek: 0,
  month: 0,
  monthName: '',
  year: 0,
};

export const useCalendar = (date: string) => {
  const [selectedDate, setSelectedDate] = useState(new Date(date));
  const [currentDate, setCurrentDate] = useState<IDay>(initialState);

  useEffect(() => {
    setSelectedDate(new Date(date));
  }, [date]);

  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);

  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysBeforeMonth = firstDayOfWeek !== 0 ? firstDayOfWeek - 1 : 6;
  const daysAfterMonth = 42 - daysBeforeMonth - daysInMonth;

  const previousMonthDays = [];
  const currentMonthDays = [];
  const nextMonthDays = [];

  const daysInPrevMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0).getDate();

  for (let i = daysInPrevMonth - daysBeforeMonth + 1; i <= daysInPrevMonth; i++) {
    previousMonthDays.push({
      day: i,
      month: selectedDate.getMonth() - 1,
      year: selectedDate.getFullYear(),
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    currentMonthDays.push({
      day: i,
      month: selectedDate.getMonth(),
      year: selectedDate.getFullYear(),
      dayOfWeek: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i).getDay(),
    });
  }

  for (let i = 1; i <= daysAfterMonth; i++) {
    nextMonthDays.push({
      day: i,
      month: selectedDate.getMonth() + 1,
      year: selectedDate.getFullYear(),
    });
  }

  useEffect(() => {
    const currDate = {
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth() + 1,
      day: selectedDate.getDate(),
      dayOfWeek: selectedDate.getDay(),
      dayName: selectedDate.toLocaleString('ru-RU', { weekday: 'short' }),
      monthName: selectedDate.toLocaleDateString('ru-RU', { month: 'long' }),
    };
    setCurrentDate(currDate);
  }, [selectedDate]);

  return { previousMonthDays, currentMonthDays, nextMonthDays, currentDate };
};
