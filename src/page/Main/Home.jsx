// Built in component and library
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Data
import {
  FeatureBigData,
  FeatureSmallData,
  FeatureSellerData,
  FeatureSellerDataBanner,
  FeatureCategoryData,
  FeatureDiscoverData,
  FeatureStoryData,
  FeatureCustomerData,
  FeatureBrandData,
} from "../../data/Home";
// Component Lazy
const FeatureBig = lazy(() => import("./../../components/Home/FeatureBig"));
const FeatureSmall = lazy(() => import("./../../components/Home/FeatureSmall"));
const FeatureSellerBanner = lazy(() =>
  import("./../../components/Home/FeatureSellerBanner")
);
const FeatureTitle = lazy(() => import("./../../components/Home/FeatureTitle"));
const FeatureCategory = lazy(() =>
  import("./../../components/Home/FeatureCategory")
);
const FeatureStory = lazy(() => import("./../../components/Home/FeatureStory"));
const FeatureCustomer = lazy(() =>
  import("./../../components/Home/FeatureCustomer")
);
const ProductCard = lazy(() => import("../../components/OurStore/ProductCard"));
// Home Component Page
const Home = () => {
  const StockSort1 = FeatureSellerData.sort((a, b) => b.stock - a.stock);
  const StockSort2 = FeatureDiscoverData.sort((a, b) => b.stock - a.stock);
  return (
    <>
      <main className="w-full h-fit bg-white">
        {/* Feature Hero Big */}
        <Suspense
          fallback={
            <section className="w-full h-[450px] mb-12">
              <Skeleton
                baseColor="rgba(229, 231, 235)"
                width="100%"
                height="100%"
              />
            </section>
          }
        >
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <FeatureBig
              name={FeatureBigData.name}
              brands={FeatureBigData.brands}
              img={FeatureBigData.img}
            />
          </motion.section>
        </Suspense>

        {/* Feature Hero Small */}
        <Suspense
          fallback={
            <section className="w-full h-fit flex items-center justify-center mb-16 ">
              <div className="xl:grid-cols-3 lg:gap-8 md:grid-cols-2 w-[95%] grid-cols-1 gap-5 h-fit grid">
                {FeatureSmallData.map((_, index) => (
                  <Skeleton
                    key={index}
                    baseColor="rgba(229, 231, 235)"
                    height="250px"
                  />
                ))}
              </div>
            </section>
          }
        >
          <section className="w-full h-fit flex items-center justify-center mb-16 ">
            <motion.div
              className="xl:grid-cols-3 lg:gap-8 md:grid-cols-2 w-[95%] grid-cols-1 gap-5 h-fit grid "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
                hidden: {},
              }}
            >
              {FeatureSmallData.map(({ name, img }, index) => (
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
                  <FeatureSmall
                    key={index}
                    index={index}
                    name={name}
                    img={img}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </Suspense>

        {/* Feature Best Seller*/}
        <Suspense
          fallback={
            <section className="w-full h-fit flex flex-col mt-16 items-center mb-16">
              <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-5">
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
              <div className="w-[95%] h-fit  flex flex-wrap justify-between gap-y-5">
                <div className="xl:w-[70%] lg:grid-cols-4 md:grid-cols-3 grid grid-cols-2 w-full h-fit gap-10">
                  {StockSort1.map((_, index) => (
                    <Skeleton key={index} height="320px" />
                  ))}
                </div>
                <div className="xl:w-[28%] xl:block xl:h-auto w-full flex h-[400px]">
                  <Skeleton width="100%" height="100%" />
                </div>
              </div>
            </section>
          }
        >
          <section className="w-full h-fit flex flex-col mt-16 items-center mb-16">
            <motion.div
              className="w-[95%] h-fit flex flex-col items-center  text-sm pb-5"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <FeatureTitle
                title1={"Shop the best in demand"}
                title2={"Best sellers"}
              />
            </motion.div>
            <div className="w-[95%] h-fit  flex flex-wrap justify-between gap-y-5">
              <motion.div
                className="xl:w-[70%] lg:grid-cols-4 md:grid-cols-3 grid grid-cols-2 w-full h-fit gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                  hidden: {},
                }}
              >
                {StockSort1.map(
                  (
                    { id, name, price, rate, discount, img, category, stock },
                    index
                  ) => (
                    <motion.div
                      key={index}
                      variants={{
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.6 },
                        },
                        hidden: { y: -20, opacity: 0 },
                      }}
                    >
                      <ProductCard
                        id={id}
                        name={name}
                        price={price}
                        discount={discount}
                        rate={rate}
                        img={img}
                        category={category}
                        stock={stock}
                      />
                    </motion.div>
                  )
                )}
              </motion.div>
              <motion.div
                className="xl:w-[28%] xl:block xl:h-auto w-full flex h-[400px]"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <FeatureSellerBanner
                  logo={FeatureSellerDataBanner.logo}
                  name={FeatureSellerDataBanner.name}
                  flavour={FeatureSellerDataBanner.flavour}
                  img={FeatureSellerDataBanner.img}
                />
              </motion.div>
            </div>
          </section>
        </Suspense>

        {/* Feature Category */}
        <Suspense
          fallback={
            <section className="w-full h-fit flex flex-col mt-16 items-center mb-16 py-5">
              <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-5">
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
              <div className="w-full flex flex-col items-center">
                <div className="lg:w-[70%] lg:gap-20 w-[95%] h-fit flex gap-5 justify-center pb-10">
                  {FeatureCategoryData.map((_, index) => (
                    <div
                      key={index}
                      className="md:w-[320px] w-[100%] xl:h-[500px] md:h-[300px] h-[200px]"
                    >
                      <Skeleton
                        baseColor="rgba(229, 231, 235)"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <section className="w-full h-fit flex flex-col mt-16 items-center mb-16 py-5">
            <motion.div
              className="w-[95%] h-fit flex flex-col items-center text-sm pb-5"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <FeatureTitle
                title1={"Easily find what you need"}
                title2={"Browse by category"}
              />
            </motion.div>
            <motion.div
              className="bg-[#f6f1eb] w-full flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
                hidden: {},
              }}
            >
              <motion.div
                className="bg-white w-full lg:h-[150px] h-[80px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
              ></motion.div>
              <div className="lg:w-[70%] lg:gap-20 w-[95%] h-fit flex gap-5 justify-center pb-10">
                {FeatureCategoryData.map(({ name, img }, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6 },
                      },
                      hidden: {
                        opacity: 0,
                        y: -20,
                      },
                    }}
                  >
                    <FeatureCategory name={name} img={img} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </Suspense>

        {/* Feature Product Card */}
        <Suspense
          fallback={
            <section className="w-full h-fit flex flex-col mt-16 items-center mb-16">
              <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-5">
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
              <div className="w-[95%] h-fit  flex flex-wrap justify-between gap-y-5">
                <div className="lg:grid-cols-5 md:grid-cols-3 grid grid-cols-2 w-full h-fit gap-5">
                  {StockSort2.map((_, index) => (
                    <Skeleton key={index} height="320px" />
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <section className="w-full h-fit flex flex-col mt-5 items-center mb-16">
            <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-16">
              <motion.div
                className="w-[95%] h-fit flex flex-col items-center  text-sm pb-5"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <FeatureTitle
                  title1={"Uncover Fresh Arrivals and Exciting Finds"}
                  title2={"Discover What's New"}
                />
              </motion.div>
            </div>
            <div className="w-[95%] h-fit flex flex-wrap justify-between gap-y-5">
              <motion.div
                className="lg:grid-cols-5 md:grid-cols-3 grid grid-cols-2 w-full h-fit gap-10"
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
                {StockSort2.map(
                  (
                    { id, name, price, rate, discount, img, category, stock },
                    index
                  ) => (
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
                      <ProductCard
                        id={id}
                        name={name}
                        price={price}
                        discount={discount}
                        rate={rate}
                        img={img}
                        category={category}
                        stock={stock}
                      />
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </section>
        </Suspense>

        {/* Featuer Story */}
        <Suspense
          fallback={
            <section className="w-full h-[500px] md:py-10 py-5">
              <Skeleton width="100%" height="100%" />
            </section>
          }
        >
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-fit flex items-center bg-[#e8f4f0] justify-center md:py-10 py-5"
          >
            <FeatureStory
              notHome={false}
              img={FeatureStoryData.img}
              title1={FeatureStoryData.title1}
              title2={FeatureStoryData.title2}
              des={FeatureStoryData.des}
            />
          </motion.section>
        </Suspense>

        {/* Feature Customer Reviews */}
        <Suspense
          fallback={
            <section className="w-full h-[500px] md:py-10 py-5">
              <Skeleton width="100%" height="100%" />
            </section>
          }
        >
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-fit flex items-center bg-[#fdeedb] justify-center py-20 mb-16"
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

        {/* Feature Brands */}
        <Suspense
          fallback={
            <section className="w-full h-fit flex flex-col mt-5 items-center mb-16">
              <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-16">
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
              <div className="w-[90%] h-fit flex flex-wrap justify-between gap-y-5">
                {FeatureBrandData.map((_, index) => (
                  <div
                    key={index}
                    className="xl:w-[15.5%] lg:w-[28%] w-[49%] md:h-[120px] h-[60px]"
                  >
                    <Skeleton width="100%" height="100%" />
                  </div>
                ))}
              </div>
            </section>
          }
        >
          <section className="w-full h-fit flex flex-col mt-5 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-[95%] h-fit flex flex-col items-center text-sm pb-16"
            >
              <FeatureTitle
                title1={"Proud to partner with"}
                title2={"our brands"}
              />
            </motion.div>
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
              className="w-[90%] h-fit  flex flex-wrap justify-between gap-y-5"
            >
              {FeatureBrandData.map((img, index) => (
                <motion.div
                  key={index}
                  className="xl:w-[15.5%] lg:w-[28%] w-[49%] lg:grayscale-100 hover:grayscale-0 md:h-[120px] h-[60px] flex items-center justify-center rounded-md cursor-pointer bg-[#f8f8f8] p-10"
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                    hidden: { opacity: 0, y: -20 },
                  }}
                >
                  <img
                    src={img}
                    alt={`${img} - ${index}`}
                    className="w-full xl:h-[90px] md:h-[70px] h-[50px] object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </Suspense>
      </main>
    </>
  );
};

export default Home;
