import React, { useEffect, useState } from "react";
import "./Login.css";

import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // Register
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const loginHandle = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      setError(errorMessage);
    });
  };

  const SignupHandle = () => {
    auth
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="login__wrap ">
      <div className="login__header ">
        <div className="login__brand  d-md-block d-none">
          <h2 className="login__brand_text">Facebook</h2>
        </div>
        <div className="login__form ">
          <input
            type="text"
            placeholder="Email Address"
            className="login__form_login"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="login__form_password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="submit"
            className="login__form_submit"
            onClick={() => loginHandle()}
          />
        </div>
      </div>

      <div className="login__main">
        <div className="login__main_img d-md-flex d-none">
          <img
            src="\assets\images\network.png"
            alt=""
            className="login__main_img_wrap"
          />
        </div>
        <div className="login__register_form">
          <div>
            <h2 className="login__register_form_h2">Create an account</h2>
            <h5>It's free & always will be</h5>

            <input
              type="text"
              placeholder="Mobile number or email address"
              className="login__email"
              onChange={(e) => setSignupEmail(e.target.value)}
              value={signupEmail}
            />
            <input
              type="password"
              placeholder="New password"
              className="login__password"
              onChange={(e) => setSignupPassword(e.target.value)}
              value={signupPassword}
            />
            {error && (
              <div className="error text-danger">
                <p>{error}</p>
              </div>
            )}

            <input
              type="submit"
              value="Signup"
              className="login__submit"
              onClick={() => SignupHandle()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
