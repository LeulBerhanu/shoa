import React from "react";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";

function PropertyLayout() {
  return (
    <div>
      <Header currentPage="Property" />
      <Outlet />
    </div>
  );
}

export default PropertyLayout;
