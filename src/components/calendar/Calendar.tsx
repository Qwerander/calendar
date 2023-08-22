import { ReactComponent as ArrowLeft } from '../../img/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../img/arrow-right.svg';
import { IDay, useCalendar } from './useCalendar';
import styles from './calendar.module.css';
import { setClassName } from './setClassName';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectChoosenDate, setChoosenDate } from '../../store/reducers/calendarSlice';

export const Calendar = () => {
  const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  const dispatch = useAppDispatch();
  const choosenDate = useAppSelector(selectChoosenDate);
  const { previousMonthDays, currentMonthDays, nextMonthDays, currentDate } = useCalendar(choosenDate);

  // console.log(previousMonthDays);
  // console.log(currentMonthDays);
  // console.log(nextMonthDays);
  // console.log(currentDate);

  const handleClick = (day: IDay) => {
    const date = new Date(Date.UTC(day.year, day.month, day.day)).toISOString();
    dispatch(setChoosenDate({ date }));
  };

  const changeMonthDecrease = () => {
    let date: string | Date = new Date(choosenDate);
    date.setUTCMonth(date.getUTCMonth() - 1);
    date = date.toISOString()
    dispatch(setChoosenDate({ date }));
  };

  const changeMonthIncrease = () => {
    let date: string | Date = new Date(choosenDate);
    date.setUTCMonth(date.getUTCMonth() + 1);
    date = date.toISOString()
    dispatch(setChoosenDate({ date }));
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar__header}>
        <h3 className={styles.calendar__headerText}>Календарь</h3>
      </div>
      <div className={styles.calendar__body}>
        <div className={styles.calendar__top}>
          <div className={styles.calendar__topYear}>{currentDate.year}</div>
          <div className={styles.calendar__topMonth}>
            <ArrowLeft onClick={changeMonthDecrease} />
            {currentDate.monthName}
            <ArrowRight onClick={changeMonthIncrease} />
          </div>
        </div>
        <div className={styles.calendar__days}>
          {weekDays.map((dayOfWeek) => (
            <div
              key={dayOfWeek}
              className={dayOfWeek === 'СБ' || dayOfWeek === 'ВС' ? styles.calendar__days_weekend : ''}>
              {dayOfWeek}
            </div>
          ))}
          {previousMonthDays.map((day) => (
            <div
              key={day.day}
              onClick={() => {
                handleClick(day);
              }}
              className={styles.calendar__days_unused}>
              {day.day}
            </div>
          ))}
          {currentMonthDays.map((day) => {
            const classes = setClassName(day, new Date(choosenDate));
            return (
              <div
                key={day.day}
                onClick={() => {
                  handleClick(day);
                }}
                className={`${classes}`}>
                {day.day}
              </div>
            );
          })}
          {nextMonthDays.map((day) => (
            <div
              key={day.day}
              onClick={() => {
                handleClick(day);
              }}
              className={styles.calendar__days_unused}>
              {day.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
