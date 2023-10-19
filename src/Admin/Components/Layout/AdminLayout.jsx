import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function AdminLayout() {
  return (
    <div className="flex container mx-auto min-h-screen bg-black/5 ">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
