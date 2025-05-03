import { faFaceDizzy } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="w-full h-[600px] bg-white flex flex-col gap-2 items-center justify-center">
      <FontAwesomeIcon
        icon={faFaceDizzy}
        className="md:text-9xl text-7xl text-gray-500/80"
      />
      <p className="mt-3 text-xl font-medium text-gray-500/50 text-center">
        Page not found
      </p>
      <p className="text-[12px] font-medium text-gray-500/50 text-center">
        The page you are looking for doesn't exist or an other error occurred.
      </p>
      <p className="text-[12px] font-medium text-gray-500/50 text-center">
        Go back, or head over to www.JapanSouq.com to choose a new direction.
      </p>
      <div className="size-fit flex gap-5 mt-4">
        <Link to={"/"} className="px-5 bg-[#FF6150] py-2 text-white">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        <Link to={"/Contact"} className="px-5 bg-[#59C491] py-2 text-white">
          Contact us
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>
    </main>
  );
};

export default Error;
