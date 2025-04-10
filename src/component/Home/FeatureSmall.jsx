import React from "react";
import { Link } from "react-router-dom";

const FeatureSmall = ({ name, img }) => {
  return (
    <Link className="bg-[#f3f3f3] rounded w-full md:h-[230px] flex px-5 group">
      <div className="w-1/2  h-full flex flex-col justify-center">
        <p className="lg:text-xl text-lg font-[550] pb-2">{name}</p>
        <p className=" flex items-center gap-2 uppercase text-[14px] font-medium text-gray-500/80 group-hover:text-[#4daf66]">
          Shop Now{" "}
          <div className="w-[25px] h-[2px] bg-gray-500/80 group-hover:bg-[#4daf66]"></div>
        </p>
      </div>
      <div className="w-1/2 h-full">
        <img className="size-full object-contain" src={img} alt="" />
      </div>
    </Link>
  );
};

export default FeatureSmall;
