import { menu } from "../data/Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../Context/CartContext";
import {
  faBars,
  faHeart,
  faShoppingCart,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [openMenu]);

  const { Cart } = useCart();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`lg:hidden 
          ${openMenu ? "translate-x-0 " : "-translate-x-full"}
          w-full h-screen bg-white fixed transition-all duration-500 z-[102]`}
      >
        <div className="relative flex items-center justify-center w-full p-5 h-fit">
          <div
            className="w-[190px] h-[30px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img src={Logo} className="w-full h-full" alt="JapanSouq - Logo" />
          </div>
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setOpenMenu(!openMenu)}
            className="absolute right-[20px] text-md translate-y-[-50%] top-[50%] cursor-pointer"
          />
        </div>

        {/* Main Navbar for sidebar */}
        <nav>
          <ul className="flex flex-col w-full gap-5 py-5 my-3 h-fit">
            {menu.map(({ name, path, icon }, index) => (
              <Link
                key={index}
                onClick={() => setOpenMenu(false)}
                className="uppercase h-[50px] font-medium py-2.5 px-5 text-2xl flex gap-5 items-center hover:text-[#59C491]"
                to={path}
              >
                <FontAwesomeIcon icon={icon} className="text-[#59C491]" />
                {name}
              </Link>
            ))}
          </ul>

          {/* Button login and register */}
          <div className="flex flex-row flex-wrap items-center w-full gap-5 px-5">
            <Link
              to={"/Login"}
              onClick={() => setOpenMenu(false)}
              className="w-full h-[50px] bg-green-500 px-8 hover:bg-green-600 flex justify-center items-center text-white font-medium rounded-sm text-lg"
            >
              Login
            </Link>
            <Link
              to={"/Register"}
              onClick={() => setOpenMenu(false)}
              className="w-full h-[50px] bg-orange-500 px-8 hover:bg-orange-600 flex justify-center items-center text-white font-medium rounded-sm text-lg"
            >
              Register
            </Link>
          </div>
        </nav>
      </aside>

      {/* Navbar */}
      <header className="sticky top-0 z-[100]">
        <nav className="w-full h-[90px] bg-white flex justify-center">
          <div className="w-[95%] h-full flex justify-between items-center">
            {/* navbar logo */}
            <motion.div
              className="md:w-[280px] md:h-[60%] w-[150px] h-[30%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img
                className="w-full h-full"
                src={Logo}
                alt="JapanSouq - Logo"
              />
            </motion.div>

            {/* navbar list and icon*/}
            <div className="lg:w-[65%] w-fit h-full flex flex-row justify-between items-center">
              {/* navbar list */}
              <motion.ul
                className="items-center hidden h-full gap-5 lg:flex w-fit"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                  hidden: {},
                }}
              >
                {menu.map(({ name, path }, index) => (
                  <motion.li
                    key={index}
                    className="px-2 flex items-center justify-center text-[15px] font-medium text-black"
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: { duration: 0.3 },
                      },
                      hidden: { opacity: 0 },
                    }}
                  >
                    <Link
                      className="hover:text-[#59C491] uppercase"
                      to={path}
                      onClick={() => setOpenMenu(false)}
                    >
                      {name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* navbar icon*/}
              <motion.div
                className="flex flex-row items-center gap-2 w-fit h-1/2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                  hidden: {},
                }}
              >
                {/* user */}
                <motion.span
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.3 },
                    },
                    hidden: { opacity: 0 },
                  }}
                >
                  <Link
                    to={"/Login"}
                    className="w-[30px] h-[30px] flex justify-center items-center"
                  >
                    <FontAwesomeIcon className="cursor-pointer" icon={faUser} />
                  </Link>
                </motion.span>
                {/* wishlist */}
                <motion.span
                  className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.3 },
                    },
                    hidden: { opacity: 0 },
                  }}
                >
                  <FontAwesomeIcon className="cursor-pointer" icon={faHeart} />
                </motion.span>
                {/* cart */}
                <motion.span
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.3 },
                    },
                    hidden: { opacity: 0 },
                  }}
                >
                  <Link
                    to={"/Cart"}
                    className="w-[30px] h-[30px] relative flex justify-center items-center"
                  >
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faShoppingCart}
                    />
                    <span className="text-[8px] text-white font-medium absolute top-[-5px] right-[-5px] size-4 bg-[#59C491] rounded-full flex justify-center items-center z-[10]">
                      {Cart.length}
                    </span>
                  </Link>
                </motion.span>
                {/* bar */}
                <motion.span
                  className="lg:hidden flex w-[30px] h-[30px] justify-center items-center"
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.3 },
                    },
                    hidden: { opacity: 0 },
                  }}
                >
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    onClick={() => setOpenMenu(!openMenu)}
                    icon={faBars}
                  />
                </motion.span>
              </motion.div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
