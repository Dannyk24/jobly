import { Button } from "../../ui/Button/Button";
import { DataBadgeGrid } from "../../ui/DataBadgeGrid/DataBadgeGrid";
import { popularSearches } from "../../../constants/home/popularSearches";
import "./HeroSection.css";
import { useJobSearch } from "../../../hooks/useJobSearch";

export function HeroSection() {
  const { inputText, setInputText, search, handleKeyDown } = useJobSearch();

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
        <input
          type="search"
          placeholder="Job title, keyword, or company"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
        <Button
          variant="alternate"
          text="search jobs"
          isRounded
          width="100%"
          onClick={() => {
            search(inputText);
          }}
        />
      </div>
      <DataBadgeGrid data={popularSearches} />
    </section>
  );
}
