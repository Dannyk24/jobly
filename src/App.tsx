import { Routes, Route } from "react-router";

import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import SavedJobsPage from "./pages/saved-jobs/SavedJobsPage";
import JobDetailsPage from "./pages/job-details/JobDetailsPage";
import PageNotFound from "./pages/404/PageNotFound";

import { AppLayout, MainLayout } from "./layouts";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/saved-jobs" element={<SavedJobsPage />} />
          <Route path="/job-details/:jobId" element={<JobDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
