import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.css';

interface TopBarProps {
  role: 'jobSeeker' | 'recruiter';
  onRoleSwitch?: (role: 'jobSeeker' | 'recruiter') => void;
}

const notifications = [
  {
    id: 'n1',
    title: 'Interview confirmed',
    description: 'Acme Robotics scheduled an onsite interview for the Robotics Engineer role.',
    time: '10:24 AM',
    status: 'Upcoming'
  },
  {
    id: 'n2',
    title: 'Resume verified',
    description: 'Your AI-screened resume has been fully verified and shared with recruiters.',
    time: 'Yesterday',
    status: 'Completed'
  },
  {
    id: 'n3',
    title: 'New role suggestion',
    description: 'We found 5 new matches based on your updated skill graph.',
    time: '2 days ago',
    status: 'Recommendation'
  }
];

export function TopBar({ role, onRoleSwitch }: TopBarProps) {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className={styles.topBar}>
      <div className={styles.brandArea}>
        <Link to="/job-seeker" className={styles.brand}>
          <div className={styles.logo}>AI</div>
          <div>
            <span className={styles.brandTitle}>TalentFlow</span>
            <p className={styles.brandSubtitle}>AI Recruitment Workspace</p>
          </div>
        </Link>
        <div className={styles.roleSwitch}>
          <button
            type="button"
            onClick={() => onRoleSwitch?.('jobSeeker')}
            className={role === 'jobSeeker' ? styles.roleActive : ''}
          >
            Job Seeker
          </button>
          <button
            type="button"
            onClick={() => onRoleSwitch?.('recruiter')}
            className={role === 'recruiter' ? styles.roleActive : ''}
          >
            Recruiter
          </button>
        </div>
      </div>

      <div className={styles.searchArea}>
        <div className={styles.searchField}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="search"
            placeholder="Search jobs, recruiters, or hiring campaigns"
          />
        </div>
        <button type="button" className={styles.smartFilter}>
          Smart Filters
        </button>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.primaryAction}>
          + Quick Apply
        </button>
        <button type="button" className={styles.secondaryAction}>
          Create Job Alert
        </button>
        <div className={styles.notificationWrapper}>
          <button
            type="button"
            className={styles.notificationBell}
            onClick={() => setNotificationsOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={isNotificationsOpen}
          >
            🔔
            <span className={styles.badge}>3</span>
          </button>
          {isNotificationsOpen && (
            <div className={styles.notificationPanel}>
              <div className={styles.notificationHeader}>
                <h4>Notification Center</h4>
                <p>Stay updated on application progress, recruiter actions, and AI insights.</p>
              </div>
              <ul>
                {notifications.map((notification) => (
                  <li key={notification.id}>
                    <div className={styles.notificationMeta}>
                      <span className={styles.notificationStatus}>{notification.status}</span>
                      <span className={styles.notificationTime}>{notification.time}</span>
                    </div>
                    <h5>{notification.title}</h5>
                    <p>{notification.description}</p>
                  </li>
                ))}
              </ul>
              <div className={styles.notificationFooter}>
                <button type="button">View message center</button>
                <button type="button">Mute AI nudges</button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>JD</div>
          <div>
            <strong>Jordan Diaz</strong>
            <span>{role === 'jobSeeker' ? 'Robotics Engineer' : 'Senior Recruiter'}</span>
          </div>
          <span className={styles.dropdownIcon}>▾</span>
        </div>
      </div>
    </header>
  );
}
