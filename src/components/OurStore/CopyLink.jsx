import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const CopyLink = ({ copy }) => {
  return (
    <>
      <div
        class={`${
          copy ? "opacity-100 visible " : "opacity-0 invisible "
        } flex items-center fixed transition-all duration-300 px-4 py-3 mb-4 text-sm text-green-800 rounded-lg bg-green-500 lg:top-20 top-2 gap-2 left-1/2 translate-x-[-50%]left-1/2 translate-x-[-50%] z-[101]`}
        role="alert"
      >
        <FontAwesomeIcon icon={faLink} className="text-white font-medium" />
        <p className="text-white font-medium">Copied</p>
      </div>
    </>
  );
};

export default CopyLink;
