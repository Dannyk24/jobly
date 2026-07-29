import { PageSection } from "../components/PageSection/PageSection";
import { SectionList } from "../components/SectionList/SectionList";

export function JobSoftSkillsSection() {
  const jobSoftSkills = [
    "Good communication",
    "Respect for company principles ",
  ];
  return (
    <PageSection id="job-soft-skills-section" title="Soft skills">
      <SectionList data={jobSoftSkills} />
    </PageSection>
  );
}
