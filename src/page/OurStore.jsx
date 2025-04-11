import React from "react";
import { SideMenu, ProductCard } from "../components/OurStore";
import { category, Products } from "../data/OurStore";
const OurStore = () => {
  return (
    <main className="w-full h-fit  flex md:flex-row flex-col justify-center md:mt-20 mt-10 relative">
      <aside className="md:w-[300px] w-full h-fit md:sticky md:top-0">
        <SideMenu category={category} />
      </aside>
      <aside className="h-fit p-2 md:w-[75%] w-full">
        <h1 className="text-2xl font-medium">All Categories</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-3  py-5">
          {Products.map(
            ({ id, name, price, rate, discount, img }, index) => (
              <ProductCard
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
      </aside>
    </main>
  );
};

export default OurStore;
