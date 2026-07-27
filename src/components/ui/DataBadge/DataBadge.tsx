import type { ComponentType } from "react";
import "./DataBadge.css";

type DataBadgeProps = {
  item: string;
  Icon?: ComponentType;
};

export function DataBadge({ item, Icon }: DataBadgeProps) {
  return (
    <div className={Icon ? "data-badge data-badge-with-icon" : "data-badge"}>
      {Icon && (
        <div className="data-badge-icon">
          <Icon />
        </div>
      )}
      <span>{item}</span>
    </div>
  );
}
