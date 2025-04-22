import { menu } from "../data/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faShoppingCart,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="bg-red-500 px-4 py-2 top-20 z-[100] text-white rounded fixed left-1/2 -translate-x-1/2 cursor-pointer"
      >
        Reset local storage
      </button>
      <Search openSearch={openSearch} hide={() => setOpenSearch(false)} />
      <aside
        className={`lg:hidden 
          ${openMenu ? "translate-x-0 " : "-translate-x-full"}
          w-full h-screen bg-white absolute transition-all duration-500 z-[100]`}
      >
        <div className="w-full h-fit flex items-center justify-center p-5 relative">
          <div className="w-[190px] h-[30px]">
            <img src={Logo} className="h-full" alt="" />
          </div>
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setOpenMenu(!openMenu)}
            className="absolute right-[20px] text-md translate-y-[-50%] top-[50%] cursor-pointer"
          />
        </div>
        <ul className="w-full h-fit border-y-4 border-gray-500/20 flex flex-col gap-5 py-5 my-3">
          {menu.map(({ name, path }, index) => (
            <Link
              key={index}
              onClick={() => setOpenMenu(false)}
              className="uppercase font-medium py-2.5 px-5 text-2xl hover:text-[#59C491]"
              to={path}
            >
              {name}
            </Link>
          ))}
        </ul>
        <div className="w-full h-[50px] px-5 flex flex-row gap-5 items-center">
          <Link
            to={"/Login"}
            onClick={() => setOpenMenu(false)}
            className="w-fit h-[30px] bg-green-500 px-8 hover:bg-green-600 flex justify-center items-center text-white font-medium rounded-sm text-lg"
          >
            Login
          </Link>
          <Link
            to={"/Register"}
            onClick={() => setOpenMenu(false)}
            className="w-fit h-[30px] bg-orange-500 px-8 hover:bg-orange-600 flex justify-center items-center text-white font-medium rounded-sm text-lg"
          >
            Register
          </Link>
        </div>
      </aside>
      <nav className="w-full h-[90px] bg-white flex justify-center">
        <div className="w-[95%] h-full flex justify-between items-center">
          <div className="md:w-[280px] md:h-[60%] w-[150px] h-[30%]">
            <img className="w-full h-full" src={Logo} alt="" />
          </div>
          <div className="lg:w-[65%] w-fit h-full flex flex-row justify-between items-center">
            <ul className="lg:flex w-fit h-full hidden gap-5 items-center">
              {menu.map(({ name, path }, index) => (
                <li
                  key={index}
                  className=" px-2 flex items-center justify-center text-[15px] font-medium text-black"
                >
                  <Link
                    className="hover:text-[#59C491] uppercase"
                    to={path}
                    onClick={() => setOpenMenu(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-fit h-1/2 flex flex-row gap-2 items-center">
              <span className="w-[30px] h-[30px]  flex justify-center items-center">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faMagnifyingGlass}
                  onClick={() => setOpenSearch(true)}
                />
              </span>
              <Link
                to={"/Login"}
                className="w-[30px] h-[30px]  flex justify-center items-center"
              >
                <FontAwesomeIcon className="cursor-pointer" icon={faUser} />
              </Link>
              <span className="w-[30px] h-[30px]  flex justify-center items-center">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faShoppingCart}
                />
              </span>
              <span className="lg:hidden flex w-[30px] h-[30px]  justify-center items-center">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  onClick={() => setOpenMenu(!openMenu)}
                  icon={faBars}
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
