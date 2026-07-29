import { BackButton } from "../../components/ui/BackButton/BackButton";
import "./JobDetailsPage.css";
import { JobDescriptionSection } from "./JobDescription/JobDescriptionSection";
import { JobResponsibilitiesSection } from "./JobResponsibilities/JobResponsibilitiesSection";
import { JobQualificationsSection } from "./JobQualifications/JobQuaificationsSection";
import { JobBenefitsSection } from "./JobBenefits/JobBenefitsSection";
import { JobSkillsSection } from "./JobSkills/JobSkillsSection";
import { JobMethodologiesSection } from "./JobMethodologies/JobMethodologiesSection";
import { JobSoftSkillsSection } from "./JobSoftSkills/JobSoftSkillsSection";
import { JobDetailsHeader } from "./JobDetailsHeader/JobDetailsHeader";
import { JobPublishersSection } from "./JobPublishers/JobPublishersSection";

function JobDetailsPage() {
  return (
    <div className="app-page job-details-page">
      <BackButton />
      <JobDetailsHeader />
      <main>
        <JobPublishersSection />
        <JobDescriptionSection />
        <JobQualificationsSection />
        <JobResponsibilitiesSection />
        <JobBenefitsSection />
        <JobSkillsSection />
        <JobMethodologiesSection />
        <JobSoftSkillsSection />
      </main>
    </div>
  );
}

export default JobDetailsPage;
