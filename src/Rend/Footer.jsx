import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import buxa from "../assets/BUXA.png"
const Footer = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex bg-[#F8FAFC] px-6 py-10 w-[70%] mb-[90px] rounded-2xl justify-around items-center'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-black text-2xl font-bold'>Subscribe to our newsletter</h1>
        <p>Join our subscription to receive  new updates every week.</p>
      </div>
      <div className='flex items-center gap-5'>
        <input className='bg-white text-black outline-none py-4 rounded-2xl px-6  w-[20vw]' type="email" name="email" id="" placeholder='Enter your email address' />
        <button className='bg-[#0EA5E9] text-white px-8 rounded-2xl py-4'>Subscribe</button>
      </div>
    </div>
    <div className='flex bg-black justify-evenly text-[#c9b9b9] rounded-2xl m-[60px] p-[50px] w-[70%] bg-cover bg-center ' style={{backgroundImage: `url(${buxa})` }} >
          <div className='flex flex-col gap-4'>
              <h1 className='mb-4 text-white font-semibold'>Features</h1>
              <p>Explore</p>
              <p>Match</p>
              <p>Category</p>
              <p className='mb-4'>Become an agent</p>
          </div>
         <div className='flex flex-col gap-4'>
            <h1 className='text-white font-semibold'>Company</h1>
              <p>About</p>
              <p>Contact</p>
              <p>Career</p>
              <p>Investors</p>
         </div>
              <div className='flex flex-col gap-4'>
                  <h1 className='text-white font-semibold'>Resources</h1>
                  <p>Blog</p>
                  <p>Newsroom</p>
                  <p>News Update</p>
              </div>
        <div className='flex flex-col gap-4'>
        <h1 className='text-white font-semibold'>Socials</h1>
          <div className='flex items-center gap-6'>
          <CiLinkedin className='bg-black border-2 rounded-2xl' />
          <FaSquareXTwitter className='bg-black border-2 rounded-2xl'/>
          <FaSquareInstagram className='bg-black border-2 rounded-2xl'/>
          <FaYoutubeSquare className='bg-black border-2 rounded-2xl'/>
          </div>
        </div>
          
    </div>
    <div className='flex items-center mb-10 gap-[20vw]'>
            <div><img src={buxa} alt="" /></div>
        <div className='flex items-center gap-4'>
            <p className='border-r-2 pr-4'>Privacy & Policy</p>
            <p>Terms of service</p>
        </div>
            <div><p>© 2024 BUXA, Inc. All right reserved.</p></div>
        </div>
    </div>
  )
}

export default Footer
