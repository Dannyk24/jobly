import { SectionInfo } from "../components/SectionInfo/SectionInfo";
import { DataBadgeGrid } from "../../../components/ui/DataBadgeGrid/DataBadgeGrid";
import "./TrustedPublishersSection.css";
import { trustedPublishers } from "../../../constants/home/trustedPublishers";

export function TrustedPublishersSection() {
  return (
    <section id="trusted-publishers-section" className="homepage-section">
      <SectionInfo
        tagline="publishers"
        header="Trusted publishers"
        description="Dont want to apply on the companys site? apply through our most trusted job publishers"
      />
      <DataBadgeGrid data={trustedPublishers} variant="md" />
    </section>
  );
}
