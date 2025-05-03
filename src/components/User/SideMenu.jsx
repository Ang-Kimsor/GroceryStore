import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideMenuData } from "../../data/User";
import SideMenuLi from "./SideMenuLi";
import { faBars, faDashboard, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SideMenu = ({ isinfo, notinfo }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden ml-3 flex flex-row items-center gap-3">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setOpen(true)}
          className="cursor-pointer text-2xl"
        />{" "}
        Dashboard Menu
      </div>
      <aside
        className={`lg:relative lg:w-[330px] lg:h-fit lg:bg-transparent lg:pb-10 lg:pt-5 lg:z-10 ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 lg:translate-x-0  p-5 bg-white w-full h-screen z-[200] absolute top-0 left-0 flex flex-col gap-3`}
      >
        <h1 className="lg:hidden text-center w-full text-lg font-medium mb-5 relative flex flex-row justify-center items-center  gap-3">
          <FontAwesomeIcon icon={faDashboard} className="text-md" />
          User Dashboard
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setOpen(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        </h1>
        {SideMenuData.map(({ icon, name, path }, index) => (
          <SideMenuLi
            key={index}
            icon={icon}
            name={name}
            path={path}
            onClick={() => {
              setOpen(false);
              if (index === 0) {
                isinfo();
              } else {
                notinfo();
              }
            }}
          />
        ))}
      </aside>
    </>
  );
};

export default SideMenu;
