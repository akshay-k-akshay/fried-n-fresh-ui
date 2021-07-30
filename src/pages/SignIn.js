import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      {/* login  */}
      <div className="login">
        <div className="container">
          <h2>Sign In Form</h2>
          <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
            <form>
              <input type="email" placeholder="Email Address" required=" " />
              <input type="password" placeholder="Password" required=" " />
              <div className="forgot">
                <Link to="/">Forgot Password?</Link>
              </div>
              <input type="submit" value="Sign In" />
            </form>
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
