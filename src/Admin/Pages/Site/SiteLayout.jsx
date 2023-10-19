import React from "react";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";

function SiteLayout() {
  return (
    <div>
      <Header currentPage="Site" />
      <Outlet />
    </div>
  );
}

export default SiteLayout;
