import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/asyncThunks/authThunk";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputType, setinputType] = useState("password");
  const location = useLocation();
  const [loginuser, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginuser;
  const dispatch = useDispatch();

  const loginBtnHandler = async () => {
    if (username && password) {
      const response = await dispatch(login(loginuser));
      console.log(response, "from login");
      if (response?.payload?.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.payload.data.foundUser)
        );
        const token = response.payload.data.encodedToken;
        localStorage.setItem("token", token);
        navigate(location?.state?.from?.pathname || "/", { replace: true });
        toast.success("Login Successfull !");
      }
    } else {
      toast.error("Fill all the fields");
    }
  };

  return (
    <div className="outer-Login-container">
      <div className="login-outer-container">
        <form className="login-content-container">
          <h2 className="royal-heading-two">Royalmedia</h2>
          <h4 className="Login-heading-four ">Login</h4>
          <label className="lebel-text">Username</label>
          <input
            htmlFor="username"
            className="user-input"
            type="text"
            id="username"
            placeholder=" Enter Name "
            value={username}
            onChange={(event) =>
              setUser({ ...loginuser, username: event.target.value })
            }
          />

          <label htmlFor="passwordInput" className="lebel-text">
            Password
          </label>
          <input
            className="user-input"
            placeholder="  Enter Password..."
            type={inputType}
            id="passwordInput"
            value={password}
            onChange={(event) =>
              setUser({ ...loginuser, password: event.target.value })
            }
          />
          <div
            className="passwordIcon"
            onClick={() =>
              inputType === "text"
                ? setinputType("password")
                : setinputType("text")
            }
          >
            {inputType === "text" ? (
              <p>
                <AiFillEye />
              </p>
            ) : (
              <p>
                <AiFillEyeInvisible />
              </p>
            )}
          </div>

          <div className="login-grid">
            <button
              type="button"
              className="videologin-btn "
              onClick={() =>
                setUser({
                  ...loginuser,
                  username: "Neetu",
                  password: "neetu123",
                })
              }
            >
              Guest Login
            </button>
            <button
              type="button"
              className="videologin-btn "
              onClick={loginBtnHandler}
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
