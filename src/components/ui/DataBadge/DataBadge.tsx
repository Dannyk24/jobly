import "./DataBadge.css";
import type { DataBadgeProps } from "../../../types/DataBadge";

export function DataBadge({ name, Icon, color }: DataBadgeProps) {
  return (
    <div className={Icon ? "data-badge data-badge-with-icon" : "data-badge"}>
      {Icon && (
        <div
          className="data-badge-icon"
          style={{
            backgroundColor: color,
          }}
        >
          <Icon />
        </div>
      )}
      <span>{name}</span>
    </div>
  );
}
