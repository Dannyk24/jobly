import { SectionInfo } from "../components/SectionInfo/SectionInfo";
import { SectionDisplayCardGrid } from "../components/SectionDisplayCardGrid/SectionDisplayCardGrid";
import { appFeatures } from "../../../constants/home/appFeatures";

export function FeaturesSection() {
  return (
    <div id="features-section" className="homepage-section">
      <SectionInfo
        tagline="why jobly"
        header="Built for people who value their time"
        description="Every detail is designed to get you to the right opportunity, faster."
      />
      <SectionDisplayCardGrid cardsData={appFeatures} cardType="information" />
    </div>
  );
}
