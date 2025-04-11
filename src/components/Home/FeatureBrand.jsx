import React from "react";

const FeatureBrand = ({ img }) => {
  return (
    <div className="xl:w-[15.5%] lg:w-[28%] w-[49%] lg:grayscale-100 hover:grayscale-0 transition-all duration-150 md:h-[120px] h-[60px] flex items-center justify-center rounded-md cursor-pointer bg-[#f8f8f8] p-10">
      <img
        src={img}
        alt=""
        className="w-full xl:h-[90px] md:h-[70px] h-[50px] object-contain"
      />
    </div>
  );
};

export default FeatureBrand;
