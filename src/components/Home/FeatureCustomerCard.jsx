import React from "react";
const FeatureCustomerCard = ({ img, des, name, type }) => {
  return (
    <div className="md:w-full w-[80%] h-fit rounded cursor-pointer bg-white flex flex-col items-center py-10 gap-10 relative">
      <div className="size-[50px]">
        <img
          src={img}
          alt=""
          className="size-full object-cover object-center rounded-full"
        />
      </div>
      <div className=" w-[95%] flex flex-col gap-2 items-center justify-center">
        <p className="text-center text-gray-800/50 lg:text-sm text-[10px]">
          {des}
        </p>
        <p className="text-center font-medium pt-5">{name}</p>
        <p className="text-[10px] text-gray-800/50">{type}</p>
      </div>
      <p className="absolute text-9xl bottom-[-7px] right-5 font-mono text-[#fdeedb]">
        ,,
      </p>
    </div>
  );
};

export default FeatureCustomerCard;
