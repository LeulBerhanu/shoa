import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/layout/Layout";
// Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
