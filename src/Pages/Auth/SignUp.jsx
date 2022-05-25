import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="outer-Login-container">
      <div className="login-outer-container">
        <form className="login-content-container">
          <div className="login-content-container">
            {/* <h2 className="royal-heading-two">Royalmedia</h2> */}
            <h4 className="Login-heading-foue ">Sign Up</h4>
            <div className="signup-grid" >
           
            <label className="lebel-text login-lable ">First Name <input
                className="grid-item"
                type="email"
                placeholder="  First Name"
              /></label>
              
              <label className="lebel-text login-lable "> Last Name <input
                className="grid-item"
                type="email"
                placeholder="  Last Name"
              /></label>
              
            </div>
            {/* <input
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

            <button
              type="button"
              className="videologin-btn signUp-width-heigth "
            >
              SignUp
            </button>

            <h4 className="create-account">
              <Link to="/SignUpPage" className="createAccount">
                Create New Account
              </Link>
            </h4> */}
          </div>
        </form>
      </div>
      {/* <div className="signup-container">
                <div className="login-content">
                 
                    <label className='signUp-lebel'>First Name</label>
                    <input type= "text" className="sign-input" placeholder="Enter your Name"/>

                    <label className='signUp-lebel'>Last Name</label>
                    <input type= "text" className="sign-input" placeholder="Enter your Last Name"/>

                    <label className='signUp-lebel'>Email address</label>
                    <input type= "text" className="sign-input" placeholder="annu@neog.com"/>

                    <label className='signUp-lebel'>Password</label>
                    <input type= "text" className="sign-input" placeholder="..................."/>

                    <label className='signUp-lebel'>Confirm Password</label>
                    <input type= "text" className="sign-input" placeholder="..................."/><br/>
                    <div className='termsandConditions-div'>
                        <input type="checkbox" id='termsAndCondition'/> 
                        <label htmlFor="termsAndCondition" className='terms-and-condition'>I accept all Terms & Conditions</label>
                    </div>
                    
                    <button className="sign-btn">Sign up</button>
                    <h4 className='alreadyHaveAccount' > Already have an account? <Link to="/LoginPage" className='login-here'> Login Here</Link></h4>
                </div>
            </div> */}
    </div>
  );
};
export { SignUp };
