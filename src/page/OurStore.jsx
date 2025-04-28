import React, { useState, useMemo } from "react";
import { ProductCard } from "../components/OurStore";
import { category, Products } from "../data/OurStore";

const OurStore = () => {
  const [indexCate, setIndexCate] = useState(0);
  const [indexStock, setIndexStock] = useState(0);
  const [sort, setSort] = useState("id");
  const Stock = ["Both", "In Stock", "Out of Stock"];

  const Filter = useMemo(() => {
    let filtered = [...Products];

    if (indexCate !== 0) {
      filtered = filtered.filter(
        (product) => product.category === category[indexCate]["name"]
      );
    }

    if (indexStock === 1) {
      filtered = filtered.filter((product) => product.stock > 0);
    } else if (indexStock === 2) {
      filtered = filtered.filter((product) => product.stock === 0);
    }

    switch (sort) {
      case "low":
        filtered.sort(
          (a, b) =>
            a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100)
        );
        break;
      case "high":
        filtered.sort(
          (a, b) =>
            b.price * (1 - b.discount / 100) - a.price * (1 - a.discount / 100)
        );
        break;
      case "nameA":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameZ":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        filtered.sort((a, b) => a.id - b.id);
    }

    return filtered;
  }, [indexCate, indexStock, sort]);

  return (
    <main className="w-full h-fit flex md:flex-row flex-col justify-center md:mt-20 mt-10 relative">
      <aside className="md:w-[300px] w-full pb-10 pt-2 md:pl-3 h-fit md:sticky md:top-0">
        <div className="w-full h-fit p-2">
          <h1 className="text-xl font-medium mb-3">Product Category</h1>
          <ul className="flex flex-col gap-3">
            {category.map(({ name }, i) => (
              <li key={i} className="cursor-pointer flex gap-2">
                <input
                  type="checkbox"
                  checked={indexCate === i}
                  onChange={() => setIndexCate(i)}
                  className="accent-green-600 rounded"
                />
                <span
                  onClick={() => setIndexCate(i)}
                  className={`text-sm ${
                    indexCate === i ? "text-[#59C491]" : "text-gray-800/70"
                  }`}
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>

          <h1 className="text-xl font-medium mt-5 mb-3">Product Status</h1>
          <ul className="flex flex-col gap-3">
            {Stock.map((s, j) => (
              <li key={j} className="cursor-pointer flex gap-2">
                <input
                  type="checkbox"
                  checked={indexStock === j}
                  onChange={() => setIndexStock(j)}
                  className="accent-green-600 rounded"
                />
                <span
                  onClick={() => setIndexStock(j)}
                  className={`text-sm ${
                    indexStock === j ? "text-[#59C491]" : "text-gray-800/70"
                  }`}
                >
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <aside className="h-fit p-2 md:w-[75%] w-full">
        <h1 className="lg:text-3xl text-2xl font-medium">
          {category[indexCate]["name"]}
        </h1>
        <div className="w-full bg-[#e8e8e8] flex md:flex-row gap-5 flex-col md:items-center mt-5 py-2 px-2">
          <div className="flex flex-row md:justify-center items-center gap-2">
            <p className="text-gray-800/80 text-sm">Sort: </p>
            <select
              className="outline-none text-sm text-gray-800/80"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="id">Sort by ID (Default)</option>
              <option value="low">Sort by price (Low-High)</option>
              <option value="high">Sort by price (High-Low)</option>
              <option value="nameA">Sort by name (A-Z)</option>
              <option value="nameZ">Sort by name (Z-A)</option>
            </select>
          </div>
          <span className="border-r-2 border-gray-800/80 md:block hidden">
            &nbsp;
          </span>
          <p className="text-gray-800/80 text-sm">
            Showing all {Filter.length} products
          </p>
        </div>

        {Filter.length === 0 && (
          <div className="w-full h-[400px] text-xl flex items-center justify-center text-gray-800/50">
            <svg
              className="shrink-0 inline w-6 h-6 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            No products were found matching your selection.
          </div>
        )}

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-3 py-5">
          {Filter.map(
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
      </aside>
    </main>
  );
};

export default OurStore;
