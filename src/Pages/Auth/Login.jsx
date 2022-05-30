import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../../redux/asyncThunks/authThunk";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const loginBtnHandler = async (e) => {
    if (user.username && user.password) {
      const response = await dispatch(login(user));
      if (response?.payload.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.payload.data.foundUser)
        );
        const token = response.payload.data.encodedToken;
        localStorage.setItem("token", token);
        navigate(location?.state?.from?.pathname ?? "/", { replace: true });
      }
    } else {
      console.log("fill all fields");
    }
  };

  return (
    <div className="outer-Login-container">
      <div className="login-outer-container">
        <form className="login-content-container">
          <h2 className="royal-heading-two">Royalmedia</h2>
          <h4 className="Login-heading-four ">Login</h4>
          <label className="lebel-text">username address</label>
          <input
            htmlFor="username"
            className="user-input"
            type="text"
            id="username"
            placeholder=" Enter Name "
            value={user.username}
            // onChange={(event) =>
            //   setUser({ ...user, username: event.target.value })
            // }
          />

          <label htmlFor="passwordInput" className="lebel-text">
            Password
          </label>
          <input
            className="user-input"
            placeholder="  Enter Password..."
            type="password"
            id="passwordInput"
            value={user.password}
            // onChange={(event) =>
            //   setUser({ ...user, password: event.target.value })
            // }
          />
          <div className="login-grid">
            <button type="button" className="videologin-btn ">
              Guest Login
            </button>
            <button
              type="button"
              className="videologin-btn "
              onClick={(e) => loginBtnHandler(e)}
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
