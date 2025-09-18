import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { MetricTile } from '../../components/common/MetricTile';
import { SectionCard } from '../../components/common/SectionCard';
import { StatusBadge } from '../../components/common/StatusBadge';
import { TagList } from '../../components/common/TagList';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Timeline } from '../../components/common/Timeline';
import { FormField } from '../../components/common/FormField';
import {
  recruiterMetrics,
  candidateMatches,
  matchingInsights,
  jobPostings,
  recruiterTimeline,
  feedbackStreams,
  hiringFormFields,
  recruiterAlerts
} from '../../data/recruiterData';
import styles from './RecruiterPage.module.css';

const tabs = [
  { id: 'overview', label: 'Dashboard', description: 'Campaign health & metrics' },
  { id: 'matching', label: 'Candidate Matching', description: 'Scoring & rankings', indicator: 'Top 3 ready' },
  { id: 'feedback', label: 'Feedback Hub', description: 'Interview signals & nudges' },
  { id: 'postings', label: 'Job Postings', description: 'Pipelines & approvals' },
  { id: 'reports', label: 'Insights', description: 'Analytics & documents' }
];

export function RecruiterPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const handleTabChange = (nextTab: string) => {
    setActiveTab(nextTab);
    document.getElementById(nextTab)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AppLayout
      role="recruiter"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      onRoleSwitch={(role) => role === 'jobSeeker' && navigate('/job-seeker')}
    >
      <div className={styles.pageGrid}>
        <div className={styles.primaryColumn}>
          <section id="overview" className={styles.anchorSection}>
            <SectionCard
              title="Recruiter control centre"
              subtitle="Monitor live campaigns, track SLA health, and surface instant actions."
              actions={<StatusBadge label="SLA on track" tone="success" />}
            >
              <div className={styles.overviewLayout}>
                <div className={styles.overviewProfile}>
                  <h3>Nova Chen</h3>
                  <p>Lead Technical Recruiter · Robotics & Automation pod</p>
                  <TagList items={['EMEA focus', 'Robotics', 'Compliance critical roles']} />
                  <div className={styles.profileGrid}>
                    <div>
                      <span>Hiring squad</span>
                      <p>Product, Robotics Engineering, Compliance</p>
                    </div>
                    <div>
                      <span>Weekly rituals</span>
                      <p>Pipeline stand-up · Offer review · Hiring huddles</p>
                    </div>
                  </div>
                  <div className={styles.overviewActions}>
                    <button type="button" className={styles.primaryButton}>
                      Launch daily stand-up deck
                    </button>
                    <button type="button" className={styles.ghostButton}>
                      Share status with leadership
                    </button>
                  </div>
                </div>
                <aside className={styles.metricsGrid}>
                  {recruiterMetrics.map((metric) => (
                    <MetricTile
                      key={metric.label}
                      label={metric.label}
                      value={metric.value}
                      delta={metric.delta}
                      trend={metric.trend as 'up' | 'down' | 'steady'}
                      accent={metric.accent}
                    />
                  ))}
                </aside>
              </div>
            </SectionCard>
          </section>

          <section id="matching" className={styles.anchorSection}>
            <SectionCard
              title="Candidate matching"
              subtitle="Review AI-ranked candidates, adjust scoring weights, and trigger recruiter workflows."
              actions={<StatusBadge label="3 ready" tone="info" />}
            >
              <div className={styles.matchingLayout}>
                <div className={styles.candidateBoard}>
                  <header>
                    <h3>Top-ranked candidates</h3>
                    <p>Combined TF-IDF + behavioural fit scoring. Adjust weights to refine ordering.</p>
                  </header>
                  <table>
                    <thead>
                      <tr>
                        <th>Candidate</th>
                        <th>Fit</th>
                        <th>Stage</th>
                        <th>Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidateMatches.map((match) => (
                        <tr key={match.id}>
                          <td>{match.name}</td>
                          <td>
                            <div className={styles.fitScore}>
                              <span>{match.fit}</span>
                              <ProgressBar value={match.fit} />
                            </div>
                          </td>
                          <td>{match.stage}</td>
                          <td>{match.matchReason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className={styles.weightControls}>
                    <FormField label="Skills weight">
                      <input type="range" min="40" max="100" defaultValue="60" />
                    </FormField>
                    <FormField label="Experience weight">
                      <input type="range" min="0" max="100" defaultValue="25" />
                    </FormField>
                    <FormField label="Culture add weight">
                      <input type="range" min="0" max="100" defaultValue="15" />
                    </FormField>
                  </div>
                </div>
                <aside className={styles.matchingInsights}>
                  <h4>AI insights</h4>
                  <ul>
                    {matchingInsights.map((insight) => (
                      <li key={insight.id}>
                        <strong>{insight.title}</strong>
                        <p>{insight.detail}</p>
                        <button type="button">Create action</button>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.matchingActions}>
                    <button type="button" className={styles.primaryButton}>
                      Send shortlist to hiring manager
                    </button>
                    <button type="button" className={styles.ghostButton}>
                      Export candidate matrix
                    </button>
                  </div>
                </aside>
              </div>
            </SectionCard>
          </section>

          <section id="feedback" className={styles.anchorSection}>
            <SectionCard
              title="Feedback & notification hub"
              subtitle="Collect interviewer signals, route follow-ups, and act on AI nudges."
              actions={<StatusBadge label="5 pending" tone="warning" />}
            >
              <div className={styles.feedbackLayout}>
                <div className={styles.feedbackStreams}>
                  {feedbackStreams.map((stream) => (
                    <div key={stream.id}>
                      <h4>{stream.label}</h4>
                      <ul>
                        {stream.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <aside className={styles.feedbackAside}>
                  <h4>Recruiter timeline</h4>
                  <Timeline items={recruiterTimeline} />
                  <div className={styles.feedbackActions}>
                    <textarea placeholder="Summarise feedback or draft a follow-up message..." />
                    <div>
                      <button type="button" className={styles.primaryButton}>
                        Send recap
                      </button>
                      <button type="button" className={styles.ghostButton}>
                        Schedule reminder
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </SectionCard>
          </section>

          <section id="postings" className={styles.anchorSection}>
            <SectionCard
              title="Job posting management"
              subtitle="Control requisition approvals, monitor pipeline stages, and publish updates across channels."
              actions={<StatusBadge label="8 live" tone="info" />}
            >
              <div className={styles.postingLayout}>
                <div className={styles.postingBoard}>
                  <header>
                    <h3>Active requisitions</h3>
                    <p>Drag & drop between columns to update stage. Click to view candidate funnel.</p>
                  </header>
                  <div className={styles.postingColumns}>
                    <div>
                      <span>In review</span>
                      <ul>
                        {jobPostings
                          .filter((posting) => posting.status === 'In Review')
                          .map((posting) => (
                            <li key={posting.id}>
                              <strong>{posting.title}</strong>
                              <span>{posting.applicants} applicants · Priority {posting.priority}</span>
                              <span>Deadline {posting.deadline}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div>
                      <span>Sourcing</span>
                      <ul>
                        {jobPostings
                          .filter((posting) => posting.status === 'Sourcing')
                          .map((posting) => (
                            <li key={posting.id}>
                              <strong>{posting.title}</strong>
                              <span>{posting.applicants} applicants · Priority {posting.priority}</span>
                              <span>Deadline {posting.deadline}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div>
                      <span>Offer stage</span>
                      <ul>
                        {jobPostings
                          .filter((posting) => posting.status === 'Offer stage')
                          .map((posting) => (
                            <li key={posting.id}>
                              <strong>{posting.title}</strong>
                              <span>{posting.applicants} applicants · Priority {posting.priority}</span>
                              <span>Deadline {posting.deadline}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <aside className={styles.postingForm}>
                  <h4>Create hiring sprint</h4>
                  <div className={styles.formGrid}>
                    {hiringFormFields.map((field) => (
                      <FormField key={field.label} label={field.label}>
                        <input type="text" defaultValue={field.value} />
                      </FormField>
                    ))}
                    <FormField label="Channels">
                      <TagList items={['LinkedIn', 'Specialist boards', 'Internal referrals']} />
                    </FormField>
                  </div>
                  <div className={styles.formActions}>
                    <button type="button" className={styles.primaryButton}>
                      Publish updates
                    </button>
                    <button type="button" className={styles.ghostButton}>
                      Generate hiring brief
                    </button>
                  </div>
                </aside>
              </div>
            </SectionCard>
          </section>
        </div>

        <aside className={styles.secondaryColumn} id="reports">
          <SectionCard title="Alerts" subtitle="Key risks and achievements across campaigns.">
            <div className={styles.alertColumn}>
              {recruiterAlerts.map((alert) => (
                <div key={alert.id} data-tone={alert.tone}>
                  <span>{alert.tone === 'danger' ? '🚨' : '✅'}</span>
                  <div>
                    <strong>{alert.title}</strong>
                    <p>{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Activity log" subtitle="Latest actions across the hiring workspace.">
            <ul className={styles.activityList}>
              <li>
                <span>09:45</span>
                <p>Offer package updated for Robotics Engineer — awaiting hiring manager approval.</p>
              </li>
              <li>
                <span>08:20</span>
                <p>Published automation campaign to LinkedIn and Robotics Guild.</p>
              </li>
              <li>
                <span>Yesterday</span>
                <p>Shared AI shortlist with compliance director and product leadership.</p>
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Documents" subtitle="Keep stakeholders aligned with structured updates.">
            <div className={styles.documentList}>
              <button type="button">Weekly hiring recap.pdf</button>
              <button type="button">Candidate scorecard template.xlsx</button>
              <button type="button">Automation hiring playbook.pptx</button>
            </div>
          </SectionCard>
        </aside>
      </div>
    </AppLayout>
  );
}
