import React from "react";
import {
  FeatureBig,
  FeatureSearch,
  FeatureJobCard,
} from "../components/Career";
import { Link } from "react-router-dom";
import Banner from "./../assets/career.jpg";
import { FeatureJobCardData } from "../data/Career";
const Career = () => {
  return (
    <main className="bg-white w-full h-fit">
      <FeatureBig img={Banner} title={"Join Us"} />
      <section className="mb-10">
        <FeatureSearch data={FeatureJobCardData} />
      </section>
      <section className="py-16 flex justify-center bg-[#E8F4F0]">
        <div className="w-[95%]">
          <h1 className="md:text-start text-center md:text-3xl text-xl capitalize mb-10  font-medium">
            Explore the open position
          </h1>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {FeatureJobCardData.map(
              ({ title, business, type, location }, index) => (
                <FeatureJobCard
                  key={index}
                  title={title}
                  business={business}
                  type={type}
                  location={location}
                />
              )
            )}
          </div>
          <h1 className="md:text-start text-center md:text-xl capitalize mt-10 text-lg font-medium">
            Couldn't Find your prefered position?{" "}
            <Link to={"/Contact"} className="text-[#59C491] hover:underline">
              Contact Us
            </Link>
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Career;
