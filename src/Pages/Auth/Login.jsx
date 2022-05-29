import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    checkPolicy: false,
  });
  const loginBtnHandler = async () => {
    const response = await axios.post("/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    console.log(response, "res");
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      const token = response.data.encodedToken;
      localStorage.setItem("token", token);
      setUserdetail({
        token: response.data.encodedToken,
        user: response.data.foundUser,
      });
      setLogedIn(true);
      navigate(location?.state?.from?.pathname ?? "/", { replace: true });
    }
  };

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
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />

          <label className="lebel-text">Password</label>
          <input
            className="user-input"
            placeholder="  Enter Password..."
            type="password"
            value={user.password}
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />
          <div className="login-grid">
            <button type="button" className="videologin-btn ">
              Guest Login
            </button>
            <button
              type="button"
              className="videologin-btn "
              onClick={() => loginBtnHandler()}
            >
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
