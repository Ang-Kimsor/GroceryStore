import React from "react";
import img from "./../../assets/cate1.jpg";
const FeatureCategory = () => {
  return (
    <>
      <div className="w-fit h-fit flex flex-col gap-3 group md:hover:translate-y-[50px] transition-all">
        <div className="bg-blue-500">
          <img src={img} alt="" />
        </div>
        <div className="w-full h-fit flex justify-center bg-amber-500 group-hover:">
          <h1 className="text-xl">Hell</h1>
        </div>
      </div>
    </>
  );
};

export default FeatureCategory;
