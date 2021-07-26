import React from "react";
import Header from "../components/Header";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="login">
        <div className="container">
          <h2>
            <b>404 </b>
            Page Not Found
          </h2>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
