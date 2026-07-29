import type { ReactNode } from "react";
import "./PageSection.css";

type PageSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function PageSection({ id, title, children }: PageSectionProps) {
  return (
    <section className="job-details-page-section" id={id}>
      <span className="section-header">{title}</span>
      <div className="section-body">{children}</div>
    </section>
  );
}
