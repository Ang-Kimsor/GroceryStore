import React from "react";
import { Link } from "react-router-dom";
import img from "./../assets/p1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const AccountInfo = () => {
  return (
    <main className="w-full my-5 md:p-8 p-3 bg-[#F6F6F8]">
      <div className="w-full flex md:flex-row flex-col justify-between">
        <div className="md:w-[60%] w-full md:mb-0 mb-5">
          <h1 className="text-lg font-semibold text-[#3C4242]">
            Hello, John Doe
          </h1>
          <p className="text-[11px] text-[#3C4242] mt-1">
            From your account dashboard. you can easily check & view your{" "}
            <Link className="text-[#59C491]">Recent Order</Link>, manage your{" "}
            <Link className="text-[#59C491]">
              Shipping and Billing Addresses
            </Link>{" "}
            and edit your <Link className="text-[#59C491]">Password</Link> and{" "}
            <Link className="text-[#59C491]">Account Details</Link>
          </p>
        </div>
        <div className="md:w-[300px] bg-white flex flex-col px-2 py-4">
          <h1 className="w-full text-center border-b-[0.5px] pb-2 text-[12px] border-gray-500/10">
            Account Information
          </h1>
          <div className="w-full mt-4 flex gap-5 px-3">
            <div className="size-[40px] ">
              <img
                src={img}
                alt=""
                className="size-full object-cover object-center rounded-full"
              />
            </div>
            <div className="flex flex-col text-[#3C4242]">
              <p className="text-[11px]">John Doe</p>
              <p className="text-[9px]">Phnom Penh - 12072, Cambodia</p>
            </div>
          </div>
          <div className="flex flex-col text-[#3C4242] px-3 mt-3 gap-1">
            <p className="text-[11px]">Email: example@gmail.com</p>
            <p className="text-[11px]">Phone: +855 123 456 789</p>
          </div>
          <div className="flex flex-row md:justify-center md:flex-wrap gap-2 px-2">
            <button className="bg-[#59C491] text-white h-fit mt-2 text-[12px] px-2 py-1">
              Edit Account
            </button>
            <button className="bg-amber-500 text-white h-fit mt-2 text-[12px] px-2 py-1">
              Reset Password
            </button>
            <button className="bg-red-500 text-white md:w-[80%] h-fit mt-2 text-[12px] px-2 py-1">
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 bg-white">
        <div className="w-full flex justify-between px-4 py-2">
          <p className="text-[14px] font-medium">Recent Order</p>
          <button className="px-5 bg-[#59C491] py-1 text-[12px] font-medium text-white">
            View All
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
        <div className="px-4 pb-5">
          <table className="w-full">
            <thead className="w-full">
              <tr className="w-full border-y border-[#F6F6F8]">
                <th className="md:text-[13px] text-[10px] text-[#3C4242] font-normal py-3 text-start">
                  Order ID
                </th>
                <th className="md:text-[13px] text-[10px] text-[#3C4242] font-normal py-3 text-start">
                  Status
                </th>
                <th className="md:text-[13px] text-[10px] text-[#3C4242] font-normal py-3 text-start">
                  Order Date
                </th>
                <th className="md:text-[13px] text-[10px] text-[#3C4242] font-normal py-3 text-start">
                  Total
                </th>
                <th className="md:text-[13px] text-[10px] text-[#3C4242] font-normal py-3 text-start">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  #123456
                </td>
                <td className="uppercase md:text-[12px] text-[8px] text-[#F2C334] font-normal py-3 text-start">
                  In Progress
                </td>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  Feb 02, 2025 19:28
                </td>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  $540(4 Items)
                </td>
                <td className="md:text-[12px] text-[8px] text-[#59C491] font-normal py-3 text-start ">
                  <Link>
                    View Details
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  #123456
                </td>
                <td className="uppercase md:text-[12px] text-[8px] text-[#59C491] font-normal py-3 text-start">
                  Completed
                </td>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  Feb 02, 2025 19:28
                </td>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  $540(4 Items)
                </td>
                <td className="md:text-[12px] text-[8px] text-[#59C491] font-normal py-3 text-start ">
                  <Link>
                    View Details
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  #123456
                </td>
                <td className="uppercase md:text-[12px] text-[8px] text-[#FF6150] font-normal py-3 text-start">
                  Cancelled
                </td>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  Feb 02, 2025 19:28
                </td>
                <td className="md:text-[12px] text-[8px] text-[#505157] font-normal py-3 text-start">
                  $540(4 Items)
                </td>
                <td className="md:text-[12px] text-[8px] text-[#59C491] font-normal py-3 text-start ">
                  <Link>
                    View Details
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AccountInfo;
