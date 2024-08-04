import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-16 flex items-center justify-between px-4 bg-primary_black text-gray-400 text-sm">
      <div className="flex items-center gap-3">
        <NavLink
          to="/messages"
          className={({ isActive }) => `${isActive ? "" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) => `${isActive ? "" : ""}`}
        >
          Cources
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) => `${isActive ? "" : ""}`}
        >
          About
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) => `${isActive ? "" : ""}`}
        >
          Contact
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) => `${isActive ? "" : ""}`}
        >
          Become a Instructor
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        <h1>USD</h1>
        <h1>English</h1>
      </div>
    </div>
  );
};

export default Navbar;
