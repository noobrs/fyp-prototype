import { Navigate, Route, Routes } from 'react-router-dom';
import { JobSeekerPage } from './pages/jobSeeker/JobSeekerPage';
import { RecruiterPage } from './pages/recruiter/RecruiterPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/job-seeker" replace />} />
      <Route path="/job-seeker" element={<JobSeekerPage />} />
      <Route path="/recruiter" element={<RecruiterPage />} />
      <Route path="*" element={<Navigate to="/job-seeker" replace />} />
    </Routes>
  );
}
