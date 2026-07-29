import { Bookmark, Dot } from "lucide-react";
import { Button } from "../../../components/ui/Button/Button";
import "./JobDetailsHeader.css";

export function JobDetailsHeader() {
  return (
    <div className="job-details-header">
      <div className="current-job-route-indciator">
        <span>Jobs</span>
        <span>/</span>
        <span className="job-industry">Engineering</span>
        <span>/</span>
        <span className="job-title">Senior Javascript Developer</span>
      </div>
      <div className="job-details-container">
        <div className="job-info-container">
          <div className="left">
            <div className="employer-logo-container">P</div>
          </div>
          <div className="right">
            <span className="job-title">Senior Javascript Developer</span>
            <div className="employer-data-container">
              <div className="employer-data">
                <span className="employer-name">Figma</span>
                <Dot className="decorative-dot" />
                <span className="employer-location">san francisco ,CA</span>
              </div>
            </div>
            <div className="employer-data-container">
              <div className="employer-data">
                <span className="employer-name">Remote</span>
                <Dot className="decorative-dot" />
                <span className="employer-location">Posted 2 days ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="job-actions-container">
          <Button variant="primary" text="apply now" isRounded />
          <Button variant="secondary" text="Visit company website" isRounded />
          <Button Icon={Bookmark} variant="secondary" isRounded />
        </div>
      </div>
    </div>
  );
}
