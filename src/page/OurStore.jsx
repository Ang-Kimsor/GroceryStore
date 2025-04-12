import React, { useState } from "react";
import { ProductCard } from "../components/OurStore";
import { category, Products } from "../data/OurStore";
const OurStore = () => {
  const [index, setIndex] = useState(0);
  let Filter = Products;
  if (index != 0) {
    Filter = Products.filter(
      (product) => product.category == category[index]["name"]
    );
  }
  return (
    <main className="w-full h-fit  flex md:flex-row flex-col justify-center md:mt-20 mt-10 relative">
      <aside className="md:w-[300px] w-full h-fit md:sticky md:top-0">
        <div className="w-full h-fit p-2">
          <h1 className="text-2xl font-medium mb-3 ">Product Category</h1>
          <ul className="flex flex-col gap-3">
            {category.map(({ name }, i) => (
              <li key={i} className="cursor-pointer">
                <span
                  onClick={() => setIndex(i)}
                  className={`text-md ${
                    index == i ? "text-[#4daf65]" : "text-gray-800/70"
                  } `}
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <aside className="h-fit p-2 md:w-[75%] w-full">
        <h1 className="text-2xl font-medium">{category[index]["name"]}</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-3  py-5">
          {Filter.map(
            ({ id, name, price, rate, discount, img, category }, index) => (
              <ProductCard
                key={index}
                id={id}
                name={name}
                price={price}
                discount={discount}
                rate={rate}
                img={img}
                category={category}
              />
            )
          )}
        </div>
      </aside>
    </main>
  );
};

export default OurStore;
