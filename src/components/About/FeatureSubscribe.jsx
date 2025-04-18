import React from "react";
import { Link } from "react-router-dom";
const FeatureSubscribe = ({ title, des, link, path, img }) => {
  return (
    <div className=" lg:w-[95%] lg:h-[450px] h-fit grid lg:grid-cols-2 lg:gap-5">
      <div className=" lg:px-10 px-5 flex flex-col gap-7 justify-center">
        <h1 className="lg:text-4xl pl-2 text-2xl pr-5 font-medium capitalize">
          {title}
        </h1>
        <p className="text-sm pl-2 text-gray-500/50 pr-5 capitalize">
          {des + " "}
          <Link to={path} className="uppercase text-[#59C491]">
            {link}
          </Link>
        </p>
        <div className="w-fit h-[50px] px-2 flex">
          <input
            type="email"
            placeholder="Email Address"
            className="w-[200px] h-[70%] outline-none bg-[#e8e8e8] pl-2"
          />
          <button className="w-fit h-[70%] cursor-pointer bg-black text-white text-sm px-2 hover:bg-[#59C491]">
            Subscribe
          </button>
        </div>
      </div>
      <div className=" px-10 flex items-end">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default FeatureSubscribe;
