import styles from './StatusBadge.module.css';

interface StatusBadgeProps {
  label: string;
  tone?: 'success' | 'warning' | 'danger' | 'info';
}

export function StatusBadge({ label, tone = 'info' }: StatusBadgeProps) {
  return <span className={styles[tone]}>{label}</span>;
}
