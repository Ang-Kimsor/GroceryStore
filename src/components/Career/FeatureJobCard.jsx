import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeatureJobCard = ({ title, business, type, location }) => {
  return (
    <div className="bg-white px-7 py-12">
      <h1 className="text-3xl text-[#59C491] font-medium uppercase">{title}</h1>
      <hr className="border  my-4 border-gray-800/20" />
      <p className="capitalize text-gray-800/50 flex justify-between text-md mb-2">
        Business <span className="text-black">{business}</span>
      </p>
      <p className="capitalize text-gray-800/50 flex justify-between text-md mb-2">
        Job Type <span className="text-black">{type}</span>
      </p>
      <p className="capitalize text-gray-800/50 flex justify-between text-md mb-2">
        Location <span className="text-black">{location}</span>
      </p>
      <button className="bg-black uppercase font-medium text-white px-5 py-3 mt-5 gap-5 flex items-center cursor-pointer transition-all  duration-100 hover:bg-[#59C491]">
        Apply Now <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default FeatureJobCard;
