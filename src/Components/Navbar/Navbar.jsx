import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
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
        <Link className="login-btn nav-link" to="loginPage">Login</Link>
      </div>
    </nav>
  );
}

export { Navbar };
