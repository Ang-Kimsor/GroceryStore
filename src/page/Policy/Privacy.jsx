import { Privacy as Data } from "../../data/Term-Condition";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense, lazy } from "react";

const List = lazy(() => import("../../components/Term-Condition-Policy/List"));

const Privacy = () => {
  return (
    <main className="w-full md:h-[380px] flex justify-center md:items-center mt-5 mb-20">
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
              transition: { staggerChildren: 0.2 },
            },
            hidden: {},
          }}
        >
          {Data.map(({ title, list }, index) => (
            <motion.div
              key={`privacy-item-${index}`}
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
  );
};

export default Privacy;
