import { SectionInfo } from "../components/SectionInfo/SectionInfo";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGlassdoor, SiIndeed, SiMonster, SiWellfound } from "react-icons/si";
import { DataBadge } from "../../../components/ui/DataBadge/DataBadge";
import "./TrustedPublishersSection.css";

export function TrustedPublishersSection() {
  const trustedPublishers = [
    {
      Icon: SlSocialLinkedin,
      name: "LinkedIn",
    },
    {
      Icon: SiIndeed,
      name: "Indeed",
    },
    {
      Icon: SiGlassdoor,
      name: "Glassdoor",
    },
    {
      Icon: SiMonster,
      name: "Monster",
    },
    {
      Icon: SiWellfound,
      name: "WellFound",
    },
    {
      name: "ZipRecruiters",
    },
    {
      name: "SimplyHired",
    },
    {
      name: "Dice",
    },
    {
      name: "RemoteOk",
    },
    {
      name: "Career Builder",
    },
  ];

  return (
    <section id="trusted-publishers-section" className="homepage-section">
      <SectionInfo
        tagline="publishers"
        header="Trusted publishers"
        description="Dont want to apply on the companys site? apply through our most trusted job publishers"
      />
      <div className="trusted-publishers-container data-badge-grid">
        {trustedPublishers.map((publisher, index) => (
          <DataBadge item={publisher.name} key={index} Icon={publisher?.Icon} />
        ))}
      </div>
    </section>
  );
}
