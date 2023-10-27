import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";

function LoginProtected() {
  const navigate = useNavigate();

  console.log(localStorage.getItem("token"));
  //   <Navigate to="/admin" replace={true} />;

  useEffect(() => {
    verifyToken()
      .then(() => navigate("/admin"))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LoginProtected;

export const verifyToken = async () => {
  let token = localStorage.getItem("token");
  const res = await axios.get(`${import.meta.env.VITE_API}/api/auth/verify`, {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  console.log("response", res);
};
