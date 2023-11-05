import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { verifyToken } from "../../../LoginProtected";

function AdminLayout() {
  const navigate = useNavigate();

  console.log(localStorage.getItem("token"));

  useEffect(() => {
    verifyToken().catch((err) => navigate("/login"));
  }, []);

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
