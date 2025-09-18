import styles from './ModuleTabs.module.css';

export interface ModuleTabItem {
  id: string;
  label: string;
  description: string;
  indicator?: string;
}

interface ModuleTabsProps {
  tabs: ModuleTabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function ModuleTabs({ tabs, activeTab, onTabChange }: ModuleTabsProps) {
  return (
    <nav className={styles.tabBar}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={tab.id === activeTab ? styles.tabActive : styles.tab}
          onClick={() => onTabChange(tab.id)}
        >
          <span className={styles.tabLabel}>{tab.label}</span>
          <span className={styles.tabDescription}>{tab.description}</span>
          {tab.indicator && <span className={styles.indicator}>{tab.indicator}</span>}
        </button>
      ))}
    </nav>
  );
}
