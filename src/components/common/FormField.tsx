import { ReactNode } from 'react';
import styles from './FormField.module.css';

interface FormFieldProps {
  label: string;
  hint?: string;
  status?: 'default' | 'error' | 'success';
  children: ReactNode;
}

export function FormField({ label, hint, status = 'default', children }: FormFieldProps) {
  return (
    <label className={`${styles.field} ${styles[status]}`}>
      <span className={styles.label}>{label}</span>
      <div className={styles.control}>{children}</div>
      {hint && <span className={styles.hint}>{hint}</span>}
    </label>
  );
}
