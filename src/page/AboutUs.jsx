import React from "react";
import {
  FeatureTitle,
  FeatureBig,
  FeatureStory,
  FeatureCustomer,
  FeatureSubscribe,
  FeatureVision,
  FeaturePay,
} from "./../components/About";
import {
  FeatureBigData,
  FeatureStoryData,
  FeatureCustomerData,
  FeatureVisionData,
  FeaturePayData,
  FeatureSubData,
} from "./../data/About";
const AboutUs = () => {
  return (
    <main className="bg-white w-full h-fit">
      <FeatureBig img={FeatureBigData.img} title={FeatureBigData.title} />
      <section className="w-full h-fit flex items-center justify-center md:py-10 py-5 mb-20">
        <FeatureStory
          img={FeatureStoryData.img}
          title1={FeatureStoryData.title1}
          title2={FeatureStoryData.title2}
          des={FeatureStoryData.des}
        />
      </section>
      <section className="w-full h-fit flex items-center bg-[#fdeedb] justify-center py-10 mb-16">
        <FeatureCustomer
          title1={FeatureCustomerData.title1}
          title2={FeatureCustomerData.title2}
          des={FeatureCustomerData.des}
          rate={FeatureCustomerData.rate}
          customer={FeatureCustomerData.customer}
        />
      </section>
      <section className="w-full h-fit flex flex-col items-center justify-center md:py-16 py-10 mb-16">
        <div className="w-[95%] flex flex-col items-center">
          <FeatureTitle
            title1={"Purpose in action"}
            title2={"Our vision, Mission & values"}
          />
        </div>
        <div className="w-[95%] grid lg:grid-cols-3 lg:gap-5 gap-24 mt-20 place-items-center">
          {FeatureVisionData.map(({ icon, title, des }, index) => (
            <FeatureVision key={index} icon={icon} title={title} des={des} />
          ))}
        </div>
      </section>
      <section className="bg-[#E8F4F0] w-full h-fit flex items-center justify-center md:pt-20 pt-10">
        <div className="w-[90%]  grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5">
          {FeaturePayData.map(({ icon, title, des }, index) => (
            <FeaturePay key={index} icon={icon} title={title} des={des} />
          ))}
        </div>
      </section>
      <section className="lg:w-full h-fit flex items-center  justify-center py-20 bg-[#E8F4F0]">
        <FeatureSubscribe
          title={FeatureSubData.title}
          des={FeatureSubData.des}
          link={FeatureSubData.link}
          path={FeatureSubData.path}
          img={FeatureSubData.img}
        />
      </section>
    </main>
  );
};

export default AboutUs;
