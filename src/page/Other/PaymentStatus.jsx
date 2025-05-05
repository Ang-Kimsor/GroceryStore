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
  const Condition = 0;
  return (
    <main className="w-full md:py-20 py-5 flex flex-col gap-20 items-center justify-center ">
      <div className="w-[90%] h-full md:py-20 py-10 bg-[#f6f6f8] flex items-center justify-center flex-col">
        <div
          className={`md:size-[60px] size-[50px] rounded-full flex items-center justify-center border-2 ${
            Condition
              ? "border-[#59C491] bg-[#59C49133]"
              : "border-[#FF6150] bg-[#FF615033]"
          }`}
        >
          <FontAwesomeIcon
            icon={Condition ? faCheck : faX}
            className={`md:text-3xl text-xl ${
              Condition ? "text-[#59C491]" : "text-[#FF6150]"
            }`}
          />
        </div>
        <p
          className={`text-center ${
            Condition ? "text-[#59C491]" : "text-[#FF6150]"
          } md:text-2xl text-sm mt-5 font-medium`}
        >
          {Condition
            ? "Your order is successfully place"
            : "Sorry, Payment failed"}
        </p>
        <p className="text-center text-gray-500/80 md:text-[12px] text-[10px] px-5 mt-3 font-medium">
          {Condition
            ? "Thank you for choosing JapanSouq.com, Your order will be generated based on your delivery request."
            : "Unfortunately. Your order cannot be complete. Please ensure that the billing address you provided is the same one where your debit/credit card is registered."}
        </p>
        <p className="text-center text-gray-500/80 md:text-[12px] text-[10px] px-5 mt-3 font-medium">
          {Condition
            ? "The receipt has been sent to your email."
            : "Alternatively, please try a different payment method."}
        </p>
        <div className="w-fit h-fit flex gap-5  mt-5 p-3">
          <Link
            to={`${Condition ? "/" : "/Cart"}`}
            className="border border-[#59C491] text-[#59C491] py-3 px-5 md:text-sm text-[10px] flex items-center justify-center cursor-pointer "
          >
            <FontAwesomeIcon
              icon={Condition ? faShop : faArrowLeft}
              className="mr-2"
            />
            {Condition ? "Continue Shopping" : "Back to Cart"}
          </Link>
          <Link
            to={`${Condition ? "/TrackOrder/Detail" : "/Cart/Payment"}`}
            className={`bg-[#59C491] text-white py-3 px-5 md:text-sm text-[10px] flex items-center justify-center cursor-pointer`}
          >
            {Condition ? "View Order" : "Pay Now"}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaymentStatus;
