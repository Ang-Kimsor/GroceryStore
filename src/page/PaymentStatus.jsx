import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faShop,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const PaymentStatus = () => {
  return (
    <main className="w-full md:py-20 py-5 flex flex-col gap-20 items-center justify-center ">
      <div className="w-[90%] h-full md:py-20 py-10 bg-[#f6f6f8] flex items-center justify-center flex-col">
        <div className="md:size-[60px] size-[50px] rounded-full flex items-center justify-center border-2 border-[#59C491] bg-[#59C49133]">
          <FontAwesomeIcon
            icon={faCheck}
            className="md:text-3xl text-xl text-[#59C491]"
          />
        </div>
        <p className="text-center text-[#59C491] md:text-2xl text-sm mt-5 font-medium">
          Your order is successfully place
        </p>
        <p className="text-center text-gray-500/80 md:text-[12px] text-[10px] px-5 mt-3 font-medium">
          Thank you for choosing JapanSouq.com, Your order will be generated
          based on your delivery request.
        </p>
        <p className="text-center text-gray-500/80 md:text-[12px] text-[10px] px-5 mt-3 font-medium">
          The receipt has been sent to your email.
        </p>
        <div className="w-fit h-fit flex gap-5  mt-5 p-3">
          <Link
            to={"/"}
            className="border border-[#59C491] text-[#59C491] py-3 px-5 md:text-sm text-[10px] flex items-center justify-center cursor-pointer "
          >
            <FontAwesomeIcon icon={faShop} className="mr-2" /> Continue Shopping
          </Link>
          <Link
            to={"/"}
            className={`bg-[#59C491] text-white py-3 px-5 md:text-sm text-[10px] flex items-center justify-center cursor-pointer`}
          >
            View Order
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="w-[90%] h-full md:py-20 py-10 bg-[#f6f6f8] flex items-center justify-center flex-col">
        <div className="md:size-[60px] size-[50px] rounded-full flex items-center justify-center border-2 border-[#FF6150] bg-[#FF615033]">
          <FontAwesomeIcon
            icon={faX}
            className="md:text-3xl text-xl text-[#FF6150]"
          />
        </div>
        <p className="text-center text-[#FF6150] md:text-2xl text-sm mt-5 font-medium">
          Sorry, Payment failed
        </p>
        <p className="text-center text-gray-500/80 md:text-[12px] text-[10px] px-5 mt-3 font-medium">
          Unfortunately. Your order cannot be complete. Please ensure that the
          billing address you provided is the same one where your debit/credit
          card is registered.
        </p>
        <p className="text-center text-gray-500/80 md:text-[12px] text-[10px] px-5 mt-3 font-medium">
          Alternatively, please try a different payment method.
        </p>
        <div className="w-fit h-fit flex gap-5  mt-5 p-3">
          <Link
            to={"/Cart"}
            className="border border-[#59C491] text-[#59C491] py-3 px-5 md:text-sm text-[10px] flex items-center justify-center cursor-pointer "
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Cart
          </Link>
          <Link
            to={"/Cart/Payment"}
            className={`bg-[#59C491] text-white py-3 px-5 md:text-sm text-[10px] flex items-center justify-center cursor-pointer`}
          >
            Pay Now
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaymentStatus;
