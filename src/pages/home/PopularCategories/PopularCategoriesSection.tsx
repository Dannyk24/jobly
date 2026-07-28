import { SectionDisplayCardGrid } from "../components/SectionDisplayCardGrid/SectionDisplayCardGrid";
import "./PopularCategoriesSection.css";
import { SectionInfo } from "../components/SectionInfo/SectionInfo";
import { popularJobCategories } from "../../../constants/home/popularJobCategories";

export function PopularCategoriesSection() {
  return (
    <section id="popular-categories-section" className="homepage-section">
      <SectionInfo
        tagline="explore"
        header="Browse by cateogry"
        description="Whatever you're great at, there's a team out there looking for exactly that."
      />
      <SectionDisplayCardGrid
        cardsData={popularJobCategories}
        cardType="default"
      />
    </section>
  );
}
