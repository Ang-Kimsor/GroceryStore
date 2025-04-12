import React from "react";
import { Link } from "react-router-dom";
const FeatureSellerBanner = ({ logo, name, flavour, img }) => {
  return (
    <>
      <div className="xl:w-fit xl:h-fit md:w-1/2 w-full h-full">
        <img
          src={img}
          className="xl:h-auto xl:rounded-t-lg xl:rounded-b-none md:rounded-l-lg md:rounded-r-none rounded-lg h-full w-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="xl:w-full xl:h-fit xl:pl-3 xl:rounded-b-lg xl:rounded-t-none md:rounded-r-lg md:rounded-l-none md:relative md:w-1/2 md:h-full rounded-lg md:bg-lime-300 md:justify-normal bg-lime-200/50 w-[95%] pl-5 absolute h-[400px] flex justify-center flex-col gap-5 pt-5 pb-2 ">
        <img className="w-[250px]" src={logo} alt="" />
        <p className="text-3xl font-medium">{name}</p>
        <p className="text-2xl font-medium uppercase text-[#3cba80]">
          {flavour}
        </p>
        <Link
          to={"/OurStore"}
          className="w-fit text-stone-600 hover:text-black uppercase font-medium hover:underline pb-1"
        >
          Shop Now
        </Link>
      </div>
    </>
  );
};

export default FeatureSellerBanner;
