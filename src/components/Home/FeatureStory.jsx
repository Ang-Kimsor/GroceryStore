import React from "react";
import FeatureTitle from "./FeatureTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const FeatureStory = ({ img, title1, title2, des }) => {
  return (
    <>
      <div className="lg:w-[80%] w-[95%] h-fit grid lg:grid-cols-2 grid-cols-1">
        <div className=" flex relative">
          <img src={img} alt="" className="rounded-xl" />
        </div>
        <div className="bg-[#e8f4f0] lg:rounded-r-xl lg:rounded-bl-none rounded-b-xl flex flex-col justify-center px-5 py-5">
          <FeatureTitle title1={title1} title2={title2} />
          <p className="text-[12px] text-gray-800/50 mt-5 pr-10">{des}</p>
          <Link>
            <button className="uppercase w-[150px] py-2 text-white bg-[#222222] mt-5 cursor-pointer text-sm tracking-wider">
              Learn More
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeatureStory;
