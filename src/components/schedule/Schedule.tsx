import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectChoosenDate, selectRecords, setTimeRecord } from '../../store/reducers/calendarSlice';
import { createTimeStamps } from './createTimeStamps';
import styles from './schedule.module.css';

export const Schedule = () => {
  const dispatch = useAppDispatch();
  const choosenDate = useAppSelector(selectChoosenDate);
  const records = useAppSelector(selectRecords);
  const receptions = createTimeStamps(choosenDate);
  const timeValues = Object.values(records).map((obj) => obj.time);
  const showReceptions = receptions.filter((time) => !timeValues.includes(time.timeStamp));

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => (timeStamp: number) => {
    const clickedElement = e.currentTarget as HTMLDivElement;
    for (let i = 0; i < clickedElement.parentElement!.children.length; i++) {
      clickedElement.parentElement!.children[i].classList.remove(styles.schedule__timeActive);
    }
    clickedElement.classList.add(styles.schedule__timeActive);
    dispatch(setTimeRecord({ time: timeStamp }));
  };

  return (
    <div className={styles.schedule}>
      <div className={styles.schedule__header}>
        <h5 className={styles.schedule__headerText}>Свободное время</h5>
      </div>
      <div className={styles.schedule__body}>
        {showReceptions.map((el) => {
          return (
            <div
              className={styles.schedule__time}
              key={el.timeStamp}
              onClick={(e) => {
                handleClick(e)(el.timeStamp);
              }}>
              {el.timeString}
            </div>
          );
        })}
      </div>
    </div>
  );
};
