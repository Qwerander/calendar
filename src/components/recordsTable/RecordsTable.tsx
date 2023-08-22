import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeRecord, selectChoosenDate, selectRecords } from '../../store/reducers/calendarSlice';
import styles from './recordsTable.module.css';

export const RecordsTable = () => {
  const dispatch = useAppDispatch();
  const records = useAppSelector(selectRecords);
  const choosenDate = useAppSelector(selectChoosenDate);
  return (
    <>
      <h2 className={styles.title}>{choosenDate.slice(0, 10)}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Время</th>
            <th>Отменить</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(records)
            .sort((a, b) => a.time - b.time)
            .map((record) => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.phone}</td>
                <td>{new Date(record.time * 1000).getHours()}:00</td>
                <td>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      dispatch(removeRecord({ id: record.id }));
                    }}>
                    Отменить
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
