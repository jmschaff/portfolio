import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/Constants";
function NotFoundPage() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        <Link to={BASE_URL}>Back to Home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
