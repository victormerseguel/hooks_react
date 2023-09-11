import { NavLink } from "react-router-dom";

import "./Navbar.css";

const NavbarSettings = ({ title }) => {
  return (
    <span className="navbar-settings">
      <NavLink
        to={title === "Home" ? "/" : title.toLowerCase()}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {title}
      </NavLink>
    </span>
  );
};

export default NavbarSettings;
