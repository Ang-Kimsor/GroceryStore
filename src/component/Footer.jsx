import React from "react";
import Logo from "./../assets/logo.jpg";
import ISO from "./../assets/iso.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { footer, iconPayment, iconSocial } from "../data/Footer";
const Footer = () => {
  return (
    <>
      <footer className="w-full h-fit bg-[#f3f3f3] flex flex-col items-center justify-center pt-5">
        <div className="2xl:grid-cols-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[95%] h-fit grid gap-5">
          <div className="2xl:h-[310px]">
            <div className="w-[100%] pt-5 h-fit flex pl-5 flex-col">
              <div className="w-[80%]">
                <img className="w-full" src={Logo} alt="" />
                <p className="mt-5 text-sm font-medium text-gray-600/80">
                  The Group Focuses Exclusively On Quality And Service With A
                  Well Dedicated Team Ensuring Timely Deliveries All Across The
                  GCC.
                </p>
              </div>
              <div className="w-[80%]">
                <img
                  className="2xl:w-[60%] xl:w-[45%] lg:w-[35%] w-[30%] h-auto object-contain mt-5"
                  src={ISO}
                  alt=""
                />
              </div>
            </div>
          </div>
          {footer.map(({ title, element }, index) => (
            <div key={index} className="2xl:h-[310px] pt-5 px-3">
              <ul className="w-full h-fit flex flex-col gap-3">
                <h1 className="tracking-widest font-medium uppercase mb-5">
                  {title}
                </h1>
                {element.map(({ icon, text }, i) => (
                  <li key={i} className="w-full h-[30px] cursor-pointer group">
                    <Link className="w-fit h-[30px] flex justify-center items-center">
                      <FontAwesomeIcon
                        className="w-[30px] py-1.5 text-white bg-[#4daf66] rounded-sm mr-2"
                        icon={icon}
                      />
                      <p className="text-gray-500/80 group-hover:underline group-hover:text-gray-800">
                        {text}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="2xl:h-[310px]  pt-5 px-3">
            <div>
              <h1 className="tracking-widest font-medium uppercase mb-5">
                Payment Methods
              </h1>
              <div className="w-full h-[40px] flex gap-3">
                {iconPayment.map((img, index) => (
                  <div
                    key={index}
                    className="size-[40px] cursor-pointer flex items-center justify-center rounded-md"
                  >
                    <img
                      src={img}
                      alt=""
                      className="size-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="tracking-widest font-medium uppercase my-5">
                Follow Us
              </h1>
              <div className="w-full h-[40px] flex gap-3">
                {iconSocial.map((icon, index) => (
                  <Link
                    key={index}
                    className="size-[40px] bg-[#4daf66] cursor-pointer flex items-center justify-center rounded-md"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-white text-xl"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center  h-[60px] border-t border-gray-500/30 mt-5">
          <p className="text-sm  text-gray-500/80">
            Copyright ©{new Date().getFullYear()} Company Name. All Rights
            Reserved .
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
