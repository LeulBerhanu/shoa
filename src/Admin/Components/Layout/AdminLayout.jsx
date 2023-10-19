import React from "react";
import Dashboard from "../../Pages/Dashboard";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function AdminLayout() {
  return (
    <div className="flex container mx-auto bg-black/5 h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex-1 ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
