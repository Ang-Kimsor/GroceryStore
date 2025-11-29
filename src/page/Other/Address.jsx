import { useState } from "react";
import { AddressData } from "./../../data/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const Address = () => {
  const [Default, setDefault] = useState(0);
  return (
    <main className="w-full my-5 bg-[#F6F6F8] p-5">
      <motion.div
        className="w-full flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h1 className="md:text-xl text-sm font-medium   ">
          Your Shipping Address
        </h1>
        <button className="bg-[#59C491] text-white md:px-3 px-2 py-2 cursor-pointer md:text-sm text-[12px]">
          Add a new address
        </button>
      </motion.div>
      <motion.div
        className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
          hidden: {},
        }}
      >
        {AddressData.map(({ name, address, phone, email }, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-sm transition-all duration-300 border 
        ${
          Default === index
            ? "bg-[#E8F4F0] border-[#59C491] shadow-[0_8px_20px_rgba(89,196,145,0.25)]"
            : "bg-white border-gray-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]"
        }`}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.5 } },
              hidden: { opacity: 0 },
            }}
          >
            {/* Name */}
            <p className="text-[#2B3636] text-lg font-semibold tracking-tight">
              {name}
            </p>

            {/* Address */}
            <address className="mt-2 text-sm text-[#586666] leading-relaxed w-[80%] not-italic">
              {address}
            </address>

            {/* Phone & Email */}
            <p className="mt-1 text-sm text-[#586666]">{phone}</p>
            <p className="mt-1 text-sm text-[#586666]">{email}</p>

            {/* Footer Tools */}
            <div className="mt-6 flex w-full items-center justify-between">
              {/* Edit / Delete Buttons */}
              <div className="flex gap-3">
                <button className="size-[38px] rounded-xl flex items-center justify-center cursor-pointer bg-[#59C491] text-white shadow hover:opacity-90 transition">
                  <FontAwesomeIcon icon={faPen} className="text-base" />
                </button>
                <button className="size-[38px] rounded-xl flex items-center justify-center cursor-pointer bg-[#FF6150] text-white shadow hover:opacity-90 transition">
                  <FontAwesomeIcon icon={faTrash} className="text-base" />
                </button>
              </div>

              {/* Default Checkbox */}
              <div
                className="h-[38px] flex items-center gap-2 cursor-pointer"
                onClick={() => setDefault(index)}
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#59C491] cursor-pointer"
                  checked={index === Default}
                  onChange={() => setDefault(index)}
                />
                <label className="text-sm text-[#2B3636] cursor-pointer select-none">
                  Default
                </label>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Address;
