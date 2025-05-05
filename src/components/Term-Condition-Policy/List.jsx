import React from "react";

const List = ({ title, list }) => {
  return (
    <>
      <h1 className="text-2xl mt-5 font-bold uppercase">{title}</h1>
      <ul className="pl-5 list-disc flex flex-col  gap-2 mt-4 ">
        {list.map((item, index) => (
          <li
            key={index}
            className="marker:text-gray-500/80 text-gray-700/80 md:text-sm text-[12px]"
          >
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
