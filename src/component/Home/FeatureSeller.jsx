import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const FeatureSeller = ({ name, price, discount, rate, img }) => {
  rate = Math.round(rate);
  return (
    <>
      <Link className="w-fit h-fit ">
        <div className="w-full h-fit relative">
          <img src={img} alt={name} />
          {discount > 0 ? (
            <span className="size-fit rounded bg-[#fe6150] px-2.5 left-2 top-2 text-white tracking-wider text-[12px] absolute">
              -{discount}%
            </span>
          ) : null}
        </div>
        <div className="w-full h-fit py-2">
          <span className="w-full h-[20px]  flex items-center gap-[2px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                icon={faStar}
                className={`text-[13px] ${
                  index < rate ? " text-amber-300" : "text-gray-300"
                }`}
              />
            ))}
          </span>
          <p className="md:text-[15.5px] text-[13px] font-[400] py-2 pr-7 capitalize">
            {name}
          </p>
          <p className="text-[16px] font-medium text-[#6ddca6]">
            $
            {discount > 0 ? (
              <>
                <span>{(price * (1 - discount / 100)).toFixed(2)}</span>
                <del className="pl-2 text-[13px] text-gray-700/40">
                  ${price.toFixed(2)}
                </del>
              </>
            ) : (
              <span>{price.toFixed(2)}</span>
            )}
          </p>
        </div>
      </Link>
    </>
  );
};

export default FeatureSeller;
