import { DataBadge } from "../../ui/DataBadge/DataBadge";
import "./HeroSection.css";

export function HeroSection() {
  const popularSearches = [
    { id: 1, item: "react" },
    { id: 2, item: "frontend" },
    { id: 3, item: "backend" },
    { id: 4, item: "typescript" },
    { id: 5, item: "remote" },
    { id: 6, item: "internships" },
    { id: 7, item: "python" },
    { id: 8, item: "node.js" },
    { id: 9, item: "UI/UX" },
    { id: 10, item: "next.js" },
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
      <div className="popular-searches-container data-badge-grid">
        {popularSearches.map((search) => (
          <DataBadge item={search.item} key={search.id} />
        ))}
      </div>
    </section>
  );
}
