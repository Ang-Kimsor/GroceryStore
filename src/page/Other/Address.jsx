import { useState } from "react";
import { AddressData } from "./../../data/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const Address = () => {
  const [Default, setDefault] = useState(0);
  let temp = AddressData;
  temp.filter;
  return (
    <main className="w-full my-5 bg-[#F6F6F8] p-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="md:text-xl text-sm font-medium   ">
          Your Shipping Address
        </h1>
        <button className="bg-[#59C491] text-white md:px-3 px-2 py-2 cursor-pointer md:text-sm text-[12px]">
          Add a new address
        </button>
      </div>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
        {temp.map(({ name, address, phone, email }, index) => (
          <div
            key={index}
            className={` p-5 border-2 ${
              Default == index
                ? " bg-[#E8F4F0] border-[#59C491]"
                : "bg-grey-500/50 border-gray-800/20"
            } rounded`}
          >
            <p className="text-[#3C4242] text-md font-medium">{name}</p>
            <address className="w-[70%] mt-2 text-sm text-[#3C4242]">
              {address}
            </address>
            <p className="mt-1 text-sm text-[#3C4242]">{phone}</p>
            <p className="mt-1 text-sm text-[#3C4242]">{email}</p>
            <div className="mt-5 flex w-full items-center justify-between">
              <div className="flex gap-3">
                <button className="size-[35px] rounded flex items-center justify-center cursor-pointer bg-[#59C491] text-[12px] text-white py-1">
                  <FontAwesomeIcon icon={faPen} className="text-lg" />
                </button>
                <button className="size-[35px] rounded flex items-center justify-center cursor-pointer bg-[#FF6150] text-[12px] text-white py-1">
                  <FontAwesomeIcon icon={faTrash} className="text-lg" />
                </button>
              </div>
              <div className="flex gap-1" onClick={() => setDefault(index)}>
                <input
                  type="checkbox"
                  className="accent-[#59C491] cursor-pointer"
                  defaultChecked={index == 0}
                  checked={index == Default}
                />
                <label className="text-[12px] text-[#3C4242] cursor-pointer">
                  Default
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Address;
