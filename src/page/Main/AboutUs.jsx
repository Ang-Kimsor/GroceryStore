// Built in component and library
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense, lazy } from "react";
// Data
import {
  FeatureBigData,
  FeatureStoryData,
  FeatureCustomerData,
  FeatureVisionData,
  FeaturePayData,
  FeatureSubData,
} from "../../data/About";
// Component Lazy
const FeatureTitle = lazy(() => import("../../components/About/FeatureTitle"));
const FeatureBig = lazy(() => import("../../components/About/FeatureBig"));
const FeatureStory = lazy(() => import("../../components/About/FeatureStory"));
const FeatureCustomer = lazy(() =>
  import("../../components/About/FeatureCustomer")
);
const FeatureSubscribe = lazy(() =>
  import("../../components/About/FeatureSubscribe")
);
const FeatureVision = lazy(() =>
  import("../../components/About/FeatureVision")
);
const FeaturePay = lazy(() => import("../../components/About/FeaturePay"));
// AboutUs component lazy
const AboutUs = () => {
  return (
    <>
      <main className="w-full bg-white h-fit">
        {/* Feature Big */}
        <Suspense
          fallback={
            <Skeleton
              width="100%"
              height="500px"
              baseColor="rgba(229, 231, 235)"
            />
          }
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <FeatureBig img={FeatureBigData.img} title={FeatureBigData.title} />
          </motion.div>
        </Suspense>

        {/* Feature Story */}
        <Suspense
          fallback={
            <section className="w-full h-[500px] md:py-10 py-5">
              <Skeleton width="100%" height="100%" />
            </section>
          }
        >
          <motion.section
            className="flex items-center justify-center w-full py-5 mb-20 h-fit md:py-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <FeatureStory
              img={FeatureStoryData.img}
              title1={FeatureStoryData.title1}
              title2={FeatureStoryData.title2}
              des={FeatureStoryData.des}
            />
          </motion.section>
        </Suspense>

        {/* Feature Customer */}
        <Suspense
          fallback={
            <section className="w-full h-[500px] md:py-10 py-5">
              <Skeleton width="100%" height="100%" />
            </section>
          }
        >
          <motion.section
            className="w-full h-fit flex items-center bg-[#fdeedb] justify-center py-10 mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <FeatureCustomer
              title1={FeatureCustomerData.title1}
              title2={FeatureCustomerData.title2}
              des={FeatureCustomerData.des}
              rate={FeatureCustomerData.rate}
              customer={FeatureCustomerData.customer}
            />
          </motion.section>
        </Suspense>

        {/* Feature Vision */}
        <section className="flex flex-col items-center justify-center w-full py-10 mb-16 h-fit md:py-16">
          <Suspense
            fallback={
              <>
                <div className="w-[95%] flex flex-col items-center  mb-10">
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
                </div>
                <div className="grid lg:w-[98vw] w-[80vw] grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-3">
                  {FeatureVisionData.map((_, index) => (
                    <div key={index} className="lg:h-[300px] h-[280px]">
                      <Skeleton height="100%" baseColor="rgba(229,231,235)" />
                    </div>
                  ))}
                </div>
              </>
            }
          >
            <motion.div
              className="w-[95%] flex flex-col items-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <FeatureTitle
                title1={"Purpose in action"}
                title2={"Our vision, Mission & values"}
              />
            </motion.div>
            <motion.div
              className="w-[95%] grid lg:grid-cols-3 lg:gap-5 gap-24 mt-20 place-items-center"
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
              {FeatureVisionData.map(({ icon, title, des }, index) => (
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
                  <FeatureVision icon={icon} title={title} des={des} />
                </motion.div>
              ))}
            </motion.div>
          </Suspense>
        </section>

        {/* Feature Payment */}
        <section className="bg-[#E8F4F0] w-full h-fit flex items-center justify-center md:pt-20 pt-10">
          <Suspense
            fallback={
              <div className="w-[90%]  grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5">
                {FeaturePayData.map((_, index) => (
                  <Skeleton key={index} height="80px" />
                ))}
              </div>
            }
          >
            <motion.div
              className="w-[90%]  grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5"
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
              {FeaturePayData.map(({ icon, title, des }, index) => (
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
                  <FeaturePay key={index} icon={icon} title={title} des={des} />
                </motion.div>
              ))}
            </motion.div>
          </Suspense>
        </section>

        {/* Feature Subscribe */}
        <Suspense
          fallback={
            <section className="w-full h-[500px] md:py-10 py-5">
              <Skeleton width="100%" height="100%" />
            </section>
          }
        >
          <motion.section
            className="lg:w-full h-fit flex items-center  justify-center py-20 bg-[#E8F4F0]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <FeatureSubscribe
              title={FeatureSubData.title}
              des={FeatureSubData.des}
              link={FeatureSubData.link}
              path={FeatureSubData.path}
              img={FeatureSubData.img}
            />
          </motion.section>
        </Suspense>
      </main>
    </>
  );
};

export default AboutUs;
