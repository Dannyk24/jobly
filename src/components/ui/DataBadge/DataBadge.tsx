import "./DataBadge.css";
import type { DataBadgeProps } from "../../../types/DataBadge";

export function DataBadge({
  name,
  Icon,
  backgroundColor,
  color,
}: DataBadgeProps) {
  return (
    <div
      className={Icon ? "data-badge data-badge-with-icon" : "data-badge"}
      style={{
        backgroundColor: backgroundColor,
        color: color,
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
