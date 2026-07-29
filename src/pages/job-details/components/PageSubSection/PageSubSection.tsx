import type { ReactNode } from "react";
import "./PageSubSection.css";

type PageSubSection = {
  title: string;
  children: ReactNode;
};

export function PageSubSection({ title, children }: PageSubSection) {
  return (
    <div className="page-sub-section">
      <span className="sub-section-title">{title}</span>
      {children}
    </div>
  );
}
