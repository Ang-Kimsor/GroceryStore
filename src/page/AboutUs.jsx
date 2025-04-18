import React from "react";
import {
  FeatureBig,
  FeatureStory,
  FeatureCustomer,
  FeatureSubscribe,
} from "./../components/About";
import {
  FeatureBigData,
  FeatureStoryData,
  FeatureCustomerData,
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
      <section className="w-full h-fit flex items-center  justify-center pt-10">
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
