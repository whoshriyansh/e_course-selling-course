import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen h-16 flex items-center justify-between px-4 bg-primary_black text-gray-400 text-sm">
      <div className="flex items-center gap-5">
        <img src="" alt="" />
        <div className="border"></div>
        <div className="border"></div>
      </div>
      <div className="flex items-center gap-5">
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <button>Create Account</button>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Header;
