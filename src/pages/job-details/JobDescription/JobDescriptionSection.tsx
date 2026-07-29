import { PageSection } from "../components/PageSection/PageSection";
import "./JobDescriptionSection.css";

export function JobDescriptionSection() {
  return (
    <PageSection id="job-description-section" title="About the role">
      <div className="job-description">
        Linear is building the issue tracking tool of the future — fast,
        keyboard-first, and beautifully designed. We're looking for a Senior
        Frontend Engineer to help us push the boundaries of what a web
        application can feel like. You'll work closely with design and product
        to ship features used daily by thousands of engineering teams, with a
        strong bias toward performance, polish, and craft.
      </div>
    </PageSection>
  );
}
