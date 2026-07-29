import { PageSection } from "../components/PageSection/PageSection";
import { SectionList } from "../components/SectionList/SectionList";

export function JobBenefitsSection() {
  const jobBenefits = [
    "Free vacation anytime",
    "Work from anywhere",
    "401k invetsment plus 3 year fidge guarantee",
  ];
  return (
    <PageSection id="job-benefits-section" title="Benefits">
      <SectionList data={jobBenefits} />
    </PageSection>
  );
}
