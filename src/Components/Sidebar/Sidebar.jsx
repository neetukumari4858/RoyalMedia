import "./Sidebar.css";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {MdExplore,MdLogout}  from "react-icons/md";

const Sidebar = ({ onOpen }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
       <div className="nav-section">
        <label className="logo">Royalmedia</label>
      </div>
     
        <Link className="sidebarItemsLink" to="/">
          <i className="fa fa-home"></i>Home
        </Link>
        <Link className="sidebarItemsLink" to="/explorePage">
          <i className="explore-icons"><MdExplore/></i>Explore
        </Link>
        <Link className="sidebarItemsLink" to="/bookmarkPage">
          <i className="fa">
            <BsBookmarkFill />
          </i>
          Bookmark
        </Link>
        <Link className="sidebarItemsLink" to="/profilePage">
          <i className="fa">
            <CgProfile />
          </i>
          Profile
        </Link>
        {/* <Link className="sidebarItemsLink" to="/loginPage">
          <i className="fa">
            <MdLogout/>
          </i>
          Logout
        </Link> */}
        <button className="create-Post-btn"  onClick={onOpen}>
          Create New Post
        </button>
      </div>
    </div>
  );
};
export {Sidebar}
