import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCheck,
  faSuitcase,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const TrackingOrderDetail = () => {
  const { Cart } = useCart();
  const totalPrice = Cart.reduce((sum, item) => {
    return sum + item.price * (1 - item.discount / 100) * item.qty;
  }, 0);
  return (
    <main className="w-full my-2 md:py-10 py-5 flex flex-col items-center justify-center ">
      <div className="lg:w-[95%] w-[95%] p-8 bg-[#f6f6f8]">
        <div className="flex flex-row gap-2 text-xl font-semibold">
          <Link to={"/TrackOrder"}>&lt;</Link>
          <h1>Order Details</h1>
        </div>
        <div className="w-full p-4 bg-[#E8F4F0] border border-[#59C491] flex flex-row items-center justify-between mt-5">
          <div>
            <p className="text-[#3C4242] md:text-md text-[12px] font-medium">
              #48759283
            </p>
            <p className="text-[#3C4242] text-[10px] mt-2">
              {Cart.length} Items • Order Placed in 17 Feb, 2025 at 17:32
            </p>
          </div>
          <div>
            <p className="text-[#59C491] text-lg md:text-[30px] font-medium">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
        <h1 className="mt-5 text-[14px] text-[#3C4242]">
          Order expected arrival 23 Feb, 2025
        </h1>
        <div className="w-full h-[70px] relative mt-8 flex">
          <div className="w-full absolute  h-[15px] bg-[#E8F4F0] z-0"></div>
          <div className="w-[26%] absolute h-[15px]  bg-[#59C491] z-0"></div>
          <div className="size-[22px] top-[-3px] left-[-3px] flex justify-center items-center bg-[#59C491] rounded-full z-10 absolute">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-[11px] font-medium text-white"
            />
          </div>
          <div className="absolute bottom-4 w-fit">
            <FontAwesomeIcon icon={faBook} className="text-[#59C491]" />
            <p className="absolute left-[50%] text-[10px]  -translate-x-1/2">
              Ordered
            </p>
          </div>
          <div className="size-[22px] top-[-3px] left-[25%] bg-[#59C491]  rounded-full z-10 absolute"></div>
          <div className="absolute bottom-4 w-fit left-[25.3%]">
            <FontAwesomeIcon icon={faSuitcase} className="text-[#59C491]" />
            <p className="absolute left-[50%] text-[10px]  -translate-x-1/2">
              Packaging
            </p>
          </div>
          <div className="size-[22px] top-[-3px] left-[50%] bg-white border-2 border-[#59C491] rounded-full z-10 absolute"></div>
          <div className="absolute bottom-4 w-fit left-[50.3%] opacity-50">
            <FontAwesomeIcon icon={faTruck} className="text-[#59C491]" />
            <p className="absolute left-[50%] text-[10px]  -translate-x-1/2">
              Delivery
            </p>
          </div>
          <div className="size-[22px] top-[-3px] left-[75%] bg-white border-2 border-[#59C491] rounded-full z-10 absolute"></div>
          <div className="absolute bottom-4 w-fit left-[75.3%] opacity-50">
            <FontAwesomeIcon icon={faCheck} className="text-[#59C491]" />
            <p className="absolute left-[50%] text-[10px]  -translate-x-1/2">
              Delivered
            </p>
          </div>
          <div className="size-[22px] top-[-3px] left-[99%] bg-white border-2 border-[#59C491] rounded-full z-10 absolute"></div>
          <div className="absolute bottom-4 w-fit left-[99.3%] opacity-50">
            <FontAwesomeIcon icon={faUser} className="text-[#59C491]" />
            <p className="absolute left-[50%] text-[10px]  -translate-x-1/2">
              Received
            </p>
          </div>
        </div>
        <div className="w-full mt-5 flex gap-4 flex-col">
          <h1 className="text-sm font-medium">Order Activity</h1>
          <div className="w-full flex gap-3">
            <div className="md:size-[30px] size-[25px] bg-[#E8F4F0] rounded-[2px] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#59C491] md:text-sm text-[12px]"
              />
            </div>
            <h1 className="text-[10px]">
              Your Order has been delivered. Thank you for shopping at
              JapanSouq.
              <br />
              <p className="text-[#ADADAD]">20 Feb, 2025 at 19:32</p>
            </h1>
          </div>
          <div className="w-full flex gap-3">
            <div className="md:size-[30px] size-[25px] bg-[#E8F4F0] rounded-[2px] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#59C491] md:text-sm text-[12px]"
              />
            </div>
            <h1 className="text-[10px]">
              Your Order has been delivered. Thank you for shopping at
              JapanSouq.
              <br />
              <p className="text-[#ADADAD]">20 Feb, 2025 at 19:32</p>
            </h1>
          </div>
          <div className="w-full flex gap-3">
            <div className="md:size-[30px] size-[25px] bg-[#E8F4F0] rounded-[2px] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#59C491] md:text-sm text-[12px]"
              />
            </div>
            <h1 className="text-[10px]">
              Your Order has been delivered. Thank you for shopping at
              JapanSouq.
              <br />
              <p className="text-[#ADADAD]">20 Feb, 2025 at 19:32</p>
            </h1>
          </div>
          <div className="w-full flex gap-3">
            <div className="md:size-[30px] size-[25px] bg-[#E8F4F0] rounded-[2px] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#59C491] md:text-sm text-[12px]"
              />
            </div>
            <h1 className="text-[10px]">
              Your Order has been delivered. Thank you for shopping at
              JapanSouq.
              <br />
              <p className="text-[#ADADAD]">20 Feb, 2025 at 19:32</p>
            </h1>
          </div>
          <div className="w-full flex gap-3">
            <div className="md:size-[30px] size-[25px] bg-[#E8F4F0] rounded-[2px] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#59C491] md:text-sm text-[12px]"
              />
            </div>
            <h1 className="text-[10px]">
              Your Order has been delivered. Thank you for shopping at
              JapanSouq.
              <br />
              <p className="text-[#ADADAD]">20 Feb, 2025 at 19:32</p>
            </h1>
          </div>
          <div className="w-full flex gap-3">
            <div className="md:size-[30px] size-[25px] bg-[#E8F4F0] rounded-[2px] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[#59C491] md:text-sm text-[12px]"
              />
            </div>
            <h1 className="text-[10px]">
              Your Order has been delivered. Thank you for shopping at
              JapanSouq.
              <br />
              <p className="text-[#ADADAD]">20 Feb, 2025 at 19:32</p>
            </h1>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-sm font-medium">Item ({Cart.length})</h1>
          <div className="mt-2">
            {Cart.map(({ img, name, price, discount, qty }, index) => (
              <div
                key={index}
                className={`${
                  Cart.length - 1 == index ? "border-y" : "border-t"
                } h-[65px] border-gray-500/40 flex items-center justify-between`}
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={img}
                    alt=""
                    className="size-[50px] object-cover object-center"
                  />
                  <h1 className="self-start mt-2 text-[13px]">{name}</h1>
                </div>
                <p className="flex flex-col items-end">
                  <span className="text-[12px] text-gray-500/80 font-medium">
                    {qty} x {(price * (1 - discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-[15px] font-normal tracking-wider">
                    ${(qty * price * (1 - discount / 100)).toFixed(2)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-5">
          <ul className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 gap-5">
            <li>
              <h1 className="text-sm font-medium mb-3">Billing Address</h1>
              <p className="text-[12px] text-[#505157] mt-1">John Doe</p>
              <p className="text-[12px] text-[#505157] mt-1">
                32B, Building Name, Landmark, Location, StreetName, State, City
                and Town, Phnom Penh, Cambodia
              </p>
              <p className="text-[12px] text-[#505157] mt-1">
                Phone Number: +855 123456789
              </p>
              <p className="text-[12px] text-[#505157] mt-1">
                Email: example@gmail.com
              </p>
            </li>
            <li>
              <h1 className="text-sm font-medium mb-3">Shipping Address</h1>
              <p className="text-[12px] text-[#505157] mt-1">John Doe</p>
              <p className="text-[12px] text-[#505157] mt-1">
                32B, Building Name, Landmark, Location, StreetName, State, City
                and Town, Phnom Penh, Cambodia
              </p>
              <p className="text-[12px] text-[#505157] mt-1">
                Phone Number: +855 123456789
              </p>
              <p className="text-[12px] text-[#505157] mt-1">
                Email: example@gmail.com
              </p>
            </li>
            <li>
              <h1 className="text-sm font-medium mb-3">Quick Link</h1>
              <p className="text-[12px] text-[#505157] mt-1">
                Terms & Conditions
              </p>
              <p className="text-[12px] text-[#505157] mt-1">Return Policy</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default TrackingOrderDetail;
