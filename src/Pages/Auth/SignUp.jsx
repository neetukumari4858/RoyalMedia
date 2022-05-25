import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="outer-Login-container">
      <div className="sign-outer-container">
        <form className="sign-content-container">
          <h4 className="sign_heading-four ">Sign Up</h4>
          <div className="signup-grid">
            <label className="lebel-text login-lable ">
              First Name
              <input
                className="grid-item"
                type="email"
                placeholder="  First Name"
              />
            </label>

            <label className="lebel-text login-lable ">
              Last Name
              <input
                className="grid-item"
                type="email"
                placeholder="  Last Name"
              />
            </label>
          </div>
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
          <label className="lebel-text">Confirm Password</label>
          <input
            className="user-input"
            placeholder="  Enter Confirm Password..."
            type="password"
          />

          <button type="button" className="videologin-btn signUp-width-heigth ">
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
