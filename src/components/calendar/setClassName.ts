import { IDay } from './useCalendar';
import styles from './calendar.module.css';

export function setClassName(day: IDay, chosenDate: Date) {
  const classNameArray = [];
  if (
    chosenDate.getFullYear() === day.year &&
    chosenDate.getMonth() === day.month &&
    chosenDate.getDate() === day.day
  ) {
    classNameArray.push(styles.calendar__days_choosen);
  }

  if (day.dayOfWeek === 0 || day.dayOfWeek === 6) {
    classNameArray.push(styles.calendar__days_weekend);
  }

  return classNameArray.length > 0 ? classNameArray.join(' ') : '';
}
