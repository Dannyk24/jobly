import { DataBadge } from "../DataBadge/DataBadge";
import type { DataBadgeProps } from "../../../types/DataBadge";
import "./DataBadgeGrid.css";

type DataBadgeGridProps = {
  data: (DataBadgeProps | string)[]; //Either an object that matches the data badge props or an array of strings for data badges without icons or a mixture of both
  variant?: "sm" | "md" | "lg";
};

export function DataBadgeGrid({ data, variant }: DataBadgeGridProps) {
  const gridVariant = variant ?? "sm";

  return (
    <div className={`data-badge-grid data-badge-grid-${gridVariant}`}>
      {data.map((item, index) => {
        if (typeof item === "object") {
          return <DataBadge name={item.name} Icon={item.Icon} key={index} />;
        } else if (typeof item === "string") {
          return <DataBadge name={item} key={index} />;
        }
      })}
    </div>
  );
}
