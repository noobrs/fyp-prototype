import { ReactNode } from 'react';
import { TopBar } from './TopBar';
import { ModuleTabItem, ModuleTabs } from './ModuleTabs';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  role: 'jobSeeker' | 'recruiter';
  tabs: ModuleTabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onRoleSwitch?: (role: 'jobSeeker' | 'recruiter') => void;
  children: ReactNode;
}

export function AppLayout({
  role,
  tabs,
  activeTab,
  onTabChange,
  onRoleSwitch,
  children
}: AppLayoutProps) {
  return (
    <div className={styles.shell}>
      <TopBar role={role} onRoleSwitch={onRoleSwitch} />
      <ModuleTabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
