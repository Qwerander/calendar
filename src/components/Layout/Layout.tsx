import { Outlet } from 'react-router-dom';

import styles from './layout.module.css';

export function Layout() {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
}
