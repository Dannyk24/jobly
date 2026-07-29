import { PageSection } from "../components/PageSection/PageSection";
import { SectionList } from "../components/SectionList/SectionList";

export function JobMethodologiesSection() {
  const jobMethodologies = ["be on time", "Agile and scrum"];
  return (
    <PageSection id="job-methodologies-section" title="Methodologies">
      <SectionList data={jobMethodologies} />
    </PageSection>
  );
}
