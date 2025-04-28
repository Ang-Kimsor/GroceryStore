import React from "react";
import img from "./../../assets/Product/p10.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const CartCard = () => {
  return (
    <div className="w-full pb-4 border-b border-gray-500/30 flex flex-row relative">
      <div className="size-[160px]">
        <img src={img} alt="" />
      </div>
      <FontAwesomeIcon
        className="absolute right-3 top-2 text-[12px] cursor-pointer text-red-500"
        icon={faX}
      />
      <p className="absolute bottom-[70px] right-3 text-lg">$12.34</p>
      <div className="ml-2 pt-1 flex flex-col gap-1">
        <p>Title</p>
        <p className="text-[13px] py-2">$12.34</p>
        <div className="flex gap-3 items-center">
          <span className="text-lg font-medium text-gray-500/80 cursor-pointer">
            -
          </span>
          <span>1</span>
          <span className="text-lg font-medium text-gray-500/80 cursor-pointer">
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
