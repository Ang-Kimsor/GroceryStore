import React from "react";
import { Link } from "react-router-dom";

const FeatureBig = ({ name, brands, img }) => {
  return (
    <Link to={"/OurStore"} className="w-full h-fit flex justify-center mb-12">
      <img
        className="md:h-auto md:w-[95%] h-[400px] object-cover object-left w-full"
        src={img}
        alt={`${name} - ${brands}`}
      />
    </Link>
  );
};

export default FeatureBig;
