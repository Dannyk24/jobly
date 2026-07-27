import {
  SiAngular,
  SiDocker,
  SiGo,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { SectionInfo } from "../components/SectionInfo/SectionInfo";
import { FaAws, FaJava } from "react-icons/fa";
import { DataBadge } from "../../../components/ui/DataBadge/DataBadge";
import "./PopularTechnologiesSection.css";

export function PopularTechnologiesSection() {
  const popularTechnologies = [
    {
      Icon: SiReact,
      name: "React",
    },
    {
      Icon: SiTypescript,
      name: "TypeScript",
    },
    {
      Icon: SiJavascript,
      name: "JavaScript",
    },
    {
      Icon: SiNodedotjs,
      name: "Node.js",
    },
    {
      Icon: SiPython,
      name: "Python",
    },
    {
      Icon: FaJava,
      name: "Java",
    },
    {
      Icon: SiGo,
      name: "Go",
    },
    {
      Icon: SiDocker,
      name: "Docker",
    },
    {
      Icon: FaAws,
      name: "Aws",
    },
    {
      Icon: SiNextdotjs,
      name: "Next.js",
    },
    {
      Icon: SiAngular,
      name: "Angular",
    },
    {
      Icon: SiVuedotjs,
      name: "Vue",
    },
  ];

  return (
    <div id="popularTechnologiesSection" className="homepage-section">
      <SectionInfo
        tagline="stack"
        header="Browse by technology"
        description="Filter roles by the tools and languages you already know well."
      />
      <div className="popular-technologies-container data-badge-grid">
        {popularTechnologies.map((technology, index) => (
          <DataBadge
            item={technology.name}
            Icon={technology.Icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
