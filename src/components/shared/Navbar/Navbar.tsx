import { Bookmark, Menu, Moon, Search, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { Logo } from "../../ui/Logo/Logo";
import { Sidebar } from "./Sidebar/Sidebar";
import { useJobSearch } from "../../../hooks/useJobSearch";

function Navbar() {
  const { inputText, setInputText, search, handleKeyDown } = useJobSearch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("jobly-theme") ?? "dark"; //Default to dark if user has no saved theme
  });

  useEffect(() => {
    localStorage.setItem("jobly-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header>
      <div className="header-left">
        <div
          className="header-icon"
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <Menu />
        </div>
        <Logo className="header-logo" />
      </div>
      <div className="header-right">
        <div className="header-search-bar-container">
          <Search />
          <input
            type="search"
            placeholder="Search jobs from around the globe......"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
          <button
            className="cta primary-cta header-search-cta"
            onClick={search}
          >
            Search
          </button>
        </div>
        <div className="header-icons">
          <div
            className="header-icon"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </div>
          <div className="header-icon">
            <Bookmark />
          </div>
        </div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div
        className={isSidebarOpen ? "overlay overlay-active" : "overlay"}
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      ></div>
    </header>
  );
}

export default Navbar;
