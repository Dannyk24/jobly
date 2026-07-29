import { PageSection } from "../components/PageSection/PageSection";
import { SectionList } from "../components/SectionList/SectionList";

export function JobResponsibilitiesSection() {
  const responsibilities = [
    "be punctual",
    "develop backend systmes with distinguished engineers",
  ];

  return (
    <PageSection id="job-responsibilities-section" title="Responsibilities">
      <SectionList data={responsibilities} />
    </PageSection>
  );
}
