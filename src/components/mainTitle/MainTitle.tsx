import styles from './mainTitle.module.css';

export const MainTitle = ({ title }: { title: string }) => {
  return <h1 className={styles.title}>{title}</h1>;
};
