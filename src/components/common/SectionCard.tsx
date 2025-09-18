import { ReactNode } from 'react';
import styles from './SectionCard.module.css';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export function SectionCard({ title, subtitle, actions, children, footer }: SectionCardProps) {
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </header>
      <div className={styles.content}>{children}</div>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </section>
  );
}
