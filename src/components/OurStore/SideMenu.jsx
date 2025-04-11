import React from "react";
import { Link } from "react-router-dom";
const SideMenu = ({category}) => {
  return (
    <div className="w-full h-fit p-2">
      <h1 className="text-2xl font-medium mb-3 ">Product Category</h1>
      <ul className="flex flex-col gap-3">
        {category.map(({name}, index) => (

        <li key={index}>
          <Link className="text-md text-gray-800/70">{name}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
