import { Dot } from "lucide-react";
import "./JobCard.css";
import Skeleton from "react-loading-skeleton";

export function JobCard() {
  const isLoading = false;

  return (
    <div className="job-card">
      <div className="job-card-left">
        {isLoading ? (
          <Skeleton width={50} height={50} circle />
        ) : (
          <div className="employer-logo-container">
            <span>F</span>
          </div>
        )}
        <div className="job-info-container">
          {isLoading ? (
            <Skeleton width={200} height={15} />
          ) : (
            <p className="job-title">Senior javascript developer</p>
          )}

          {isLoading ? (
            <Skeleton width={150} height={10} />
          ) : (
            <div className="employer-data">
              <span className="employer-name">Figma</span>
              <Dot className="decorative-dot" />
              <span className="employer-location">san francisco ,CA</span>
            </div>
          )}

          {isLoading ? (
            <Skeleton width={70} height={25} borderRadius={20} />
          ) : (
            <div className="job-tags">
              <div className="data-badge">Hybrid</div>
              <div className="data-badge">LinkedIn</div>
            </div>
          )}
        </div>
      </div>
      <div className="job-card-right">
        {isLoading ? (
          <Skeleton width={80} height={20} />
        ) : (
          <span className="job-salary-range">$130k-$165k</span>
        )}

        {isLoading ? (
          <Skeleton width={70} height={10} />
        ) : (
          <span className="time-posted">Posted 1 day ago</span>
        )}
      </div>
    </div>
  );
}
