import React from "react";
import {
  FeatureBig,
  FeatureSmall,
  FeatureSellerBanner,
  FeatureTitle,
  FeatureCategory,
  FeatureStory,
  FeatureCustomer,
  FeatureBrand,
} from "../components/Home";
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
} from "./../data/Home";
import { ProductCard } from "./../components/OurStore";
const Home = () => {
  const StockSort1 = FeatureSellerData.sort((a, b) => b.stock - a.stock);
  const StockSort2 = FeatureDiscoverData.sort((a, b) => b.stock - a.stock);
  return (
    <>
      <main className="w-fit h-fit bg-white">
        <FeatureBig
          name={FeatureBigData.name}
          brands={FeatureBigData.brands}
          img={FeatureBigData.img}
        />
        <section className="w-full h-fit flex items-center justify-center mb-16 ">
          <div className="xl:grid-cols-3 lg:gap-8 md:grid-cols-2 w-[95%] grid-cols-1 gap-5 h-fit grid ">
            {FeatureSmallData.map(({ name, img }, index) => (
              <FeatureSmall key={index} name={name} img={img} />
            ))}
          </div>
        </section>

        <section className="w-full h-fit flex flex-col mt-16 items-center mb-16">
          <div className="w-[95%] h-fit flex flex-col items-center  text-sm pb-5">
            <FeatureTitle
              title1={"Shop the best in demand"}
              title2={"Best sellers"}
            />
          </div>
          <div className="w-[95%] h-fit  flex flex-wrap justify-between gap-y-5">
            <div className="xl:w-[70%] lg:grid-cols-4 md:grid-cols-3 grid grid-cols-2 w-full h-fit gap-10">
              {StockSort1.map(
                (
                  { id, name, price, rate, discount, img, category, stock },
                  index
                ) => (
                  <ProductCard
                    key={index}
                    id={id}
                    name={name}
                    price={price}
                    discount={discount}
                    rate={rate}
                    img={img}
                    category={category}
                    stock={stock}
                  />
                )
              )}
            </div>
            <div className="xl:w-[28%] xl:block xl:h-auto w-full flex h-[400px] ">
              <FeatureSellerBanner
                logo={FeatureSellerDataBanner.logo}
                name={FeatureSellerDataBanner.name}
                flavour={FeatureSellerDataBanner.flavour}
                img={FeatureSellerDataBanner.img}
              />
            </div>
          </div>
        </section>

        <section className="w-full h-fit flex flex-col mt-16 items-center mb-16 py-5">
          <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-5">
            <FeatureTitle
              title1={"Easily find what you need"}
              title2={"Browse by category"}
            />
          </div>
          <div className="bg-[#f6f1eb] w-full flex flex-col items-center">
            <div className="bg-white w-full lg:h-[150px] h-[80px]"></div>
            <div className="lg:w-[70%] lg:gap-20 w-[95%] h-fit flex gap-5 justify-center pb-10">
              {FeatureCategoryData.map(({ name, img }, index) => (
                <FeatureCategory key={index} name={name} img={img} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full h-fit flex flex-col mt-5 items-center mb-16">
          <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-16">
            <FeatureTitle
              title1={"Uncover Fresh Arrivals and Exciting Finds"}
              title2={"Discover What's New"}
            />
          </div>
          <div className="w-[95%] h-fit  flex flex-wrap justify-between gap-y-5">
            <div className=" lg:grid-cols-5 md:grid-cols-3 grid grid-cols-2 w-full h-fit gap-10">
              {StockSort2.map(
                (
                  { id, name, price, rate, discount, img, category, stock },
                  index
                ) => (
                  <ProductCard
                    key={index}
                    id={id}
                    name={name}
                    price={price}
                    discount={discount}
                    rate={rate}
                    img={img}
                    category={category}
                    stock={stock}
                  />
                )
              )}
            </div>
          </div>
        </section>

        <section className="w-full h-fit flex items-center bg-[#e8f4f0] justify-center md:py-10 py-5">
          <FeatureStory
            notHome={false}
            img={FeatureStoryData.img}
            title1={FeatureStoryData.title1}
            title2={FeatureStoryData.title2}
            des={FeatureStoryData.des}
          />
        </section>

        <section className="w-full h-fit flex items-center bg-[#fdeedb] justify-center py-20 mb-16">
          <FeatureCustomer
            title1={FeatureCustomerData.title1}
            title2={FeatureCustomerData.title2}
            des={FeatureCustomerData.des}
            rate={FeatureCustomerData.rate}
            customer={FeatureCustomerData.customer}
          />
        </section>

        <section className="w-full h-fit flex flex-col mt-5 items-center mb-16">
          <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-16">
            <FeatureTitle
              title1={"Proud to partner with"}
              title2={"our brands"}
            />
          </div>
          <div className="w-[90%] h-fit  flex flex-wrap justify-between gap-y-5">
            {FeatureBrandData.map((img, index) => (
              <FeatureBrand key={index} img={img} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
