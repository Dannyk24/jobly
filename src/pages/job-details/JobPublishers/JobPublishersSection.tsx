import { PageSection } from "../components/PageSection/PageSection";
import { SectionList } from "../components/SectionList/SectionList";

export function JobPublishersSection() {
  const otherPublishers = ["linkedIN", "Glassdoor"];
  return (
    <PageSection id="other-publishers-section" title="Other publishers">
      <SectionList data={otherPublishers} />
    </PageSection>
  );
}
