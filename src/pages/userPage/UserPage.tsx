import { Calendar } from '../../components/calendar/Calendar';
import { MainTitle } from '../../components/mainTitle/MainTitle';
import { Schedule } from '../../components/schedule/Schedule';
import { UserForm } from '../../components/formUser/UserForm';
import styles from './userPage.module.css';

export const UserPage = () => {
  return (
    <div>
      <MainTitle title='Запись в Салон Красоты' />
      <div className={styles.calendar}>
        <Calendar />
        <Schedule />
      </div>
      <UserForm />
    </div>
  );
};
