import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const baseurl = 'http://localhost:5000/api/users/register';
    try {
      const response = await fetch(baseurl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, email, password })
      })
        .then((res) => res.json());
      if (response.ok) {
        console.log("Submitted successfully");
        navigate("/Login");
      }
    } catch (error) {
      console.error('Check your network connection', error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f1f1f1]">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-5 text-center">Welcome to BUXA</h1>
        <div className="flex justify-center gap-3 mb-5">
          <p className="border-b-4 border-[#266581] pb-3 text-xl cursor-pointer">New account</p>
        </div>
        <form className="flex flex-col items-center gap-7 pt-5 border-t-2 border-[#0EA5E9]">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="username" className="font-bold">Username</label>
            <input
              className="w-full px-4 py-3 h-[60px] rounded-xl outline-[#0EA5E9] bg-[#e7ecf1]"
              type="text"
              value={userName}
              required
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
              id="username"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="font-bold">Email</label>
            <input
              className="w-full px-4 py-3 h-[60px] rounded-xl outline-[#0EA5E9] bg-[#e7ecf1]"
              value={email}
              type="email"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="font-bold">Password</label>
            <input
              className="w-full px-4 py-3 h-[60px] rounded-xl outline-[#0EA5E9] bg-[#e7ecf1]"
              type="password"
              value={password}
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Create Password"
            />
          </div>
          <button
            onClick={onSubmit}
            type="submit"
            className="bg-[#0EA5E9] text-white w-full hover:bg-[#3e7a96] rounded-xl text-xl font-bold p-4 mt-5"
          >
            Sign up
          </button>
          <p className="text-xl mt-4">
            Have an account already?{' '}
            <NavLink to="/Login">
              <span className="text-[#7973d6] text-xl cursor-pointer">Sign in</span>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
