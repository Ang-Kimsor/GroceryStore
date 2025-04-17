import React from "react";
import {
  FeatureBig,
  FeatureStory,
  FeatureCustomer,
  FeatureSubscribe,
} from "./../components/About";
import Banner from "./../assets/about.jpg";
import Story from "./../assets/berry.jpg";
import { FeatureCustomerData } from "./../data/Home";
const AboutUs = () => {
  return (
    <main className="bg-white w-full h-fit">
      <FeatureBig img={Banner} title={"About Us"} />
      <section className="w-full h-fit flex items-center justify-center md:py-10 py-5 mb-20">
        <FeatureStory
          img={Story}
          title1={"Who are we"}
          title2={"The House of ethnical japanese products"}
          des={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis ea dicta illo consequuntur necessitatibus beatae doloribus quaerat voluptatibus quod?"
          }
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
        <FeatureSubscribe />
      </section>
    </main>
  );
};

export default AboutUs;
