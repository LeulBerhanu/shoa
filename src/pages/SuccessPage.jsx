import React from "react";
import { Link } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Success</h1>
      <Link to=".."></Link>
    </div>
  );
}

export default SuccessPage;
