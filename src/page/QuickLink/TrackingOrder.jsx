import React from "react";

import img from "./../../assets/trackOrder.jpg";
import { Link } from "react-router-dom";
const TrackingOrder = ({ dashboard }) => {
  return (
    <main
      className={`w-full ${
        dashboard ? "lg:h-[400px]" : "h-fit"
      } pt-5 mb-10 flex gap-20 items-start justify-center `}
    >
      <div
        className={`w-[95%] ${
          dashboard ? "lg:h-[400px]" : "h-fit"
        } py-10 lg:pr-10 bg-[#f6f6f8] grid lg:grid-cols-2 grid-cols-1`}
      >
        <div className="lg:px-10 px-5 size-full">
          <img
            src={img}
            alt=""
            className="size-full object-cover object-center"
          />
        </div>
        <div className=" lg:px-5 mx-5 lg:m-0 mt-5  bg-white p-4">
          <h1 className="text-xl font-semibold">Track Order</h1>
          <p className="text-[#505157] lg:text-[12px] text-[10px] mt-3">
            To track your order please enter your order ID in the input field
            below and press the "Track Order" button. this was given to you on
            your receipt and in the confirmation email you should have received.
          </p>
          <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col">
              <label className="text-[#505157] text-[13px] mb-2">
                Order ID
              </label>
              <input
                type="text"
                className="pl-2 border border-[#59C49133] h-[45px] placeholder:text-[#807D7E] placeholder:text-[12px] outline-0"
                placeholder="Enter Order ID"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#505157] text-[13px] mb-2">
                Billing Email
              </label>
              <input
                type="email"
                className="pl-2 border border-[#59C49133] h-[45px] placeholder:text-[#807D7E] placeholder:text-[12px] outline-0"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          <div className="mt-8 mb-6">
            <Link
              to={
                !dashboard
                  ? "/TrackOrder/Detail"
                  : "/UserDashboard/TrackOrder/Detail"
              }
              className="bg-[#59C491] px-5 py-3 text-[12px] text-white"
            >
              Track Order
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrackingOrder;
