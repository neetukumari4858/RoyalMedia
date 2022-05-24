import "./Sidebar.css";
import { BsBookmarkFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Sidebar = ({ onOpen }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <NavLink className="sidebarItemsLink" to="/">
          <i className="fa fa-home"></i>Home
        </NavLink>
        <NavLink className="sidebarItemsLink" to="/explorePage">
          <i className="material-icons">explore</i>Explore
        </NavLink>
        <NavLink className="sidebarItemsLink" to="/bookmarkPage">
          <i className="fa">
            <BsBookmarkFill />
          </i>
          Bookmark
        </NavLink>
        <NavLink className="sidebarItemsLink" to="/profilePage">
          <i className="fa">
            <CgProfile />
          </i>
          Profile
        </NavLink>
        <button className="create-Post-btn"  onClick={onOpen}>
          Create New Post
        </button>
      </div>
    </div>
  );
};
export {Sidebar}
