import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SideMenuLi = ({ name, icon, path, onClick }) => {
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`w-full h-[60px] text-[14px] gap-3  flex items-center pl-2 border bg-[#F6F6F8] border-[#F6F6F8] text-[#505157]`}
    >
      <FontAwesomeIcon icon={icon} className="text-[#59C491]" />
      {name}
    </Link>
  );
};

export default SideMenuLi;
