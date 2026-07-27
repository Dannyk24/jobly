import { Copyright } from "lucide-react";
import { Logo } from "../../ui/Logo/Logo";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <Logo className="footer-logo" />
      <div className="footer-links-container">
        <span className="footer-link">Publishers</span>
        <span className="footer-link">Technologies</span>
        <span className="footer-link">Search</span>
        <span className="footer-link">Scroll to top</span>
      </div>
      <div className="footer-line"></div>
      <div className="footer-data">
        <div className="left">
          <Copyright />
          <span className="current-year">2026</span>
          <span>Jobly, Inc. All rights reserved.</span>
        </div>
        <div className="right">
          <span>Made for people building what's next.</span>
        </div>
      </div>
    </footer>
  );
}
