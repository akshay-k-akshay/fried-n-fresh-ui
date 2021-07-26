import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      {/* register  */}
      <div className="register">
        <div className="container">
          <h2>SignUp Here</h2>
          <div className="login-form-grids">
            <h5>profile information</h5>
            <form action="#" method="post">
              <input type="text" placeholder="First Name..." required=" " />
              <input type="text" placeholder="Last Name..." required=" " />
            </form>
            <h6>Login information</h6>
            <form action="#" method="post">
              <input type="email" placeholder="Email Address" required=" " />
              <input type="password" placeholder="Password" required=" " />
              <input type="password" placeholder="Password Confirmation" required=" " />
              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              <input type="submit" value="SignUp" />
            </form>
            <br />
            <p>
              already have Account <Link to="/signin">SignIn</Link> (Or) go back to{" "}
              <Link to="/">Home</Link>
            </p>
          </div>
        </div>
      </div>
      {/* //register  */}
    </div>
  );
}

export default SignUp;
