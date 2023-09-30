import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/layout/Layout";
// Pages
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
