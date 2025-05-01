import React from "react";

const List = ({
  length,
  index,
  name,
  price,
  qty,
  discount,
  isListImg,
  img,
}) => {
  return (
    <div
      className={`${
        length - 1 == index ? "border-y" : "border-t"
      } h-[65px] border-gray-500/40 flex items-center justify-between`}
    >
      {isListImg ? (
        <div className="flex gap-4 items-center">
          <img
            src={img}
            alt=""
            className="size-[50px] object-cover object-center"
          />
          <h1 className="self-start mt-2 text-[13px]">{name}</h1>
        </div>
      ) : (
        <h1 className="self-start mt-2 text-[13px]">{name}</h1>
      )}
      <p className="flex flex-col items-end">
        <span className="text-[12px] text-gray-500/80 font-medium">
          {qty} x {(price * (1 - discount / 100)).toFixed(2)}
        </span>
        <span className="text-[15px] font-normal tracking-wider">
          ${(qty * price * (1 - discount / 100)).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default List;
