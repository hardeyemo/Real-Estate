import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/home-01.png';
import img2 from '../assets/search-01.png';
import img3 from '../assets/ai-magic.png';
import img4 from '../assets/check-list.png';
import logo from "../assets/Frame 4.png";
import user from "../assets/user.png";
import icon from "../assets/tabler-icon-chevron-down.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Toggle menu for mobile

  function toggleDrop() {
    setOpen(!open);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 w-full bg-[#ebeced]">
      {/* Mobile View: Flex container for Logo and Hamburger Toggle */}
      <div className="flex justify-between w-full items-center md:hidden">
        <Link to="/Dashboard" className="mb-4 md:mb-0">
          <img className="cursor-pointer" src={logo} alt="BUXA Logo" />
        </Link>
        {/* Mobile Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="text-2xl text-[#0EA5E9]">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Nav Items */}
      <div className="hidden md:flex items-center gap-[50px] bg-[#F8FAFC] px-5 py-3 rounded-3xl">
        <Link to="/" className="flex flex-col items-center cursor-pointer">
          <img src={img1} alt="Home" />
          Home
        </Link>
        <Link to="/Search" className="flex flex-col items-center cursor-pointer">
          <img src={img2} alt="Search" />
          Search
        </Link>
        <Link to="/Categ" className="flex flex-col items-center cursor-pointer">
          <img src={img3} alt="Categories" />
          Categories
        </Link>
        <Link to="/March" className="flex flex-col items-center cursor-pointer">
          <img src={img4} alt="Match" />
          Match
        </Link>
      </div>

      {/* User Profile & Dropdown for Desktop */}
      <div className="hidden md:flex items-center gap-5">
        <div className="flex items-center gap-4 border-[#d7e0e9] px-2 py-1 border-2 rounded-3xl">
          <Link to="/Register">
            <img className="bg-[#F8FAFC] cursor-pointer p-3 rounded-3xl" src={user} alt="User Icon" />
          </Link>
          {/* Dropdown for Profile Settings */}
          <div className="relative">
            <img
              className="cursor-pointer w-7 h-7"
              src={icon}
              alt="Toggle Dropdown"
              onClick={toggleDrop}
              aria-expanded={open}
            />
            <div
              className={`absolute right-0 mt-3 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-20 transition-all ${open ? 'block' : 'hidden'
                }`}
            >
              <ul className="list-none p-3">
                <Link to='/Profile' className='p-3 hover:bg-gray-100 rounded-t-lg cursor-pointer'>Profile</Link>
                <Link to='/Register' className='p-3 hover:bg-gray-100 rounded-t-lg cursor-pointer'>Logout</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`${menuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-0 left-0 right-0 bg-[#F8FAFC] p-6 rounded-b-2xl mt-16 z-20`}
      >
        <div className="flex flex-col items-center gap-2">
          <Link to="/" onClick={toggleMenu} className="text-lg font-semibold hover:bg-gray-100 rounded px-3 py-2 transition">
            Home
          </Link>
          <Link to="/Search" onClick={toggleMenu} className="text-lg font-semibold hover:bg-gray-100 rounded px-3 py-2 transition">
            Search
          </Link>
          <Link to="/Categ" onClick={toggleMenu} className="text-lg font-semibold hover:bg-gray-100 rounded px-3 py-2 transition">
            Categories
          </Link>
          <Link to="/March" onClick={toggleMenu} className="text-lg font-semibold hover:bg-gray-100 rounded px-3 py-2 transition">
            Match
          </Link>
          <hr className="w-full border-t border-gray-300 my-2" />
          <Link to="/Profile" onClick={toggleMenu} className="text-lg font-semibold hover:bg-gray-100 rounded px-3 py-2 transition">
            Profile
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-lg font-semibold text-red-500 hover:bg-gray-100 rounded px-3 py-2 transition">
            Logout
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
