import { useSearchParams } from "react-router";
import { HeroSection } from "../../components/shared/HeroSection/HeroSection";
import * as jobFilters from "../../constants/search/filters";
import "./SearchPage.css";
import { JobCardGrid } from "../../components/shared/JobCardGrid/JobCardGrid";
import { Select } from "../../components/ui/Select/Select";
import { BackButton } from "../../components/ui/BackButton/BackButton";

function SearchPage() {
  const jobFiltersArray = Object.values(jobFilters);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div className="app-page search-page">
      {!query && <HeroSection />}
      {query && (
        <div className="search-results-shell">
          <BackButton />
          <p className="search-results-header">
            Search: <span>{query}</span>
          </p>
          <div className="search-results-actions-container">
            <div className="search-filters-container">
              {jobFiltersArray.map((filter, index) => {
                return (
                  <Select
                    TriggerIcon={filter.TriggerIcon}
                    placeholder={filter.placeholder}
                    options={filter.options}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="search-results-container">
            <JobCardGrid />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
