import { Dot } from "lucide-react";
import "./JobCard.css";

export function JobCard() {
  return (
    <div className="job-card">
      <div className="job-card-left">
        <div className="employer-logo-container">
          <span>F</span>
        </div>
        <div className="job-info-container">
          <p className="job-title">Senior javascript developer</p>
          <div className="employer-data">
            <span className="employer-name">Figma</span>
            <Dot className="decorative-dot" />
            <span className="employer-location">san francisco ,CA</span>
          </div>
          <div className="job-tags">
            <div className="data-badge">Hybrid</div>
            <div className="data-badge">LinkedIn</div>
          </div>
        </div>
      </div>
      <div className="job-card-right">
        <span className="job-salary-range">$130k-$165k</span>
        <span className="time-posted">Posted 1 day ago</span>
      </div>
    </div>
  );
}
