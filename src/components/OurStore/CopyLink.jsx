import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const CopyLink = ({ copy }) => {
  return (
    <div
      className={`w-[100px] h-fit py-2 px-2 bg-[#59C491] rounded fixed lg:top-20 top-2 flex  gap-2 items-center left-1/2 translate-x-[-50%] transition-all duration-300 z-[98] ${
        copy ? "opacity-100 visible " : "opacity-0 invisible "
      }`}
    >
      <FontAwesomeIcon icon={faLink} className="text-white font-medium" />
      <p className="text-white font-medium">Copied</p>
    </div>
  );
};

export default CopyLink;
