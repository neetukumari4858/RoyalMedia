import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="header">
      <div className="nav-section">
        <label className="logo">Royalmedia</label>
      </div>
      <div className="nav-section">
        <div className="outer-search-bar-div">
          <input
            type="text"
            className="search-bar"
            placeholder="   Search..."
          />
        </div>
        <button className="login-btn">Login</button>
        {/* <Link className="nav-link" to="loginPage">Login</Link> */}
      </div>
    </nav>
  );
}

export { Navbar };
