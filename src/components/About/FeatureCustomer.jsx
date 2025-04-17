import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatureTitle from "./FeatureTitle";
import React from "react";
import FeatureCustomerCard from "./FeatureCustomerCard";

const featureCustomer = ({ title1, title2, des, rate, customer }) => {
  rate = Math.round(rate);
  return (
    <>
      <div className="w-[95%] h-fit flex flex-wrap items-center ">
        <div className="xl:w-[30%] w-full h-fit flex flex-col items-center  py-10 pr-5">
          <div className="w-fit h-fit flex gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`text-[13px] ${
                  index < rate ? " text-amber-300" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <FeatureTitle title1={title1} title2={title2} />
          <p className="md:text-sm text-[12px]  text-gray-800/50 mt-5 px-3 text-center">
            {des}
          </p>
        </div>
        <div className="xl:w-[70%] w-full h-fit place-items-center  grid md:grid-cols-3 grid-col-1 gap-3">
          {customer.map(({ img, des, name, type }, index) => (
            <FeatureCustomerCard
              key={index}
              img={img}
              des={des}
              name={name}
              type={type}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default featureCustomer;
