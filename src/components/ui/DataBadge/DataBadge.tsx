import "./DataBadge.css";
import type { DataBadgeProps } from "../../../types/DataBadge";

export function DataBadge({ name, Icon, backgroundColor }: DataBadgeProps) {
  return (
    <div
      className={Icon ? "data-badge data-badge-with-icon" : "data-badge"}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {Icon && (
        <div className="data-badge-icon">
          <Icon />
        </div>
      )}
      <span>{name}</span>
    </div>
  );
}
