import React from "react";
import {
  FeatureBig,
  FeatureSmall,
  FeatureSeller,
  FeatureSellerBanner,
  FeatureTitle,
  FeatureCategory,
} from "../component/Home";
import {
  FeatureBigData,
  FeatureSmallData,
  FeatureSellerData,
  FeatureSellerDataBanner,
} from "./../data/Home";
const Home = () => {
  return (
    <>
      <main className="w-fit h-fit">
        <FeatureBig
          name={FeatureBigData.name}
          brands={FeatureBigData.brands}
          img={FeatureBigData.img}
        />
        <div className="w-full h-fit flex items-center justify-center mb-12 ">
          <div className="xl:grid-cols-3 lg:gap-8 md:grid-cols-2 w-[95%] grid-cols-1 gap-5 h-fit grid ">
            {FeatureSmallData.map(({ name, img }, index) => (
              <FeatureSmall key={index} name={name} img={img} />
            ))}
          </div>
        </div>

        <div className="w-full h-fit flex flex-col mt-20 items-center mb-12">
          <div className="w-[95%] h-fit flex flex-col items-center  text-sm pb-5">
            <FeatureTitle
              title1={"Shop the best in demand"}
              title2={"Best sellers"}
            />
          </div>
          <div className="w-[95%] h-fit  flex flex-wrap justify-between gap-y-5">
            <div className="xl:w-[70%] lg:grid-cols-4 md:grid-cols-3 grid grid-cols-2 w-full h-fit gap-10 ">
              {FeatureSellerData.map(
                ({ id, name, price, rate, discount, img }, index) => (
                  <FeatureSeller
                    key={index}
                    id={id}
                    name={name}
                    price={price}
                    discount={discount}
                    rate={rate}
                    img={img}
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
        </div>

        <div className="w-full h-fit flex flex-col mt-20 items-center mb-12 bg-red-500 py-5">
          <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-5">
            <FeatureTitle
              title1={"Easily find what you need"}
              title2={"Browse by category"}
            />
          </div>
          <div className="md:w-[80%] w-[98%] h-[700px] flex gap-5 justify-center pt-20">
            <FeatureCategory />
            <FeatureCategory />
            <FeatureCategory />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
