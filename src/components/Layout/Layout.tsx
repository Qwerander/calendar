import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './layout.module.css';

interface IlayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: IlayoutProps) {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
}
