import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { MetricTile } from '../../components/common/MetricTile';
import { SectionCard } from '../../components/common/SectionCard';
import { TagList } from '../../components/common/TagList';
import { StatusBadge } from '../../components/common/StatusBadge';
import { FormField } from '../../components/common/FormField';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Timeline } from '../../components/common/Timeline';
import {
  jobMetrics,
  jobApplications,
  applicationTimeline,
  resumeMetadata,
  resumeVersions,
  verificationTimeline,
  alerts,
  onboardingSteps
} from '../../data/jobSeekerData';
import styles from './JobSeekerPage.module.css';

const tabs = [
  { id: 'overview', label: 'Overview', description: 'Profile health & highlights', indicator: '92%' },
  { id: 'auth', label: 'Registration', description: 'Sign-up flow & security' },
  { id: 'applications', label: 'Applications', description: 'Active roles & stages', indicator: '3 active' },
  { id: 'resume', label: 'Resume', description: 'Uploads, edits & insights' },
  { id: 'verification', label: 'Verification', description: 'Share trusted credentials' },
  { id: 'notifications', label: 'Notifications', description: 'Alerts & AI nudges' }
];

export function JobSeekerPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const handleTabChange = (nextTab: string) => {
    setActiveTab(nextTab);
    const target = document.getElementById(nextTab);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AppLayout
      role="jobSeeker"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      onRoleSwitch={(role) => role === 'recruiter' && navigate('/recruiter')}
    >
      <div className={styles.pageGrid}>
        <div className={styles.primaryColumn}>
          <section id="overview" className={styles.anchorSection}>
            <SectionCard
              title="Profile snapshot"
              subtitle="Demonstrate readiness, highlight verifications, and keep your profile recruiter-ready."
              actions={<StatusBadge label="Application ready" tone="success" />}
            >
              <div className={styles.heroLayout}>
                <div className={styles.heroContent}>
                  <div className={styles.heroHeader}>
                    <div>
                      <h3>Jordan Diaz</h3>
                      <span className={styles.roleTitle}>Robotics Engineer · Open to onsite & hybrid roles</span>
                    </div>
                    <div className={styles.profileMeta}>
                      <span>Availability: Immediate</span>
                      <span>Preferred cities: Berlin · Copenhagen · Zurich</span>
                    </div>
                  </div>
                  <TagList items={['Robotics Automation', 'Safety Compliance', 'Team Leadership', 'ROS2']} />
                  <div className={styles.heroNotes}>
                    <p>
                      AI summary: Jordan leads cross-functional teams building autonomous warehouse robots. Recently spearheaded a
                      compliance audit that reduced incident reports by 48%.
                    </p>
                    <div className={styles.heroControls}>
                      <button type="button">Share public profile</button>
                      <button type="button" className={styles.ghostButton}>
                        Preview recruiter view
                      </button>
                    </div>
                  </div>
                </div>
                <aside className={styles.metricsGrid}>
                  {jobMetrics.map((metric) => (
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

          <section id="auth" className={styles.anchorSection}>
            <SectionCard
              title="Registration & authentication"
              subtitle="Complete multi-step onboarding, enable secure sign-in, and configure recovery flows."
              actions={<StatusBadge label="Step 3 of 4" tone="warning" />}
            >
              <div className={styles.authLayout}>
                <div className={styles.stepList}>
                  {onboardingSteps.map((step) => (
                    <div key={step.id} className={styles.stepItem} data-status={step.status}>
                      <div className={styles.stepIcon}>{step.status === 'completed' ? '✓' : step.status === 'active' ? '●' : '○'}</div>
                      <div>
                        <strong>{step.title}</strong>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.formPanel}>
                  <div className={styles.formHeader}>
                    <h3>Secure sign-in</h3>
                    <p>Combine passwordless magic links with authenticator app support.</p>
                  </div>
                  <div className={styles.formGrid}>
                    <FormField label="Primary email" hint="Used for recruiter outreach and security alerts.">
                      <input type="email" defaultValue="jordan.diaz@email.com" />
                    </FormField>
                    <FormField label="Phone" hint="SMS backup for two-factor challenges.">
                      <input type="tel" defaultValue="+45 45 778 203" />
                    </FormField>
                    <FormField
                      label="Authenticator app"
                      hint="Scan the QR code or enter the setup key to pair your device."
                      status="success"
                    >
                      <input type="text" defaultValue="Device linked" readOnly />
                    </FormField>
                    <FormField label="Security question" hint="Provide an answer only you can guess." status="error">
                      <input type="text" placeholder="Add recovery answer" />
                    </FormField>
                  </div>
                  <div className={styles.authActions}>
                    <button type="button" className={styles.primaryButton}>
                      Save security preferences
                    </button>
                    <button type="button" className={styles.ghostButton}>
                      Download backup codes
                    </button>
                  </div>
                  <div className={styles.socialLogin}>
                    <span>One-tap sign in</span>
                    <div>
                      <button type="button">Continue with Google</button>
                      <button type="button">Continue with LinkedIn</button>
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>
          </section>

          <section id="applications" className={styles.anchorSection}>
            <SectionCard
              title="Job application workspace"
              subtitle="Track every stage with AI insights, recruiter feedback, and personal notes."
              actions={<StatusBadge label="3 interviews" tone="info" />}
            >
              <div className={styles.applicationLayout}>
                <div className={styles.applicationList}>
                  <header>
                    <h3>Active pipeline</h3>
                    <div className={styles.filterBar}>
                      <span>Filters:</span>
                      <button type="button" className={styles.filterChip}>
                        Status · Interviewing
                      </button>
                      <button type="button" className={styles.filterChip}>
                        Priority · High
                      </button>
                      <button type="button" className={styles.filterChip}>
                        Source · AI match
                      </button>
                    </div>
                  </header>
                  <ul>
                    {jobApplications.map((application) => (
                      <li key={application.id}>
                        <div>
                          <h4>{application.role}</h4>
                          <span className={styles.companyName}>{application.company}</span>
                        </div>
                        <div className={styles.applicationMeta}>
                          <span>{application.status}</span>
                          <span>Fit score: {application.score}</span>
                          <span>Priority: {application.priority}</span>
                        </div>
                        <span className={styles.postedAt}>Posted {application.posted}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.applicationDetail}>
                  <div className={styles.detailHeader}>
                    <div>
                      <h3>Senior Robotics Engineer</h3>
                      <p>Acme Robotics · Berlin HQ · Hybrid 3 days onsite</p>
                    </div>
                    <div className={styles.detailActions}>
                      <button type="button" className={styles.primaryButton}>
                        Update status
                      </button>
                      <button type="button" className={styles.ghostButton}>
                        Share timeline
                      </button>
                    </div>
                  </div>
                  <div className={styles.scorecard}>
                    <ProgressBar value={86} label="Match confidence" />
                    <ProgressBar value={72} label="Culture add" tone="success" />
                    <ProgressBar value={54} label="Compensation fit" tone="warning" />
                  </div>
                  <div className={styles.detailSplit}>
                    <div>
                      <h4>Application timeline</h4>
                      <Timeline items={applicationTimeline} />
                    </div>
                    <div className={styles.notePanel}>
                      <h4>Private notes</h4>
                      <textarea defaultValue="Prep robotics safety case study · Confirm relocation budget before onsite." />
                      <div className={styles.attachmentList}>
                        <span>Attachments</span>
                        <button type="button">Demo reel.mp4</button>
                        <button type="button">Safety audit summary.pdf</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>
          </section>

          <section id="resume" className={styles.anchorSection}>
            <SectionCard
              title="Resume management"
              subtitle="Upload new versions, refine content, and monitor AI extraction accuracy."
              actions={<StatusBadge label="AI optimised" tone="success" />}
            >
              <div className={styles.resumeLayout}>
                <div className={styles.uploadPanel}>
                  <div className={styles.uploadDropzone}>
                    <span className={styles.uploadIcon}>⬆</span>
                    <div>
                      <strong>Upload updated resume</strong>
                      <p>Drag a PDF up to 20 MB. AI will extract metadata, skills, and compliance signals.</p>
                    </div>
                    <button type="button" className={styles.primaryButton}>
                      Select file
                    </button>
                  </div>
                  <div className={styles.uploadProgress}>
                    <h4>Extraction status</h4>
                    <ProgressBar value={88} label="Metadata extraction" />
                    <ProgressBar value={64} label="Compliance checks" tone="warning" />
                    <ProgressBar value={100} label="Formatting" tone="success" />
                  </div>
                </div>

                <div className={styles.resumeDetail}>
                  <div className={styles.metadataList}>
                    {resumeMetadata.map((section) => (
                      <div key={section.label}>
                        <span>{section.label}</span>
                        <TagList items={section.values} variant="outline" />
                      </div>
                    ))}
                  </div>
                  <div className={styles.editorPanel}>
                    <h4>Inline editor</h4>
                    <textarea
                      defaultValue={`Led robotics automation rollout across 3 fulfilment centres. Improved pick accuracy by 37% while reducing downtime by 18%.\n\nKey wins:\n• Built safety playbook adopted by 4 international sites.\n• Delivered ML-powered perception stack for navigation in cluttered warehouses.`}
                    />
                    <div className={styles.editorActions}>
                      <button type="button" className={styles.primaryButton}>
                        Save edits
                      </button>
                      <button type="button" className={styles.ghostButton}>
                        Revert changes
                      </button>
                    </div>
                  </div>
                  <div className={styles.versionList}>
                    <h4>Version history</h4>
                    <ul>
                      {resumeVersions.map((version) => (
                        <li key={version.id}>
                          <div>
                            <strong>{version.label}</strong>
                            <span>{version.updated}</span>
                          </div>
                          <ul>
                            {version.highlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                          <button type="button">Preview</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SectionCard>
          </section>

          <section id="verification" className={styles.anchorSection}>
            <SectionCard
              title="Resume verification"
              subtitle="Share secure, tamper-proof versions with recruiters and track validation progress."
              actions={<StatusBadge label="82% complete" tone="warning" />}
              footer={<span>Privacy-first: Recruiters only see verified segments. Sensitive data stays redacted.</span>}
            >
              <div className={styles.verificationLayout}>
                <div>
                  <h3>Trust signals overview</h3>
                  <div className={styles.verificationSummary}>
                    <div>
                      <h4>Verification badges</h4>
                      <TagList items={['Identity verified', 'Skill endorsements · 3/5', 'Publication verified']} />
                    </div>
                    <div>
                      <h4>Share controls</h4>
                      <p>Generate redacted previews, control expiration windows, and monitor recruiter views in real time.</p>
                      <div className={styles.verificationActions}>
                        <button type="button" className={styles.primaryButton}>
                          Share secure copy
                        </button>
                        <button type="button" className={styles.ghostButton}>
                          View access log
                        </button>
                      </div>
                    </div>
                  </div>
                  <h4>Verification timeline</h4>
                  <Timeline items={verificationTimeline} />
                </div>
                <aside className={styles.verificationAside}>
                  <h4>Redacted preview</h4>
                  <div className={styles.previewPane}>
                    <p>
                      Name and contact details hidden. Experience, skills, and achievements visible. Recruiters can request full access
                      which triggers an approval workflow.
                    </p>
                    <button type="button">Launch secure preview</button>
                    <button type="button" className={styles.ghostButton}>
                      Download verification report
                    </button>
                  </div>
                  <div className={styles.alertStack}>
                    {alerts.map((alert) => (
                      <div key={alert.id} data-tone={alert.tone}>
                        <strong>{alert.title}</strong>
                        <p>{alert.message}</p>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </SectionCard>
          </section>
        </div>

        <aside className={styles.secondaryColumn} id="notifications">
          <SectionCard title="Insights & nudges" subtitle="Stay proactive with AI recommendations.">
            <div className={styles.alertColumn}>
              {alerts.map((alert) => (
                <div key={alert.id} className={styles.alertCard} data-tone={alert.tone}>
                  <span>{alert.tone === 'warning' ? '⚠️' : '✨'}</span>
                  <div>
                    <strong>{alert.title}</strong>
                    <p>{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Daily prep checklist" subtitle="Small wins that keep momentum.">
            <ul className={styles.checklist}>
              <li>
                <input type="checkbox" defaultChecked />
                <span>Confirm interview availability for Thursday technical loop.</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Record 90-second elevator pitch to share with recruiters.</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Review compensation expectations against market data.</span>
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Message center" subtitle="Recent recruiter outreach and system updates.">
            <div className={styles.messageList}>
              <article>
                <h4>Acme Robotics recruiter</h4>
                <p>"Looking forward to the onsite! Sharing prep material and schedule details."</p>
                <span>Received 2 hours ago</span>
              </article>
              <article>
                <h4>System update</h4>
                <p>Your verification badge was viewed by 3 recruiters this week.</p>
                <span>Yesterday</span>
              </article>
              <article>
                <h4>Neura Dynamics</h4>
                <p>"Could you expand on your ROS2 migration project?" Draft reply ready.</p>
                <span>2 days ago</span>
              </article>
            </div>
          </SectionCard>
        </aside>
      </div>
    </AppLayout>
  );
}
