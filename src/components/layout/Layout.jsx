import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
