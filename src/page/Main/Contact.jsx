// Built in component and library
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Component lazy
const Address = lazy(() => import("../../components/Contact/Address"));
const Form = lazy(() => import("../../components/Contact/Form"));
// ContactUS Component page
const Contact = () => {
  return (
    <main className="flex justify-center mt-10 mb-20">
      <Suspense
        fallback={
          <>
            <Skeleton height="600px" baseColor="rgba(229, 231, 235)" />
            <Skeleton height="600px" baseColor="rgba(229, 231, 235)" />
          </>
        }
      >
        <motion.section
          className="md:w-[95%] w-full grid lg:grid-cols-2 gap-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.aside
            className="p-0 m-0"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          >
            <Form />
          </motion.aside>
          <motion.aside
            className="p-0 m-0"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          >
            <Address />
          </motion.aside>
        </motion.section>
      </Suspense>
    </main>
  );
};

export default Contact;
