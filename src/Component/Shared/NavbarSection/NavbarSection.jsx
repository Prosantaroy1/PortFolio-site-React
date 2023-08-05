import React from "react";
import { Link } from "react-router-dom";

const NavbarSection = () => {
  const navitem = (
    <>
      <li className="lg:text-xl hover:bg-[#5356e7] px-4 py-2 rounded-xl">
        <Link to='/skill'>Skills</Link>
      </li>
      <li className="lg:text-xl hover:bg-[#6365e7] px-4 py-2 rounded-xl">
        <Link to='/work'>Work experiences</Link>
      </li>
      <li className="lg:text-xl hover:bg-[#5e60df] px-4 py-2 rounded-xl">
        <Link to='/opensource'>Open Source</Link>
      </li>
      <li className="lg:text-xl hover:bg-[#5b5dd4] px-4 py-2 rounded-xl">
        <Link to='/contact'>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="w-full">
      <div className="navbar flex lg:flex-row justify-between px-6 text-white">
        <div className="flex">
          <Link to="/">
            <h4 className="text-2xl text-[#f3f3f7] font-sans font-semibold">Dev.Prosanta Roy</h4>
          </Link>
        </div>
        <div>
          <div className=" hidden lg:flex">
            <ul className=" flex gap-10  px-1">
              {navitem}
            </ul>
          </div>
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <h3>View</h3>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-1 space-y-4 text-center rounded-xl shadow bg-base-100 "
            >
              {navitem}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
