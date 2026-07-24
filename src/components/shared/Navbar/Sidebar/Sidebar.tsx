import { Bookmark, Home, Search, X } from "lucide-react";
import { Logo } from "../../../ui/logo/Logo";
import { NavLink } from "react-router";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (prev: boolean) => void;
};

export function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  return (
    <aside className={isSidebarOpen ? "sidebar sidebar-active" : "sidebar"}>
      <div
        className="sidebar-close-button"
        onClick={() => setIsSidebarOpen(false)}
      >
        <X />
      </div>
      <Logo className="sidebar-logo" />
      <div className="nav-items">
        <NavLink
          to="/"
          className="nav-item"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        >
          <Home />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/search"
          className="nav-item"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        >
          <Search />
          <span>Search</span>
        </NavLink>
        <NavLink
          to="/saved-jobs"
          className="nav-item"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        >
          <Bookmark />
          <span>Saved Jobs</span>
        </NavLink>
      </div>
    </aside>
  );
}
