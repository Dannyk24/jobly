import { Bookmark } from "lucide-react";
import { Button } from "../../../components/ui/Button/Button";
import "./JobDetailsHeader.css";
import { MetaDataRow } from "../../../components/ui/MetaDataRow/MetaDataRow";
import { DataBadgeGrid } from "../../../components/ui/DataBadgeGrid/DataBadgeGrid";

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
            <MetaDataRow items={["Figma", "San francisco, CA"]} />
            <MetaDataRow items={["Remote", "Posted 2 days ago"]} />
          </div>
          <DataBadgeGrid data={["$120k-$160k", "Senior"]} />
        </div>
        <div className="job-actions-container">
          <Button variant="primary" text="apply now" isRounded />
          <Button variant="secondary" text="Visit company website" isRounded />
          <Button
            Icon={Bookmark}
            variant="secondary"
            isRounded
            text="Bookmark"
          />
        </div>
      </div>
    </div>
  );
}
