import { JobCard } from "../JobCard/JobCard";
import "./JobCardGrid.css";

export function JobCardGrid() {
  return (
    <div className="job-card-grid">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}
