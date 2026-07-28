import { SectionInfo } from "../components/SectionInfo/SectionInfo";
import { DataBadgeGrid } from "../../../components/ui/DataBadgeGrid/DataBadgeGrid";
import "./PopularTechnologiesSection.css";
import { popularTechnologies } from "../../../constants/home/popularTechnologies";

export function PopularTechnologiesSection() {
  return (
    <div id="popularTechnologiesSection" className="homepage-section">
      <SectionInfo
        tagline="stack"
        header="Browse by technology"
        description="Filter roles by the tools and languages you already know well."
      />
      <DataBadgeGrid data={popularTechnologies} variant="md" />
    </div>
  );
}
