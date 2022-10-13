import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

import "../styles/Navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <Sidebar onClick={showSidebar} />
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
