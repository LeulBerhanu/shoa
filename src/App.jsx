import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/layout/Layout";
// Pages
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import PartnershipDevtPage from "./pages/Partnership&Dev'tPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import BlogPageNews from "./pages/BlogPageNews";
import Dashboard from "./Admin/Pages/Dashboard";
import AdminLayout from "./Admin/Components/Layout/AdminLayout";
import Site from "./Admin/Pages/Site";
import AddSite from "./Admin/Pages/Site/AddSite";
import SiteLayout from "./Admin/Pages/Site/SiteLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<BlogPageNews />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
        <Route
          path="partnership-and-development"
          element={<PartnershipDevtPage />}
        />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="site" element={<SiteLayout />}>
          <Route index element={<Site />} />
          <Route path="add-site" element={<AddSite />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
