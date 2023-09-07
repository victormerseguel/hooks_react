import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
