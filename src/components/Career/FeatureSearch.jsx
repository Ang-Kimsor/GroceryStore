import React from "react";
import FeatureTitle from "./../Home/FeatureTitle";
const FeatureSearch = () => {
  return (
    <div className="w-full h-fit flex items-center  flex-col">
      <FeatureTitle
        title1={"come work with us"}
        title2={"Search the right job for you"}
      />
      <div className="md:w-[95%] h-[150px] w-[98%]  items-center justify-between flex flex-row md:gap-10 md:flex-nowrap flex-wrap mt-10">
        <div className="lg:w-1/2 w-full h-1/3 flex flex-row">
          <input
            type="text"
            className="w-[80%] h-full outline-none px-2 text-md bg-[#e8e8e8]"
            placeholder="Job Title or Keyword"
          />
          <button className="w-[20%] bg-[#59C491] cursor-pointer font-medium text-white">
            Search
          </button>
        </div>
        <div className="lg:w-1/2 w-full h-1/3 flex gap-5">
          <select className="outline-none w-1/3 text-[13px] h-full bg-[#e8e8e8] pl-2">
            <option value="">All Business</option>
            <option value="">Sales & Marketing</option>
            <option value="">Technology</option>
            <option value="">Management</option>
          </select>
          <select className="outline-none w-1/3 text-[13px] h-full bg-[#e8e8e8] pl-2">
            <option value="">All Type</option>
            <option value="">Part Time</option>
            <option value="">Full Time</option>
            <option value="">Freelance</option>
            <option value="">Internship</option>
          </select>
          <select className="outline-none w-1/3 text-[13px] h-full bg-[#e8e8e8] pl-2">
            <option value="">All Location</option>
            <option value="">Cambodia</option>
            <option value="">China</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FeatureSearch;
