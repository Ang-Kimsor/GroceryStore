import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bg from "./../assets/bg-login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passC, setPassC] = useState("");
  const [eye, setEye] = useState(false);
  const [eyeC, setEyeC] = useState(false);
  return (
    <main className="w-full md:h-[900px] h-[750px] relative">
      <div className="size-full">
        <img src={Bg} className="size-full object-cover" alt="" />
      </div>
      <form className="md:w-[600px] flex flex-col md:gap-3 gap-2 w-[90%] h-fit bg-white absolute inset-1/2 -translate-1/2 p-5 md:px-10 md:py-16">
        <p className="uppercase text-[#59C491] text-[13px] tracking-widest">
          Join us
        </p>
        <p className="mt-2 md:text-4xl text-xl font-[550] capitalize">
          Register
        </p>
        <label className="py-1.5 text-lg text-">Your Name</label>
        <div className="w-full grid grid-cols-1">
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="bg-[#e8e8e8] h-[50px] px-2 outline-none rounded"
            placeholder="John Doe"
          />
        </div>
        <label className="py-2 text-lg text-">Email Address</label>
        <div className="w-full grid grid-cols-1">
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#e8e8e8] h-[50px] px-2 outline-none rounded"
            placeholder="example@gmail.com"
          />
        </div>
        <label className="py-2 text-lg text-">Password</label>
        <div className="w-full grid grid-cols-1 relative">
          <input
            type={eye ? "text" : "password"}
            required
            onChange={(e) => setPass(e.target.value)}
            className="bg-[#e8e8e8] h-[50px] px-2 outline-none rounded "
            placeholder="Password"
          />
          <FontAwesomeIcon
            onClick={() => setEye(!eye)}
            icon={eye ? faEye : faEyeSlash}
            className="absolute text-[12px] right-2 top-1/2 cursor-pointer -translate-y-1/2"
          />
        </div>
        <label className="py-2 text-lg text-">Confirm Password</label>
        <div className="w-full grid grid-cols-1 relative">
          <input
            type={eyeC ? "text" : "password"}
            required
            onChange={(e) => setPassC(e.target.value)}
            className="bg-[#e8e8e8] h-[50px] px-2 outline-none rounded "
            placeholder="Password"
          />
          <FontAwesomeIcon
            onClick={() => setEyeC(!eyeC)}
            icon={eyeC ? faEye : faEyeSlash}
            className="absolute text-[12px] right-2 top-1/2 cursor-pointer -translate-y-1/2"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white h-[40px] rounded text-lg font-medium mt-3 cursor-pointer bg-[#59C491]"
        >
          Register
        </button>
        <p className="text-sm uppercase text-gray-800/50 ">
          Already User?{" "}
          <Link to={"/Login"} className="hover:underline text-[#59C491]">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
