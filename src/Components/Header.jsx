import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdPhone } from "react-icons/md";
import { PiFlowerLotusThin } from "react-icons/pi";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive, isPending }) => (isActive ? "text-orange-600" : isPending ? "text-gray-50" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive, isPending }) => (isActive ? "text-orange-600" : isPending ? "text-gray-50" : "")}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/resume" className={({ isActive, isPending }) => (isActive ? "text-orange-600" : isPending ? "text-gray-50" : "")}>
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className={({ isActive, isPending }) => (isActive ? "text-orange-600" : isPending ? "text-gray-50" : "")}>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive, isPending }) => (isActive ? "text-orange-600" : isPending ? "text-gray-50" : "")}>
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center  text-gray-50 py-0 px-6 lg:px-20">
      <div className="">
        <Link className="text-4xl font-bold  text-right lg:text-right flex items-center gap-1">
          <PiFlowerLotusThin className="rounded-full p-0 text-orange-600 border-2 border-orange-600 text-4xl " />
          <span className="text-orange-600">A</span>min
        </Link>
      </div>

      <div className="hidden lg:flex items-center text-xl ">
        <ul className="menu menu-horizontal px-1 text-base">{links}</ul>
        <div class="h-5 w-px bg-gray-300 mx-4"></div>
        <div className="text-base flex items-center gap-3">
          <MdPhone />
          <h2 className="text-orange-600">+880 1869-309950</h2>
        </div>
      </div>

      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-900 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Header;
