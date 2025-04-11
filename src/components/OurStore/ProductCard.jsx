import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
const ProductCard = ({ id, name, price, discount, rate, img }) => {
  rate = Math.round(rate);
  const [hover, setHover] = useState(false);
  return (
    <>
      <div
        className={`w-fit h-fit  group cursor-pointer`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className="w-full h-fit relative">
          <img
            src={img}
            alt={name}
            className="border rounded border-gray-500/50"
          />
          <div
            className={`w-full h-full absolute flex flex-col justify-between top-0 left-0 p-2 group-hover:bg-gray-500/10 ${
              hover ? "bg-gray-500/10" : ""
            } rounded`}
          >
            {discount > 0 ? (
              <span className="size-fit rounded bg-[#4daf65] px-2.5 right-2 top-2 text-white tracking-wider md:text-[12px] text-[10px] absolute">
                -{discount}%
              </span>
            ) : null}
            <div
              className={`${
                hover
                  ? "translate-x-0 visible"
                  : "-translate-x-[30px] invisible"
              } w-full h-fit  flex flex-col items-start gap-2 -translate-x-[30px] invisible group-hover:translate-x-0 group-hover:visible transition-all duration-200`}
            >
              <span className="md:w-[40px] md:h-[40px] size-[25px] rounded-full flex items-center justify-center bg-white">
                <FontAwesomeIcon
                  icon={faImage}
                  className="text-[#4daf65] md:text-sm text-[11px]"
                />
              </span>
              <span className="md:w-[40px] md:h-[40px] size-[25px] rounded-full flex items-center justify-center bg-white">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[#4daf65] md:text-sm text-[11px]"
                />
              </span>
            </div>
            <button
              className={`${
                hover ? "translate-y-0 visible" : "translate-y-[30px] invisible"
              } w-full lg:h-[40px] h-[30px] md:flex hidden bg-white gap-2 rounded items-center justify-center translate-y-[30px]  invisible group-hover:translate-y-0 group-hover:visible transition-all duration-200`}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[#4daf65] text-[10px] md:text-[12px]"
              />
              <p className="text-[#4daf65] text-[10px] md:text-sm">
                Add to cart
              </p>
            </button>
          </div>
        </div>
        <div className="w-full h-fit py-2 bg-white">
          <span className="w-full h-[20px]  flex items-center gap-[2px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
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
          <button
            className={` w-full h-[30px] md:hidden flex bg-[#6ddca6] gap-2 rounded items-center justify-center mt-5 cursor-pointer`}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white text-[12px]"
            />
            <p className="text-white text-sm">Add to cart</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
