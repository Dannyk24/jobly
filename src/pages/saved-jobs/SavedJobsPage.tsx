import { JobCardGrid } from "../../components/shared/JobCardGrid/JobCardGrid";
import "./SavedJobsPage.css";

function SavedJobsPage() {
  return (
    <div className="app-page saved-jobs-page">
      <h1 className="page-title">Saved jobs</h1>
      <div className="saved-jobs-grid">
        <JobCardGrid />
      </div>
    </div>
  );
}

export default SavedJobsPage;
