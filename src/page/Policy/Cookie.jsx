import cookie from "./../../assets/cookie.jpg";
import { motion } from "framer-motion";
const Cookie = () => {
  return (
    <main className="w-full h-[500px]  flex items-center justify-center">
      <motion.div
        className="w-[500px] h-[400px] flex flex-col items-center py-5"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
          hidden: {},
        }}
      >
        <motion.img
          src={cookie}
          alt="Cookie"
          className="size-[150px]"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
            hidden: { opacity: 0, y: -20 },
          }}
        />
        <motion.h1
          className="mt-4 text-3xl font-medium"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          We use cookie
        </motion.h1>
        <motion.p
          className="text-center text-sm w-[70%] my-3 text-gray-500/80"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          This website uses cookies to ensure you get the best experience on our
          website.
        </motion.p>
        <motion.div
          className="w-full flex gap-5 justify-center mt-5"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <button className="bg-red-500 px-5 py-2  text-white font-medium rounded cursor-pointer">
            Reject
          </button>
          <button className="bg-[#59C491] px-5 py-2  text-white font-medium rounded cursor-pointer">
            Accept
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Cookie;
