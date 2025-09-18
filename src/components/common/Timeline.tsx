import styles from './Timeline.module.css';

export interface TimelineItem {
  id: string;
  title: string;
  timestamp: string;
  description: string;
  status?: 'active' | 'completed' | 'upcoming';
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className={styles.timeline}>
      {items.map((item) => (
        <li key={item.id} className={styles[item.status ?? 'upcoming']}>
          <div className={styles.dot} />
          <div className={styles.content}>
            <div className={styles.meta}>
              <h4>{item.title}</h4>
              <span>{item.timestamp}</span>
            </div>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
