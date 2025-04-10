import React from "react";

const FeatureTitle = ({ title1, title2 }) => {
  return (
    <>
      <p className="uppercase text-[#4daf66] text-[13px]">{title1}</p>
      <p className="mt-3 md:text-4xl text-2xl font-[550] capitalize">
        {title2}
      </p>
    </>
  );
};

export default FeatureTitle;
