import { ReactNode, useEffect } from 'react';
import styles from './modal.module.css';

interface IModal {
  toggle: (value: boolean) => void;
  autoClose: number;
  children: ReactNode;
}
export const Modal = ({ toggle, autoClose = 0, children }: IModal) => {
  if (autoClose) {
    setTimeout(() => toggle(false), autoClose);
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div
      className={styles.background}
      onClick={(e) => {
        e.stopPropagation();
        toggle(false);
      }}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}{' '}
      </div>
    </div>
  );
};
