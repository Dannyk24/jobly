import { PageSection } from "../components/PageSection/PageSection";
import { SectionList } from "../components/SectionList/SectionList";

export function JobQualificationsSection() {
  const jobQualifications = [
    "Bachelors degree in computer science",
    "3+ years work exprience of previous internship",
  ];
  return (
    <PageSection id="job-qualifications-section" title="Qualifications">
      <SectionList data={jobQualifications} />
    </PageSection>
  );
}
