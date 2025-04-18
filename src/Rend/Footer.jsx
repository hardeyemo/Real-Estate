import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import buxa from "../assets/BUXA.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Newsletter Section */}
      <div className="flex flex-col sm:flex-row bg-[#F8FAFC] px-6 py-3 w-[70%] mt-[30px]  rounded-2xl justify-between items-center">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="text-black text-2xl font-bold">Subscribe to our newsletter</h1>
          <p>Join our subscription to receive new updates every week.</p>
        </div>
        <div className="flex items-center gap-5 mt-5 sm:mt-0">
          <input
            className="bg-white text-black outline-none py-4 rounded-2xl px-6 w-[20vw] sm:w-[15vw]"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email address"
          />
          <button className="bg-[#0EA5E9] text-white px-8 rounded-2xl py-4">Subscribe</button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div
        className="flex flex-col sm:flex-row bg-black justify-evenly text-[#c9b9b9] rounded-2xl m-[40px] p-[50px] w-[90%] bg-cover bg-center"
        style={{ backgroundImage: `url(${buxa})` }}
      >
        {/* Features */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="mb-4 text-white font-semibold">Features</h1>
          <p>Explore</p>
          <p>Match</p>
          <p>Category</p>
          <p className="mb-4">Become an agent</p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-white font-semibold">Company</h1>
          <p>About</p>
          <p>Contact</p>
          <p>Career</p>
          <p>Investors</p>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-white font-semibold">Resources</h1>
          <p>Blog</p>
          <p>Newsroom</p>
          <p>News Update</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-white font-semibold">Socials</h1>
          <div className="flex justify-center sm:justify-start gap-6">
            <CiLinkedin className="bg-black border-2 rounded-2xl p-2 text-white" />
            <FaSquareXTwitter className="bg-black border-2 rounded-2xl p-2 text-white" />
            <FaSquareInstagram className="bg-black border-2 rounded-2xl p-2 text-white" />
            <FaYoutubeSquare className="bg-black border-2 rounded-2xl p-2 text-white" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row items-center mb-4 gap-[20px] sm:gap-[10vw] text-center sm:text-left">
        <div><img src={buxa} alt="BUXA Logo" className="w-[100px]" /></div>
        <div className="flex items-center gap-4">
          <p className="border-r-2 pr-4">Privacy & Policy</p>
          <p>Terms of service</p>
        </div>
        <div>
          <p>© 2024 BUXA, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
