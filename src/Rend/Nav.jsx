import React, { useState} from 'react';
import img1 from '../assets/home-01.png';
import img2 from '../assets/search-01.png'
import img3 from '../assets/ai-magic.png'
import img4 from '../assets/check-list.png'
import logo from "../assets/Frame 4.png"
import user from "../assets/user.png"
import Switch from "../assets/switch.png"
import { Link } from 'react-router-dom';
import icon from "../assets/tabler-icon-chevron-down.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function toggleDrop(){
    setOpen(!open);
  }
  
  return (
    <div className='flex justify-evenly gap-[100px] items-center py-3 w-full bg-[#ebeced]'>
      <Link to="/Dashboard"><img className="cursor-pointer" src={logo} alt="" /></Link>
     <div className='flex items-center gap-[50px] bg-[#F8FAFC] px-5 py-3 rounded-3xl'>
          {/* <div className='flex flex-col items-center cursor-pointer'><img src={img1} alt="" /><Link to="/"></Link></div> */}
          <Link to="/" className='flex flex-col items-center cursor-pointer'><img src={img1} alt="" />Home</Link>
          <Link to="/Search" className='flex flex-col items-center cursor-pointer'><img src={img2} alt="" />Search</Link>
          <Link to="/Categ" className='flex flex-col items-center cursor-pointer'><img src={img3} alt="" />Categories</Link>
          <Link to="/March" className='flex flex-col items-center cursor-pointer'><img src={img4} alt="" />Match</Link>
          <div>
    </div>
     </div>
      <div className='flex items-center gap-5'>
        {/* <img onClick={()=>{changeBackground('black', "white")}}  className="cursor-pointer w-14 h-10 rounded-2xl" src={Switch} alt="switch" /> */}
      <div className="flex items-center gap-4 border-[#d7e0e9] px-2 py-1 border-2 rounded-3xl ">
          <Link to="/Register"><img className="bg-[#F8FAFC]  cursor-pointer p-3 rounded-3xl" src={user} alt="" /></Link>
          <div className="relative dropdown-container">
          <img className="cursor-pointer w-7 h-7" src={icon} alt="Toggle Dropdown" onClick={toggleDrop} aria-expanded={open} />
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
              <ul className="list-none p-2">
                <li className="p-3 hover:bg-gray-100 rounded-t-lg cursor-pointer">Profile</li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="p-3 hover:bg-gray-100 rounded-b-lg cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>

       </div>
      </div>
    </div>
  );
};

export default Navbar;