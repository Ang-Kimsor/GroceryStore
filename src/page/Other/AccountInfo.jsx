import { Link } from "react-router-dom";
import img from "./../../assets/p1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AccountInfo = () => {
  const OrderLi = [
    {
      orderid: "123456",
      status: "In Progress",
      date: "Feb 02, 2025 19:28",
      total: 540,
    },
    {
      orderid: "123457",
      status: "In Progress",
      date: "Feb 03, 2025 19:28",
      total: 520,
    },
    {
      orderid: "123458",
      status: "Completed",
      date: "Feb 03, 2025 19:28",
      total: 530,
    },
    {
      orderid: "123459",
      status: "Cancelled",
      date: "Feb 04, 2025 19:28",
      total: 540,
    },
    {
      orderid: "123460",
      status: "Completed",
      date: "Feb 04, 2025 19:28",
      total: 500,
    },
  ];

  return (
    <main className="w-full my-5 md:p-8 p-3 bg-[#F6F6F8]">
      <motion.div
        className="w-full flex md:flex-row flex-col justify-between"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <motion.div
          className="md:w-[50%] w-full md:mb-0 mb-5"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <h1 className="text-lg font-semibold text-[#3C4242]">
            Hello, John Doe
          </h1>
          <p className="text-[11px] text-[#3C4242] mt-1">
            From your account dashboard, you can easily check & view your{" "}
            <Link className="text-[#59C491]">Recent Orders</Link>, manage your{" "}
            <Link className="text-[#59C491]">
              Shipping and Billing Addresses
            </Link>{" "}
            and edit your <Link className="text-[#59C491]">Password</Link> and{" "}
            <Link className="text-[#59C491]">Account Details</Link>.
          </p>
        </motion.div>

        <motion.div
          className="md:w-[350px] md:ml-3 bg-white flex flex-col px-2 py-4"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <h1 className="w-full text-center border-b-[0.5px] pb-2 text-[12px] border-gray-500/10">
            Account Information
          </h1>

          <div className="w-full mt-4 flex gap-5 px-3">
            <div className="size-[40px]">
              <img
                src={img}
                alt="Profile"
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

          <div className="flex flex-row md:flex-wrap gap-2 px-2">
            <button className="bg-[#59C491] text-white mt-2 text-[12px] px-2 py-2">
              Edit Account
            </button>
            <button className="bg-amber-500 text-white mt-2 text-[12px] px-2 py-2">
              Reset Password
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full mt-5 bg-white"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <motion.div
          className="w-full flex justify-between px-4 py-2"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <p className="text-[14px] font-medium">Recent Orders</p>
          <Link
            to={"TrackOrder/Detail"}
            className="px-5 bg-[#59C491] py-1 text-[12px] font-medium text-white"
          >
            View All
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </motion.div>

        <motion.div
          className="px-4 pb-5 overflow-x-auto"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <motion.table
            className="w-full border-collapse"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            <motion.thead
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                hidden: { opacity: 0, y: -20 },
              }}
            >
              <tr className="border-y border-[#F6F6F8]">
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
            </motion.thead>

            <motion.tbody
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
            >
              {OrderLi.map(({ orderid, status, date, total }, index) => (
                <motion.tr
                  key={index}
                  className="w-full border-b border-[#F6F6F8]"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                >
                  <td className="md:text-[12px] text-[9px] text-[#505157] py-3 text-start">
                    #{orderid}
                  </td>
                  <td
                    className={`uppercase md:text-[12px] text-[9px] font-medium py-3 text-start ${
                      status === "In Progress"
                        ? "text-[#F2C334]"
                        : status === "Completed"
                        ? "text-[#59C491]"
                        : "text-[#FF6150]"
                    }`}
                  >
                    {status}
                  </td>
                  <td className="md:text-[12px] text-[9px] text-[#505157] py-3 text-start">
                    {date}
                  </td>
                  <td className="md:text-[12px] text-[9px] text-[#505157] py-3 text-start">
                    ${total}
                  </td>
                  <td className="md:text-[12px] text-[9px] text-[#59C491] py-3 text-start">
                    <Link to={"TrackOrder/Detail"}>
                      View Details{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </motion.table>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default AccountInfo;
