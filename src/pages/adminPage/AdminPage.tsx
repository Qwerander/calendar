import { Calendar } from '../../components/calendar/Calendar';
import { MainTitle } from '../../components/mainTitle/MainTitle';
import { RecordsTable } from '../../components/recordsTable/RecordsTable';
import styles from './adminPage.module.css';

export const AdminPage = () => {
  return (
    <div>
      <MainTitle title='Админ-панель' />
      <div className={styles.calendar}>
        <Calendar />
      </div>
      <RecordsTable />
    </div>
  );
};
