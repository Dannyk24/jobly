import { DataBadgeGrid } from "../../../components/ui/DataBadgeGrid/DataBadgeGrid";
import { PageSection } from "../components/PageSection/PageSection";
import { PageSubSection } from "../components/PageSubSection/PageSubSection";
import "./JobSkillsSection.css";

export function JobSkillsSection() {
  return (
    <PageSection title="Skills" id="job-skills-section">
      <PageSubSection title="Required">
        <DataBadgeGrid data={["react", "typescript", "graphql"]} />
      </PageSubSection>

      <PageSubSection title="Nice to have">
        <DataBadgeGrid data={["Git", "LangChain", "RAG"]} />
      </PageSubSection>
    </PageSection>
  );
}
