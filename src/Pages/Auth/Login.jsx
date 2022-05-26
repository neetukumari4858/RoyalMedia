import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="outer-Login-container">
      <div className="login-outer-container">
        <form className="login-content-container">
          <h2 className="royal-heading-two">Royalmedia</h2>
          <h4 className="Login-heading-four ">Login</h4>
          <label className="lebel-text">Email address</label>
          <input
            className="user-input"
            type="email"
            placeholder="  demo@gmail.com "
          />

          <label className="lebel-text">Password</label>
          <input
            className="user-input"
            placeholder="  Enter Password..."
            type="password"
          />
          <div className="login-grid">
            <button type="button" className="videologin-btn ">
              Guest Login
            </button>
            <button type="button" className="videologin-btn ">
              Login
            </button>
          </div>

          <h4 className="create-account">
            <Link to="/SignUpPage" className="createAccount">
              Create New Account
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};
export { Login };
