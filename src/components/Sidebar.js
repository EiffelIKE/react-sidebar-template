import React from "react";
import { SidebarData } from "../data/SidebarData";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const Sidebar = ({ onClick }) => {
  return (
    <>
      <ul className="nav-menu-items" onClick={onClick}>
        <li className="navbar-toogle">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.classN}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
