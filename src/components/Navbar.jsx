import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <span>
          <NavLink
            to="/usestate"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            useState
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/usereducer"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            useReducer
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/useeffect"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            useEffect
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/usecontext"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            useContext
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
