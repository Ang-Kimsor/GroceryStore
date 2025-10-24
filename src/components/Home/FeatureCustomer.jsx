import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatureTitle from "./FeatureTitle";
import FeatureCustomerCard from "./FeatureCustomerCard";
import { motion } from "framer-motion";
const featureCustomer = ({ title1, title2, des, rate, customer }) => {
  rate = Math.round(rate);
  // Feature Customer Section
  return (
    <>
      <div className="w-[95%] h-fit flex flex-wrap items-center ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
            hidden: {},
          }}
          className="xl:w-[30%] w-full h-fit flex flex-col items-center  py-10 pr-5"
        >
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              hidden: { opacity: 0, y: -10 },
            }}
            className="flex gap-1 mb-2 w-fit h-fit"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`text-[13px] ${
                  index < rate ? " text-amber-300" : "text-gray-300"
                }`}
              />
            ))}
          </motion.div>
          <FeatureTitle title1={title1} title2={title2} />
          <motion.p
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              hidden: { opacity: 0, y: -10 },
            }}
            className="md:text-sm text-[12px]  text-gray-800/50 mt-5 px-3 text-center"
          >
            {des}
          </motion.p>
        </motion.div>
        <motion.div
          className="xl:w-[70%] w-full h-fit place-items-center  grid md:grid-cols-3 grid-col-1 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
            hidden: {},
          }}
        >
          {customer.map(({ img, des, name, type }, index) => (
            <motion.div
              key={index}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                hidden: { opacity: 0, y: -10 },
              }}
            >
              <FeatureCustomerCard
                img={img}
                des={des}
                name={name}
                type={type}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default featureCustomer;
