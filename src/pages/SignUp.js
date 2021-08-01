import React, { useState } from "react";
import { Link } from "react-router-dom";

import { authApi } from "../Apis";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function submit(e) {
    e.preventDefault();
    authApi.signUp({ email, password, firstName, lastName, phone }).then(() => {
      props.history.push("/");
    });
  }

  return (
    <div>
      {/* register  */}
      <div className="register">
        <div className="container">
          <h2>SignUp Here</h2>
          <div className="login-form-grids">
            <h5>profile information</h5>
            <form>
              <input
                type="text"
                placeholder="First Name..."
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required=" "
              />
              <input
                type="text"
                placeholder="Last Name..."
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required=" "
              />
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
                type="number"
                placeholder="phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
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
            <input onClick={submit} type="button" value="SignUp" />
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
