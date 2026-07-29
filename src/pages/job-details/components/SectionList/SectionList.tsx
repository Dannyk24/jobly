import { Dot } from "lucide-react";
import "./SectionList.css";

type SectionListProps = {
  data: string[];
};

export function SectionList({ data }: SectionListProps) {
  return (
    <div className="section-list-container">
      {data.map((listItem, index) => {
        return (
          <div className="section-list-item" key={index}>
            <Dot />
            <span>{listItem}</span>
          </div>
        );
      })}
    </div>
  );
}
