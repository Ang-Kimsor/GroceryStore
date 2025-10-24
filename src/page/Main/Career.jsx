// Built in component and library
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Data
import { FeatureBigData, FeatureJobCardData } from "../../data/Career";
// Component Lazy
const FeatureBig = lazy(() => import("../../components/Career/FeatureBig"));
const FeatureSearch = lazy(() =>
  import("../../components/Career/FeatureSearch")
);
const FeatureJobCard = lazy(() =>
  import("../../components/Career/FeatureJobCard")
);
// Career Component Page
const Career = () => {
  return (
    <>
      <main className="w-full bg-white h-fit">
        {/* Feature Big */}
        <Suspense
          fallback={
            <Skeleton
              className="mb-20"
              width="100%"
              height="500px"
              baseColor="rgba(229, 231, 235)"
            />
          }
        >
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <FeatureBig img={FeatureBigData.img} title={FeatureBigData.title} />
          </motion.section>
        </Suspense>

        {/* Feature Search and Filter  */}
        <Suspense
          fallback={
            <section className="mb-10">
              <div className="flex flex-col items-center w-full h-fit">
                <Skeleton
                  baseColor="rgba(229, 231, 235)"
                  width="320px"
                  height="15px"
                />
                <Skeleton
                  baseColor="rgba(229, 231, 235)"
                  width="320px"
                  height="35px"
                />
                <div className="h-[150px] md:w-[95vw] w-[98vw] grid mt-10 md:grid-cols-2 grid-cols-1 gap-4 items-center justify-between">
                  <div className="w-full">
                    <Skeleton
                      width="100%"
                      height="60px"
                      baseColor="rgba(229,231,235)"
                    />
                  </div>
                  <div className="grid w-full grid-cols-3 gap-3 lg:grid-cols-3 md:grid-cols-3">
                    <Skeleton height="60px" baseColor="rgba(229,231,235)" />
                    <Skeleton height="60px" baseColor="rgba(229,231,235)" />
                    <Skeleton height="60px" baseColor="rgba(229,231,235)" />
                  </div>
                </div>
              </div>
            </section>
          }
        >
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <FeatureSearch data={FeatureJobCardData} />
          </motion.section>
        </Suspense>

        {/* Feature Job */}
        <Suspense
          fallback={
            <section className="flex justify-center py-16">
              <div className="w-[95vw]">
                <Skeleton
                  className="mb-10"
                  width="320px"
                  height="35px"
                  baseColor="rgba(229,231,235)"
                />
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2">
                  {FeatureJobCardData.map((_, index) => (
                    <div key={index} className="md:h-[300px] h-[450px]">
                      <Skeleton height="100%" baseColor="rgba(229,231,235)" />
                    </div>
                  ))}
                </div>
                <Skeleton
                  className="mt-10"
                  width="320px"
                  height="35px"
                  baseColor="rgba(229,231,235)"
                />
              </div>
            </section>
          }
        >
          <section className="py-16 flex justify-center bg-[#E8F4F0]">
            <div className="w-[95%]">
              <motion.h1
                className="mb-10 text-xl font-medium text-center capitalize md:text-start md:text-3xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                Explore the open position
              </motion.h1>
              <motion.div
                className="grid grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {FeatureJobCardData.map(
                  ({ title, business, type, location }, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6, ease: "easeInOut" },
                        },
                      }}
                    >
                      <FeatureJobCard
                        title={title}
                        business={business}
                        type={type}
                        location={location}
                      />
                    </motion.div>
                  )
                )}
              </motion.div>
              <motion.h1
                className="mt-10 text-lg font-medium text-center capitalize md:text-start md:text-xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                Couldn't Find your prefered position?{" "}
                <Link
                  to={"/Contact"}
                  className="text-[#59C491] hover:underline"
                >
                  Contact Us
                </Link>
              </motion.h1>
            </div>
          </section>
        </Suspense>
      </main>
    </>
  );
};

export default Career;
