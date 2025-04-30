import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bg from "./../assets/bg-login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../Context/UserContext";
const Register = () => {
  const navigate = useNavigate();
  const { dispatchUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passC, setPassC] = useState("");
  const [eye, setEye] = useState(false);
  const [eyeC, setEyeC] = useState(false);
  const [passM, setPassM] = useState(false);
  let msg1 = "Password not match",
    msg2 = "Password not match condition";
  const conditions = {
    length: pass.length >= 8 && passC.length >= 8,
    upper: /[A-Z]/.test(pass) && /[A-Z]/.test(passC),
    lower: /[a-z]/.test(pass) && /[a-z]/.test(passC),
    digit: /[0-9]/.test(pass) && /[0-9]/.test(passC),
    special: /[#$@&?]/.test(pass) && /[#$@&?]/.test(passC),
  };
  const condition =
    conditions.length &&
    conditions.upper &&
    conditions.lower &&
    conditions.special &&
    conditions.digit;
  const handleRegister = (e) => {
    e.preventDefault();
    if (pass !== passC || !condition) {
      setPassM(true);
      setTimeout(() => setPassM(false), 2500);
      return;
    }

    dispatchUser({
      type: "REGISTER",
      payload: {
        name: name,
        email: email,
        password: pass,
      },
    });
    alert("Registration successful!");
    navigate("/Login");
  };

  return (
    <>
      <div
        className={`${
          passM && name != "" && email != "" && pass != "" && passC != ""
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        } w-[290px] fixed flex items-center justify-center bottom-2 left-1/2 -translate-x-1/2 bg-red-500 transition-all duration-500 text-white px-5  z-100 p-3 rounded `}
        role="alert"
      >
        <svg
          className="shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="text-sm font-medium">
            {pass !== passC ? msg1 : msg2}
          </span>
        </div>
      </div>
      <main className="w-full md:h-[1100px] h-[950px] relative">
        <div className="size-full">
          <img src={Bg} className="size-full object-cover" alt="" />
        </div>
        <form
          action={"/Login"}
          onSubmit={(e) => handleRegister(e)}
          className="md:w-[600px] flex flex-col md:gap-3 gap-2 w-[90%] h-fit bg-white absolute inset-1/2 -translate-1/2 p-5 md:px-10 md:py-16"
        >
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
          <label className="py-2 text-lg">Email Address</label>
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
          <label className="py-2 text-lg">Password</label>
          <div className="w-full grid grid-cols-1 relative">
            <input
              type={eye ? "text" : "password"}
              required
              value={pass}
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
          <label className="py-2 text-lg">Confirm Password</label>
          <div className="w-full grid grid-cols-1 relative">
            <input
              type={eyeC ? "text" : "password"}
              required
              value={passC}
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
          <div>
            <p className="text-sm">Your password must have at least:</p>
            <span
              className={`text-[14px] ${
                conditions.length ? "text-green-500" : "text-gray-500/80"
              } mt-2 flex gap-2 items-center`}
            >
              <FontAwesomeIcon icon={faCheck} />
              <p>8 Characters</p>
            </span>
            <span
              className={`text-[14px] ${
                conditions.special ? "text-green-500" : "text-gray-500/80"
              } mt-2 flex gap-2 items-center`}
            >
              <FontAwesomeIcon icon={faCheck} />
              <p>1 Special Character (Example: # $ @ & ?)</p>
            </span>
            <span
              className={`text-[14px] ${
                conditions.upper && conditions.lower
                  ? "text-green-500"
                  : "text-gray-500/80"
              } mt-2 flex gap-2 items-center`}
            >
              <FontAwesomeIcon icon={faCheck} />
              <p>1 Uppercase and 1 Lowercase</p>
            </span>
            <span
              className={`text-[14px] ${
                conditions.digit ? "text-green-500" : "text-gray-500/80"
              } mt-2 flex gap-2 items-center`}
            >
              <FontAwesomeIcon icon={faCheck} />
              <p>1 Numberical Digit</p>
            </span>
          </div>
          <button
            type="submit"
            className="w-full text-white h-[40px] rounded text-lg font-medium mt-3 cursor-pointer bg-[#59C491]"
            onClick={() => {
              if (pass != passC) {
                setPassM(true);
                setTimeout(() => {
                  setPassM(false);
                }, 2500);
              }
            }}
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
    </>
  );
};

export default Register;
