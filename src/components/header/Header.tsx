import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink className={styles.link} to={'/admin'}>
          Админка
        </NavLink>
        <NavLink className={styles.link} to={'/user'}>
          Запись
        </NavLink>
      </nav>
    </header>
  );
};
