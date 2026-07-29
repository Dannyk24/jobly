import { Dot } from "lucide-react";
import "./MetaDataRow.css";
import { Fragment } from "react/jsx-runtime";

type MetaDataRowProps = {
  items: string[];
};

export function MetaDataRow({ items }: MetaDataRowProps) {
  return (
    <div className="meta-data-row">
      {items.map((item, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <Dot className="decorative-dot" />}
            <span>{item}</span>
          </Fragment>
        );
      })}
    </div>
  );
}
