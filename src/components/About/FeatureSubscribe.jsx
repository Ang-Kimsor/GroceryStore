import React from "react";
import { Link } from "react-router-dom";
import Img from "./../../assets/subscribe.jpg";
const FeatureSubscribe = () => {
  return (
    <div className=" lg:w-[95%] lg:h-[450px] h-fit grid lg:grid-cols-2 lg:gap-5">
      <div className=" lg:px-10 px-5 flex flex-col gap-7 justify-center">
        <h1 className="lg:text-4xl pl-2 text-2xl pr-5 font-medium capitalize">
          Stay Home and enjoy japan's finest daily essentials from our store .
        </h1>
        <p className="text-sm pl-2 text-gray-500/50 pr-5 capitalize">
          start your daily shopping with{" "}
          <Link to={"/"} className="uppercase text-[#59C491]">
            japanssouq
          </Link>
        </p>
        <div className="w-fit h-[50px] px-2 flex">
          <input
            type="email"
            placeholder="Email Address"
            className="h-[70%] outline-none bg-[#e8e8e8] pl-2"
          />
          <button className="h-[70%] cursor-pointer bg-black text-white text-sm px-5 hover:bg-[#59C491]">
            Subscribe
          </button>
        </div>
      </div>
      <div className=" px-10 flex items-end">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default FeatureSubscribe;
