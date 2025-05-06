import React, { useState, useMemo, useRef } from "react";
import { ProductCard } from "../../components/OurStore";
import { category, Products } from "../../data/OurStore";

const OurStore = () => {
  const [indexCate, setIndexCate] = useState(0);
  const [indexStock, setIndexStock] = useState(0);
  const [sort, setSort] = useState("id");
  const Stock = ["Both", "In Stock", "Out of Stock"];

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [filterPrice, setFilterPrice] = useState({ min: 0, max: 100 });

  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(null);

  const minLimit = 0;
  const maxLimit = 100;
  const Gap = 10;

  const maxInitialPrice = Math.max(
    ...Products.map(({ price, discount }) => price * (1 - discount / 100))
  );

  const handleMouseDown = (type) => setDragging(type);
  const handleMouseUp = () => setDragging(null);

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const rect = trackRef.current.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;
    const value = Math.min(Math.max(percent, minLimit), maxLimit);
    if (dragging === "min") {
      setMinVal(Math.min(value, maxVal - Gap));
    } else if (dragging === "max") {
      setMaxVal(Math.max(value, minVal + Gap));
    }
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const rect = trackRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const percent = ((touch.clientX - rect.left) / rect.width) * 100;
    const value = Math.min(Math.max(percent, minLimit), maxLimit);
    if (dragging === "min") {
      setMinVal(Math.min(value, maxVal - Gap));
    } else if (dragging === "max") {
      setMaxVal(Math.max(value, minVal + Gap));
    }
  };

  const Filter = useMemo(() => {
    let filtered = [...Products];

    if (indexCate !== 0) {
      filtered = filtered.filter(
        (product) => product.category === category[indexCate].name
      );
    }

    if (indexStock === 1) {
      filtered = filtered.filter((product) => product.stock > 0);
    } else if (indexStock === 2) {
      filtered = filtered.filter((product) => product.stock === 0);
    }

    const lower = (filterPrice.min / 100) * maxInitialPrice;
    const upper = (filterPrice.max / 100) * maxInitialPrice;

    filtered = filtered.filter((product) => {
      const finalPrice = product.price * (1 - product.discount / 100);
      return finalPrice >= lower && finalPrice <= upper;
    });

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
  }, [indexCate, indexStock, sort, filterPrice, maxInitialPrice]);

  return (
    <main className="w-full h-fit flex md:flex-row flex-col px-3 justify-center md:mt-20 mt-10 relative">
      <aside className="md:w-[300px] w-full pb-10 px-2 pt-2 md:pl-3 h-fit md:sticky md:top-0">
        <div className="w-full h-fit p-2">
          <h1 className="text-xl font-medium mb-3">Widget Price Filter</h1>
          <div
            className="w-full mb-5"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <div className="w-full mt-5 pl-2 border-b pb-8 border-[#E5E7EB]">
              <div
                ref={trackRef}
                className="relative h-1.5 mt-5 bg-gray-300 rounded"
              >
                <div
                  className="absolute h-1.5 bg-black rounded"
                  style={{
                    left: `${minVal}%`,
                    width: `${maxVal - minVal}%`,
                  }}
                ></div>
                <span
                  onMouseDown={() => handleMouseDown("min")}
                  onTouchStart={() => handleMouseDown("min")}
                  className="absolute top-1/2 size-4 bg-black rounded-full cursor-pointer"
                  style={{
                    left: `${minVal}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                ></span>
                <span
                  onMouseDown={() => handleMouseDown("max")}
                  onTouchStart={() => handleMouseDown("max")}
                  className="absolute top-1/2 size-4 bg-black rounded-full cursor-pointer"
                  style={{
                    left: `${maxVal}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                ></span>
              </div>
              <div className="mt-8 text-sm flex justify-between items-center w-full">
                <p>
                  Price: ${Math.round((minVal / 100) * maxInitialPrice)} - $
                  {Math.round((maxVal / 100) * maxInitialPrice)}
                </p>
                <button
                  className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
                  onClick={() => setFilterPrice({ min: minVal, max: maxVal })}
                >
                  Filter Price
                </button>
              </div>
            </div>
          </div>

          <h1 className="text-xl font-medium mb-3">Product Category</h1>
          <ul className="flex flex-col gap-3 mb-5 border-b pb-5 border-[#E5E7EB]">
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

          <h1 className="text-xl font-medium mb-3">Product Status</h1>
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
          {category[indexCate].name}
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
          {Filter.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </aside>
    </main>
  );
};

export default OurStore;
