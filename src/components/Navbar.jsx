import { NavLink } from "react-router-dom";
import NavbarSettings from "./NavbarSettings";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavbarSettings title="Home" />
      <NavbarSettings title="useState" />
      <NavbarSettings title="useReducer" />
      <NavbarSettings title="useEffect" />
      <NavbarSettings title="useContext" />
      <NavbarSettings title="useRef" />
      <NavbarSettings title="useCallback" />
      <NavbarSettings title="useMemo" />
      <NavbarSettings title="useLayoutEffect" />
      <NavbarSettings title="useImperativeHandle" />
    </div>
  );
};

export default Navbar;
