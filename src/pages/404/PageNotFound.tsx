import { SearchX } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../../components/ui/Button/Button";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="app-page page-not-found">
      <div className="not-found-content">
        <div className="not-found-icon">
          <SearchX size={72} />
        </div>

        <span className="error-code">404</span>

        <h1>Page not found</h1>

        <p>
          Sorry, we couldn't find the page you're looking for. It may have been
          moved, deleted, or the URL might be incorrect.
        </p>

        <Link to="/search">
          <Button variant="primary" text="Explore Jobs" isRounded />
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
