import React from "react";
import { Link } from "react-router-dom";
import CartCard from "../components/Cart/CartCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEye,
  faEyeSlash,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className="w-full flex justify-center pb-10">
      <main className="lg:w-[95%] w-[99%] h-fit ">
        <h1 className="py-12 text-[#59C491] lg:pl-0 pl-5">Cart & Checkout</h1>
        <div className="grid lg:grid-cols-2 lg:gap-20 gap-5">
          <aside className="md:p-5 p-2 bg-[#f8f8f8]">
            <div className="w-full h-[55px] border border-[#59C491] bg-white flex items-center justify-center">
              <svg
                className="shrink-0 inline w-3 h-3 mr-1 text-[#59C491]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <p className="md:text-[13px] text-[9px] text-center  font-normal">
                You only need $5.00 more to get free shipping!
                <Link to={"/OurStore"} className="text-[#59C491] ml-2">
                  Continue Shopping &gt;
                </Link>
              </p>
            </div>
            <div className="my-10">
              <p className="text-sm">
                Have a coupon?{" "}
                <span className="text-[#59C491] cursor-pointer">
                  Enter your code
                </span>
              </p>
              <div className="mt-5  h-[40px] ">
                <input
                  type="text"
                  className="w-[180px] h-full outline-none pl-1 bg-white placeholder:text-[12px]"
                  placeholder="Coupon Code"
                />
                <button className="text-[13px] uppercase text-white cursor-pointer px-3 bg-[#59C491] h-full">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-xl font-medium mb-5">Your Cart</h1>
              <div className="bg-white w-full p-5 flex flex-col gap-5">
                <CartCard />
              </div>
              <div className="w-full text-md mt-7 flex justify-between">
                <p>Subtotal (4)</p>
                <p>$12.34</p>
              </div>
              <div className="w-full text-md mt-7 flex justify-between">
                <p>Tax (5% VAT)</p>
                <p>$2.20</p>
              </div>
              <div className="w-full text-md mt-7 flex justify-between">
                <p>Shipping (Flexible Shipping)</p>
                <p>$1.23</p>
              </div>
              <div className="w-full text-md font-medium mt-7 flex justify-between">
                <p>Total Amount: </p>
                <p>$11.34</p>
              </div>
              <p className="text-[12px] mt-7 text-gray-500/80 font-medium">
                The total amount you pay includes all applicable customs duties
                & taxes. Lorem ipsum is simply dummy text of the printing and
                typesetting industry standard dummy text ever since.
              </p>
            </div>
          </aside>
          <form className="lg:px-10 px-2">
            <div className="border-b border-gray-500/80 pb-3 flex items-center justify-between">
              <p className="md:text-xl text-[12px] font-medium mt-3 ">
                Billing & Shipping Information
              </p>
              <p className="text-[12px] text-gray-500/80 text-center mt-3 font-medium">
                Have an Account?
                <Link to={"/Login"} className="text-[#59C491] ml-2">
                  Login
                </Link>
              </p>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="mt-6 w-full h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
            />

            <div className="flex items-center pt-5">
              <input type="checkbox" className=" size-4 accent-[#59C491]" />
              <span className="capitalize ml-2 text-gray-500/80 text-[12px]">
                Email me with news and offers
              </span>
            </div>
            <div className="py-5 ">
              <p className="md:text-xl text-[12px] font-medium mt-3 ">
                Billing Address
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2  h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2  h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
            />
            <input
              type="tel"
              placeholder="Company (Optional)"
              className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
            />
            <select className="w-full mt-4 h-[40px] outline-none pl-2 text-[#807D7E] text-[12px] bg-[#F6F6F8]">
              <option value="" className="text-[#807D7E] text-[12px]">
                Cambodia
              </option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="Address"
                className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
              />
              <FontAwesomeIcon
                icon={faLocationDot}
                className="absolute right-1 top-[50%] mt-2 cursor-pointer -translate-y-1/2 text-[#807D7E]"
              />
            </div>
            <input
              type="text"
              placeholder="Apartment, Suite, Etc. (Optional)"
              className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
            />
            <div className="flex gap-3 mt-4">
              <input
                type="text"
                placeholder="Town/City"
                className="w-1/2  h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
              />
              <input
                type="text"
                placeholder="State"
                className="w-1/2  h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
              />
            </div>
            <div className="flex items-center pt-5">
              <input type="checkbox" className=" size-4 accent-[#59C491]" />
              <span className="capitalize ml-2 text-gray-500/80 text-[12px]">
                Create an Account?
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="absolute right-1 top-[50%] mt-2 cursor-pointer -translate-y-1/2 text-[#807D7E]"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
              />
              <FontAwesomeIcon
                icon={faEye}
                className="absolute right-1 top-[50%] mt-2 cursor-pointer -translate-y-1/2 text-[#807D7E]"
              />
            </div>
            <div className="mt-4">
              <p className="text-[12px] text-[#807D7E]">
                Your password must have at least:
              </p>
              <span
                className={`text-[12px] text-[#807D7E] mt-2 flex gap-2 items-center`}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>8 Characters</p>
              </span>
              <span
                className={`text-[12px] text-[#807D7E] mt-2 flex gap-2 items-center`}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>1 Special Character (Example: # $ @ & ?)</p>
              </span>
              <span
                className={`text-[12px] text-[#807D7E]  mt-2 flex gap-2 items-center`}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>1 Uppercase and 1 Lowercase</p>
              </span>
              <span
                className={`text-[12px] text-[#807D7E]  mt-2 flex gap-2 items-center`}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>1 Numberical Digit</p>
              </span>
            </div>
            <div className="flex items-center pt-5">
              <input type="checkbox" className=" size-4 accent-[#59C491]" />
              <span className="capitalize ml-2 text-gray-500/80 text-[12px]">
                Ship to a different address?
              </span>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Cart;
