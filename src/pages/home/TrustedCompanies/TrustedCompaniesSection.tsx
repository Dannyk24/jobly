import { trustedCompanies } from "../../../constants/home/trustedCompanies";
import "./TrustedCompaniesSection.css";

export function TrustedCompaniesSection() {
  return (
    <section id="trusted-companies-section" className="homepage-section">
      <h2>trusted by teams at</h2>
      <div className="trusted-companies-grid">
        {trustedCompanies.map((company, index) => (
          <span className="trusted-company" key={index}>
            {company}
          </span>
        ))}
      </div>
    </section>
  );
}
