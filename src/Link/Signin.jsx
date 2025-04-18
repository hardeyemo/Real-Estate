import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();
    const baseurl = 'http://0.0.0.0:5000/api/users/login';
    try {
      const responds = await fetch(baseurl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })
      .then((res) => res.json());
      if (responds) {
        console.log("Login successfully");
        navigate("/");
      }
    } catch (error) {
      console.error('Check your network connection');
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f1f1f1]">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-5 text-center">Welcome to BUXA</h1>
        <div className="flex justify-center gap-3 mb-5">
          <p className="border-b-4 border-[#266581] pb-3 text-xl cursor-pointer">Sign in</p>
        </div>
        <form className="flex flex-col items-center gap-7 pt-5 border-t-2 border-[#0EA5E9]">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="font-bold">Email</label>
            <input 
              className="w-full px-4 py-3 h-[60px] rounded-xl outline-[#0EA5E9] bg-[#e7ecf1]" 
              type="email" 
              name="email" 
              id="email" 
              required 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter Email" 
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="font-bold">Password</label>
            <input 
              className="w-full px-4 py-3 h-[60px] rounded-xl outline-[#0EA5E9] bg-[#e7ecf1]" 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              required  
              name="password" 
              id="password" 
              placeholder="Enter Password" 
            />
          </div>
          <button 
            onClick={onLogin} 
            className="bg-[#0EA5E9] text-white w-full hover:bg-[#3e7a96] rounded-xl text-xl font-bold p-4 mt-5"
          >
            Sign in
          </button>
          <div className="mt-4">
            <NavLink to="/Forget">
              <p className="text-2xl font-bold text-[#7973d6]">Forgot Your Password?</p>
            </NavLink>
            <p className="text-xl mt-4">
              Don't have an account? 
              <NavLink to="/Register">
                <span className="text-[#7973d6] text-xl cursor-pointer">Sign up</span>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
