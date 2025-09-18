import styles from './MetricTile.module.css';

interface MetricTileProps {
  label: string;
  value: string;
  delta?: string;
  trend?: 'up' | 'down' | 'steady';
  accent?: 'primary' | 'success' | 'warning' | 'danger';
}

export function MetricTile({ label, value, delta, trend = 'up', accent = 'primary' }: MetricTileProps) {
  return (
    <div className={`${styles.tile} ${styles[accent]}`}>
      <span className={styles.label}>{label}</span>
      <strong className={styles.value}>{value}</strong>
      {delta && (
        <span className={styles.delta} data-trend={trend}>
          {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '▪'} {delta}
        </span>
      )}
    </div>
  );
}
