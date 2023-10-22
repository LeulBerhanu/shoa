import React from "react";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div>
      <Header currentPage="Blog" />
      <Outlet />
    </div>
  );
}

export default BlogLayout;
