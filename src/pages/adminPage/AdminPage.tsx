import { Calendar } from '../../components/calendar/Calendar';
import { MainTitle } from '../../components/mainTitle/MainTitle';
import styles from './adminPage.module.css';

export const AdminPage = () => {
  return (
    <div>
      <MainTitle title='Админ-панель' />
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </div>
  );
};
