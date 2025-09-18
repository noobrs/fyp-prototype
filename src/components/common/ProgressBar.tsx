import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number;
  label?: string;
  tone?: 'primary' | 'success' | 'warning';
}

export function ProgressBar({ value, label, tone = 'primary' }: ProgressBarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        {label && <span>{label}</span>}
        <span>{value}%</span>
      </div>
      <div className={styles.track}>
        <div className={`${styles.fill} ${styles[tone]}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
