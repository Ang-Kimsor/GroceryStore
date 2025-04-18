import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeatureVision = ({ icon, title, des }) => {
  return (
    <div className="bg-[#E8F4F0] rounded lg:w-11/12 md:w-9/12 py-16 xl:pb-32 flex gap-7 flex-col items-center relative top-0 transition-all duration-300 cursor-pointer lg:hover:top-10">
      <div className="size-[90px] bg-[#59C491] flex items-center justify-center rounded-full absolute top-[-45px]">
        <FontAwesomeIcon
          className="text-3xl text-white"
          icon={icon}
        ></FontAwesomeIcon>
      </div>
      <h1 className="mt-10 text-xl font-semibold capitalize">{title}</h1>
      <p className="text-center xl:px-10 px-5 text-[14px] text-gray-500/80 capitalize">
        {des}
      </p>
    </div>
  );
};

export default FeatureVision;
