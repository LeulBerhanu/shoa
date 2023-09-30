import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/layout/Layout";
// Pages
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import PartnershipDevtPage from "./pages/Partnership&Dev'tPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route
          path="partnership-and-development"
          element={<PartnershipDevtPage />}
        />
        <Route path="about-us" element={<AboutUsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
