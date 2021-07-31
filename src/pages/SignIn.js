import React, { useState } from "react";
import { Link } from "react-router-dom";

import { authApi } from "../Apis";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const response = await authApi.signIn(email, password);
    console.log(response);
  }
  return (
    <div>
      {/* login  */}
      <div className="login">
        <div className="container">
          <h2>Sign In Form</h2>
          <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
            <form>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required=" "
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required=" "
              />
            </form>
            <input onClick={submit} type="button" value="Sign In" />
            <div className="forgot">
              <Link to="/">Forgot Password?</Link>
            </div>
          </div>
          <h4>For New People</h4>
          <p>
            <Link to="/signup">Register Here</Link> (Or) go back to <Link to="/">Home</Link>
          </p>
        </div>
      </div>
      {/* //login */}
    </div>
  );
}

export default SignIn;
