import InputMask from 'react-input-mask';
import styles from './userForm.module.css';
import { useAddRecord } from './useAddRecord';
import { useAppSelector } from '../../store/hooks';
import { selectTime } from '../../store/reducers/calendarSlice';
import { Modal } from '../modal/Modal';
import { PopUp } from '../popUp/PopUp';

export const UserForm = () => {
  const { handleSubmit, name, phone, setName, setPhone, popUpShow, togglePopUp } = useAddRecord();
  const time = useAppSelector(selectTime);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Форма для записи:</h2>
        <label className={styles.label}>
          Имя:
          <input
            className={styles.input}
            type='text'
            placeholder='Имя'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Телефон:
          <InputMask
            className={styles.input}
            mask='+7 (999) 999-99-99'
            name='phone'
            placeholder='+7 (___) ___ - __ - __ '
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        {time ? (
          <button className={styles.btn} type='submit'>
            Записаться
          </button>
        ) : (
          <span className={`${styles.btn} ${styles.btn__disabled}`}>Записаться</span>
        )}
      </form>
      {popUpShow && (
        <Modal toggle={togglePopUp} autoClose={2000}>
          <PopUp />
        </Modal>
      )}
    </>
  );
};
