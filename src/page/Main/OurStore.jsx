// Built in component and library
import { useState, useMemo, useRef, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Data
import { category, Products } from "../../data/OurStore";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Component Lazy
const ProductCard = lazy(() => import("../../components/OurStore/ProductCard"));
// Ourstore Component Page
const OurStore = () => {
  // State Ref and Status
  const [indexCate, setIndexCate] = useState(0);
  const [indexStock, setIndexStock] = useState(0);
  const [sort, setSort] = useState("id");
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState("");
  const [filterPrice, setFilterPrice] = useState({ min: 0, max: 100 });
  const [dragging, setDragging] = useState(null);
  const trackRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const Stock = ["Both", "In Stock", "Out of Stock"];
  const minLimit = 0;
  const maxLimit = 100;
  const Gap = 10;
  const maxInitialPrice = Math.max(
    ...Products.map(({ price, discount }) => price * (1 - discount / 100))
  );

  // Animation
  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  // Event handle
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

  // Complex state memo
  const Filter = useMemo(() => {
    let filtered = [...Products];

    if (indexCate !== 0) {
      // Only filter when NOT "All"
      filtered = filtered.filter(
        (product) => product.category === category[indexCate].name
      );
    }

    if (indexStock === 1) filtered = filtered.filter((p) => p.stock > 0);
    else if (indexStock === 2) filtered = filtered.filter((p) => p.stock === 0);

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

    if (submitSearch.trim() !== "")
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().startsWith(submitSearch.toLowerCase())
      );
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    return filtered;
  }, [indexCate, indexStock, sort, filterPrice, maxInitialPrice, submitSearch]);

  return (
    // Main Container
    <>
      <main className="w-full h-fit flex md:flex-row flex-col px-3 justify-center md:mt-20 mt-10 relative">
        {/* Aside Section */}
        <aside className="md:w-[300px] w-full pb-10 px-2 pt-2 md:pl-3 h-fit md:sticky md:top-[90px]">
          <motion.div
            className="w-full h-fit p-2"
            initial="hidden"
            animate="visible"
            variants={parentVariants}
          >
            {/* Filter by Price */}
            <motion.h1
              className="text-xl font-semibold mb-3"
              variants={itemVariants}
            >
              Widget Price Filter
            </motion.h1>

            <motion.div
              className="w-full mb-5"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              variants={itemVariants}
            >
              <div className="w-full mt-5 pl-2 border-b pb-8 border-gray-300">
                <div
                  ref={trackRef}
                  className="relative h-1.5 mt-5 bg-gray-300 rounded"
                >
                  {/* Range track */}
                  <motion.div
                    className="absolute h-1.5 bg-[#59C491] rounded"
                    style={{
                      left: `${minVal}%`,
                      width: `${maxVal - minVal}%`,
                    }}
                  />
                  {/* Min handle */}
                  <motion.span
                    onMouseDown={() => handleMouseDown("min")}
                    onTouchStart={() => handleMouseDown("min")}
                    className="absolute top-1/2 size-4 bg-[#59C491] rounded-full cursor-pointer shadow-md"
                    style={{
                      left: `${minVal}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  {/* Max handle */}
                  <motion.span
                    onMouseDown={() => handleMouseDown("max")}
                    onTouchStart={() => handleMouseDown("max")}
                    className="absolute top-1/2 size-4 bg-[#59C491] rounded-full cursor-pointer shadow-md"
                    style={{
                      left: `${maxVal}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>

                {/* Price range text + Button */}
                <motion.div
                  className="mt-8 text-sm flex justify-between items-center w-full selection:bg-transparent"
                  variants={itemVariants}
                >
                  <p className="text-gray-700 font-medium">
                    Price: ${Math.round((minVal / 100) * maxInitialPrice)} - $
                    {Math.round((maxVal / 100) * maxInitialPrice)}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#59C491] text-white text-sm rounded-md shadow hover:bg-[#4bb383] transition"
                    onClick={() => setFilterPrice({ min: minVal, max: maxVal })}
                  >
                    Filter Price
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Filter by Category */}
            <motion.div variants={itemVariants}>
              <h1 className="text-xl font-semibold mb-3">Product Category</h1>
              <ul className="flex flex-col gap-3 mb-5 border-b pb-5 border-gray-300">
                {category.map(({ name }, i) => (
                  <motion.li
                    key={i}
                    className="cursor-pointer flex gap-2 items-center"
                    variants={itemVariants}
                  >
                    <input
                      type="checkbox"
                      checked={indexCate === i}
                      onChange={() => setIndexCate(i)}
                      className="w-4 h-4 rounded border-2 border-gray-400 cursor-pointer appearance-none checked:bg-[#59C491] checked:border-[#59C491] checked:before:content-['✔'] checked:before:text-white checked:before:text-[10px] checked:before:flex checked:before:items-center checked:before:justify-center"
                    />
                    <span
                      onClick={() => setIndexCate(i)}
                      className={`text-sm ${
                        indexCate === i ? "text-[#59C491]" : "text-gray-700/80"
                      }`}
                    >
                      {name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Filter by Stock */}
            <motion.div variants={itemVariants}>
              <h1 className="text-xl font-semibold mb-3">Product Status</h1>
              <ul className="flex flex-col gap-3">
                {Stock.map((s, j) => (
                  <motion.li
                    key={j}
                    className="cursor-pointer flex gap-2 items-center"
                    variants={itemVariants}
                  >
                    <input
                      type="checkbox"
                      checked={indexStock === j}
                      onChange={() => setIndexStock(j)}
                      className="w-4 h-4 rounded border-2 border-gray-400 cursor-pointer appearance-none checked:bg-[#59C491] checked:border-[#59C491] checked:before:content-['✔'] checked:before:text-white checked:before:text-[10px] checked:before:flex checked:before:items-center checked:before:justify-center"
                    />
                    <span
                      onClick={() => setIndexStock(j)}
                      className={`text-sm ${
                        indexStock === j ? "text-[#59C491]" : "text-gray-700/80"
                      }`}
                    >
                      {s}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </aside>

        {/* Main Section */}
        <Suspense
          fallback={
            <section className="h-fit p-4 md:w-[75%] w-full">
              {/* Category Title */}
              <Skeleton
                width={"100%"}
                height={"35px"}
                baseColor="rgba(229, 231, 235)"
              />
              {/* Sort & Info Bar */}
              <Skeleton
                width={"100%"}
                height={"60px"}
                className="mt-7"
                baseColor="rgba(229, 231, 235)"
              />
              {/* Product Grid */}
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5 py-6">
                {Filter.map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-[280px] md:h-[300px] lg:h-[340px]"
                  />
                ))}
              </div>
            </section>
          }
        >
          <motion.section
            className="h-fit md:w-[75%] px-3 w-full"
            initial="hidden"
            animate="visible"
            variants={parentVariants}
          >
            {/* Category Title */}
            {loading && Filter.length != 0 ? (
              <Skeleton
                width="200px"
                height="30px"
                baseColor="rgba(229, 231, 235)"
              />
            ) : (
              <motion.h1
                className="lg:text-3xl text-2xl font-semibold text-gray-800 tracking-tight"
                variants={itemVariants}
              >
                {category[indexCate].name}
              </motion.h1>
            )}

            {/* Sort & Info Bar  Search */}
            <motion.div
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl shadow-sm flex flex-col gap-4 px-5 py-4 mt-6"
              variants={itemVariants}
            >
              {/* Search */}
              <div className="w-full flex justify-between gap-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitSearch(search);
                  }}
                  className="flex items-center w-[70%] bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#59C491]/40 focus-within:border-[#59C491] transition-all"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-gray-500 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent w-full px-3 py-1 outline-none text-gray-700"
                    value={search}
                    onChange={(e) => {
                      e.target.value === "" && setSubmitSearch("");
                      setSearch(e.target.value);
                    }}
                  />
                </form>
                <button
                  type="submit"
                  onClick={() => setSubmitSearch(search)}
                  className="w-auto bg-[#59C491] hover:bg-[#4CB985] text-white px-6 py-2 rounded-xl font-medium transition shadow-sm"
                >
                  Search
                </button>
              </div>
              <div className="w-full flex md:justify-between md:flex-row flex-col gap-2 md:items-center justify-center">
                {/* Sort */}
                <div className="flex items-center gap-3">
                  <p className="text-gray-700 font-medium text-sm">Sort by:</p>
                  <select
                    onChange={(e) => setSort(e.target.value)}
                    className="text-sm text-gray-800 bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-[#59C491] focus:border-[#59C491] transition-all duration-200 hover:border-[#59C491]"
                  >
                    <option value="id">Default (By ID)</option>
                    <option value="low">Price: Low → High</option>
                    <option value="high">Price: High → Low</option>
                    <option value="nameA">Name: A → Z</option>
                    <option value="nameZ">Name: Z → A</option>
                  </select>
                </div>

                {/* Showing Count Products */}
                {loading && Filter.length != 0 ? (
                  <Skeleton
                    width={"150px"}
                    height={"30px"}
                    baseColor="rgba(229, 231, 235)"
                  />
                ) : (
                  <motion.p
                    className="text-sm text-gray-700 font-medium"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    Showing{" "}
                    <span className="font-semibold text-[#59C491]">
                      {Filter.length}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-800">
                      {Products.length}
                    </span>{" "}
                    product{Filter.length !== 1 ? "s" : ""}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Empty State */}
            {Filter.length === 0 && (
              <motion.div
                className="w-full h-[400px] text-lg flex flex-col items-center justify-center text-gray-500/70 mt-6"
                variants={itemVariants}
              >
                <svg
                  className="w-10 h-10 mb-3 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <p>
                  No products were found matching your selection.{" "}
                  <span
                    className="hover:text-black hover:underline cursor-pointer"
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => setLoading(false), 2000);
                      setIndexCate(0);
                      setIndexStock(0);
                      setSort("id");
                      setMinVal(0);
                      setMaxVal(100);
                      setSearch("");
                      setSubmitSearch("");
                      setFilterPrice({ min: 0, max: 100 });
                    }}
                  >
                    Reset
                  </span>
                </p>
              </motion.div>
            )}

            {/* Product Grid */}
            {loading && Filter.length != 0 ? (
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4 py-6">
                {Filter.map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-[280px] md:h-[300px] lg:h-[340px]"
                  />
                ))}
              </div>
            ) : (
              <motion.div
                className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4 py-6"
                initial="hidden"
                animate="visible"
                variants={parentVariants}
              >
                {Filter.map(
                  (
                    { id, name, price, discount, rate, img, category, stock },
                    index
                  ) => (
                    <motion.div key={index} variants={itemVariants}>
                      <ProductCard
                        id={id}
                        name={name}
                        price={price}
                        discount={discount}
                        rate={rate}
                        img={img}
                        category={category}
                        stock={stock}
                      />
                    </motion.div>
                  )
                )}
              </motion.div>
            )}
          </motion.section>
        </Suspense>
      </main>
    </>
  );
};

export default OurStore;
