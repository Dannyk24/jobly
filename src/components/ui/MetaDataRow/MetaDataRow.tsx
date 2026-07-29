import { Dot } from "lucide-react";
import "./MetaDataRow.css";

type MetaDataRowProps = {
  items: string[];
};

export function MetaDataRow({ items }: MetaDataRowProps) {
  return (
    <div className="meta-data-row">
      {items.map((item, index) => {
        return (
          <span key={index}>
            {index > 0 && <Dot className="decorative-dot" />}
            {item}
          </span>
        );
      })}
    </div>
  );
}
