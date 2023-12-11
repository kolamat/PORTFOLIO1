import React, { useState } from "react";
// import { LINK } from "react-dom/client";
// import { LINK } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-auto">
      <div className="fixed flex top-0 left-0 bg-slate-900 justify-between items-center h-24 text-white mx-auto px-9 w-full">
        <h1 className="w-full text-4xl font-bold text-[#00df9a]">Portfolio</h1>
        <nav className="hidden md:flex font-bold text-xl">
          <LINK to="/">
            <li className="p-4">Home</li>
          </LINK>
          <LINK to="/About">
            <li className="p-4">About</li>
          </LINK>
          <LINK to="/Services">
            <li className="p-4">Services</li>
          </LINK>
          <LINK to="/Portfolio">
            <li className="p-4">Portfolio</li>
          </LINK>
          <LINK to="/Contact">
            <li className="p-4">Contact</li>
          </LINK>
        </nav>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {!nav ? <CiMenuKebab size={23} /> : <IoClose size={23} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl p-3 font-bold text-[#00df9a]">
            Portfolio
          </h1>

          <ul className="pt-4 uppercase font-bold">
            <LINK to="/">
              <li className="p-4 border-b border-gray-600">Home</li>
            </LINK>
            <LINK to="/About">
              <li className="p-4 border-b border-gray-600">About</li>
            </LINK>
            <LINK to="/Services">
              <li className="p-4 border-b border-gray-600">Services</li>
            </LINK>
            <LINK to="/Portfolio">
              <li className="p-4 border-b border-gray-600">Portfolio</li>
            </LINK>
            <LINK to="/Contact">
              <li className="p-4">Contact</li>
            </LINK>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
