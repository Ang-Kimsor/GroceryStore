import { Data } from "../../data/Term-Condition";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const List = lazy(() => import("../../components/Term-Condition-Policy/List"));
const TermCondition = () => {
  return (
    <>
      <main className="w-full h-fit  flex justify-center mt-5 mb-20">
        <Suspense
          fallback={
            <div className="pl-5 list-disc flex flex-col gap-2 mt-4">
              {Data.map(({ list }, i) => (
                <div key={i}>
                  <Skeleton
                    width="250px"
                    height="30px"
                    baseColor="rgba(229, 231, 235)"
                  />
                  {list.map((_, j) => (
                    <Skeleton
                      key={`${i}.${j}`}
                      width="97vw"
                      height="15px"
                      baseColor="rgba(229, 231, 235)"
                    />
                  ))}
                </div>
              ))}
            </div>
          }
        >
          <motion.section
            className="w-[95%]"
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
            {Data.map(({ title, list }, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                  hidden: { opacity: 0, y: -20 },
                }}
              >
                <List title={title} list={list} />
              </motion.div>
            ))}
          </motion.section>
        </Suspense>
      </main>
    </>
  );
};

export default TermCondition;
