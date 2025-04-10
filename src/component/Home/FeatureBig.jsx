import React from "react";
import { Link } from "react-router-dom";

const FeatureBig = ({ name, brands, img }) => {
  return (
    <Link className="w-full h-fit flex justify-center mb-12">
      <img className="h-auto w-full" src={img} alt={`${name} - ${brands}`} />
    </Link>
  );
};

export default FeatureBig;
