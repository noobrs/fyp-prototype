import styles from './TagList.module.css';

interface TagListProps {
  items: string[];
  variant?: 'default' | 'outline';
}

export function TagList({ items, variant = 'default' }: TagListProps) {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <span key={item} className={variant === 'default' ? styles.tag : styles.outline}>
          {item}
        </span>
      ))}
    </div>
  );
}
