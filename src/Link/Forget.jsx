import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Rend/Footer';
import Nav from '../Rend/Nav';

const Forget = () => {
  return (
    <div>
        <Nav />
        <div className='flex flex-col items-center'>
      <div className='flex flex-col text-center'>
            <h1 className='text-2xl font-bold mb-2'>Forgot your password?</h1>
            <p className='w-[20vw] text-[18px]'>Enter your email address and we'll send you a link to set your password.</p>
      </div>
      <form className='flex flex-col items-center gap-7 pt-5'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="Email" className='font-bold'>Email</label>
            <input className='w-[24vw] px-4 py-3 h-[60px] rounded-xl outline-[#0EA5E9] bg-[#e7ecf1]' type="email" name="email" id="email" placeholder='Enter Email' />
        </div>
        <button className='bg-[#0EA5E9] text-white w-[100%] hover:bg-[#3e7a96] rounded-xl text-xl font-bold p-4'>Send</button>
        <p className='text-xl font-bold  mb-10'>Know your password? <Link to="/Login"><span className='text-xl text-[#7973d6]'>sign in</span></Link></p>
      </form>
    </div>
    <Footer />
    </div>
  )
}

export default Forget
