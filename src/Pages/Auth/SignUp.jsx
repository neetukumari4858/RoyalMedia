import "./SignUp.css";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signup } from "../../redux/asyncThunks/index";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const SignUp = () => {
  const [inputType, setinputType] = useState("password");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    lastName: "",
  });
  const signUpHandler = async () => {
    if (
      !newUser.email ||
      !newUser.password ||
      !newUser.confirmPassword ||
      !newUser.username ||
      !newUser.lastName
    ) {
      toast.error("Fill all the fields");
      return;
    }
    if (newUser.confirmPassword !== newUser.password) {
      toast.error("The passwords entered do not match");
    } else {
      const response = await dispatch(signup(newUser));

      if (response?.payload?.status === 201) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.payload.data.createdUser)
        );
        const token = response.payload.data.encodedToken;
        localStorage.setItem("token", token);
        navigate(location?.state?.from?.pathname || "/", { replace: true });
        toast.success(
          "Congratulation, your account has been successfully created."
        );
      } else {
        toast.error("Signup Failed!");
      }
    }
  };
  return (
    <div className="outer-Login-container">
      <div className="sign-outer-container">
        <form className="sign-content-container">
          <h4 className="sign_heading-four ">Sign Up</h4>
          <div className="signup-grid">
            <label className="lebel-text login-lable ">
              First Name
              <input
                className="grid-item signup_user-input"
                type="text"
                placeholder="  First Name"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
              />
            </label>

            <label className="lebel-text login-lable ">
              Last Name
              <input
                className="grid-item signup_user-input"
                type="text"
                placeholder="  Last Name"
                value={newUser.lastName}
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
              />
            </label>
          </div>
          <label className="lebel-text">Email address</label>
          <input
            className="user-input spacing"
            type="email"
            placeholder="  neetu@gmail.com "
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />

          <label className="lebel-text">Password</label>
          <input
            className="user-input spacing"
            placeholder="  Enter Password..."
            type={inputType}
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
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
          <label className="lebel-text">Confirm Password</label>
          <input
            className="user-input spacing"
            placeholder="  Enter Confirm Password..."
            type="text"
            value={newUser.confirmPassword}
            onChange={(e) =>
              setNewUser({ ...newUser, confirmPassword: e.target.value })
            }
          />

          <button
            type="button"
            className="videologin-btn signUp-width-heigth"
            onClick={signUpHandler}
          >
            SignUp
          </button>

          <h4 className="alreadyHaveAccount">
            Already have an account?
            <Link to="/LoginPage" className="login-here">
              Login Here
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};
export { SignUp };
