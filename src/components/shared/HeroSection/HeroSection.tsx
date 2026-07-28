import { DataBadgeGrid } from "../../ui/DataBadgeGrid/DataBadgeGrid";
import "./HeroSection.css";

export function HeroSection() {
  const popularSearches = [
    "react",
    "frontend",
    "backend",
    "typescript",
    "remote",
    "internships",
    "python",
    "node.js",
    "UI/UX",
    "next.js",
  ];

  return (
    <section id="hero-section" className="homepage-section">
      <h1>
        Find your next <span>oppurtunity</span>
      </h1>
      <p>
        Discover roles from thousands of companies worldwide from fast-growing
        startups to global teams building what's next.
      </p>
      <div className="main-search-input-container">
        <input type="search" placeholder="Job title, keyword, or company" />
        <button className="cta alternate-cta search-jobs-cta">
          search jobs
        </button>
      </div>
      <DataBadgeGrid data={popularSearches} />
    </section>
  );
}
