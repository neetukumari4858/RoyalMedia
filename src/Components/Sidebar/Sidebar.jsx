import "./Sidebar.css";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {MdExplore}  from "react-icons/md";

const Sidebar = ({ onOpen }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
      
       <div className="nav-section">
        <label className="logo">Royalmedia</label>
      </div>
        <Link className="sidebarItemsLink" to="/">
          <i className="fa fa-home sidebar__icon"></i>Home
        </Link>
        <Link className="sidebarItemsLink" to="/explorePage">
          <i className="explore-icons sidebar__icon"><MdExplore/></i>Explore
        </Link>
        <Link className="sidebarItemsLink" to="/bookmarkPage">
          <i className="fa sidebar__icon">
            <BsBookmarkFill />
          </i>
          Bookmark
        </Link>
        <Link className="sidebarItemsLink" to="/profilePage">
          <i className="fa sidebar__icon">
            <CgProfile />
          </i>
          Profile
        </Link>
        <button className="create-Post-btn"  onClick={onOpen}>
          Create New Post
        </button>
      </div>
    </div>
  );
};
export {Sidebar}
