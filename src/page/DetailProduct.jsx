import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Products } from "../data/OurStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLink, faShare } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FeatureTitle } from "../components/Home";
import { ProductCard } from "../components/OurStore";
const DetailProduct = () => {
  let Review = useRef(Math.round(Math.random(100) * 100));
  const [qty, setQty] = useState(1);
  const Increase = (e) => {
    e.preventDefault();
    setQty((q) => q + 1);
  };
  const Decrease = (e) => {
    e.preventDefault();
    qty == 1 ? setQty(1) : setQty(qty - 1);
  };
  const [cart, setCart] = useState(false);
  const [wish, setWish] = useState(false);
  const [copy, setCopy] = useState(false);
  const Cart = () => {
    setCart(true);
    setTimeout(() => {
      setCart(false);
    }, 2500);
  };
  const Wish = () => {
    setWish(true);
    setTimeout(() => {
      setWish(false);
    }, 2500);
  };
  const Copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2500);
  };
  var { category, name } = useParams();
  category = category.replaceAll("_", " ");
  name = name.replaceAll("_", " ");
  const Product = Products.filter((p) => p.name == name);
  const ProductRelated = Products.filter(
    (p) => p.category == category && p.id != Product[0]["id"]
  ).slice(0, 5);

  return (
    <>
      {/* Cart_Wishlist */}
      <div
        className={`md:w-[320px] md:h-[160px] h-[220px] w-[280px] bg-white shadow-xs shadow-gray-500/20 rounded fixed bottom-5 right-5 flex flex-wrap transition-all duration-300 z-[98] ${
          cart || wish ? "opacity-100 visible " : "opacity-0 invisible "
        }`}
      >
        <div className="w-full h-[100px] p-2  flex">
          <div className="w-[90px] h-[90px] flex justify-center items-center ">
            <img
              src={Product[0]["img"]}
              alt=""
              className="size-full object-contain object-center"
            />
          </div>
          <div className="w-[185px] h-[90px] ">
            <p className="text-[12px] pl-2 font-medium pt-2">{name}</p>
            <p className="text-[10px] pl-2 pt-2 text-gray-800/50">
              has been added to your {wish && "Wishlist"}
              {cart && "Cart"}.
            </p>
            {cart && (
              <>
                <p className="text-[10px] pl-2 pt-1 text-gray-800/50">
                  Quatity: {qty}
                </p>
                <p className="text-[10px] pl-2 pt-1 text-gray-800/50">
                  Total: {"$"}
                  {(
                    Product[0]["price"] *
                    (1 - Product[0]["discount"] / 100) *
                    qty
                  ).toFixed(2)}
                </p>
              </>
            )}
          </div>
          <FontAwesomeIcon
            icon={faX}
            className="cursor-pointer text-sm ml-2 mt-1"
            onClick={() => setCart(false)}
          />
        </div>
        <div className="w-full h-[60px] grid grid-cols-2 gap-4 place-items-center px-3">
          <Link className="text-sm uppercase font-medium h-[35px] w-full flex items-center justify-center cursor-pointer bg-[#e8e8e8] ">
            View {wish && "Wishlist"}
            {cart && "Cart"}
          </Link>
          <Link className="text-sm uppercase font-medium h-[35px] w-full flex items-center justify-center cursor-pointer bg-black text-white ">
            {wish && "Buy Now"}
            {cart && "Checkout"}
          </Link>
        </div>
      </div>
      {/* Copy Link */}
      <div
        className={`w-[100px] h-fit py-2 px-2 bg-[#4daf65] rounded fixed lg:top-20 top-2 flex  gap-2 items-center left-1/2 translate-x-[-50%] transition-all duration-300 z-[98] ${
          copy ? "opacity-100 visible " : "opacity-0 invisible "
        }`}
      >
        <FontAwesomeIcon icon={faLink} className="text-white font-medium" />
        <p className="text-white font-medium">Copied</p>
      </div>
      <main className="w-full h-fit  flex items-center flex-col pt-10">
        <h1 className="w-[95%] flex gap-3 text-gray-800/50 md:text-[14px] text-[10px]">
          <Link to={"/OurStore"} className="text-[#4daf65] text-center">
            {category}
          </Link>
          /<span className="text-center">{Product[0]["name"]}</span>
        </h1>
        <article className="lg:w-[95%] w-full h-fit grid lg:grid-cols-2 grid-cols-1 gap-10 py-5">
          {/* img */}
          <div className="bg-white flex justify-center ">
            <img src={Product[0]["img"]} alt="" />
          </div>
          {/* des */}
          <div className="lg:p-0 p-5 cursor-default flex flex-col justify-center">
            <p className="text-gray-800/50 mb-4">{category}</p>
            {Product[0]["discount"] > 0 ? (
              <span className="size-fit rounded bg-[#4daf65] px-2.5 py-1 text-white tracking-wider lg:text-md text-sm">
                -{Product[0]["discount"]}%
              </span>
            ) : null}
            <p className="xl:text-3xl  text-2xl mt-6 md:w-[90%] font-medium mb-5">
              {name}
            </p>
            <div className="flex gap-5 items-center mb-5">
              <p className="text-xl">{Math.ceil(Product[0]["rate"])}.0</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`text-lg ${
                      index < Product[0]["rate"]
                        ? " text-amber-300"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-md text-gray-800/50">
                ({Review.current} Reviews)
              </p>
            </div>
            <p className="xl:text-[13px] text-[10px] text-gray-800/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              consequatur nihil officia nemo saepe, iure facere tenetur nam
              praesentium fugiat ducimus nesciunt itaque enim quisquam, dolorum
              in et voluptas alias?
              <span className="lg:hidden xl:inline inline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nesciunt, magnam sit voluptas eius repudiandae
                recusandae molestias beatae totam reiciendis hic, nulla, ex
                saepe? Iste inventore praesentium nostrum suscipit sapiente.
              </span>
            </p>
            <hr className="my-5 border-gray-800/50 "></hr>
            <div className="w-fit h-fit  flex gap-2 items-center">
              <div className="size-[15px] bg-[#4daf65] rounded"></div>
              <p className="text-[#4daf65] text-sm">Available In Stock</p>
            </div>
            <p className="mt-2 text-[12px] font-medium text-gray-800/50">
              Delivery in 2-3 working days
            </p>
            <div className="flex gap-3 items-center text-3xl mt-3 text-[#4daf65] ">
              {Product[0]["discount"] > 0 ? (
                <>
                  <span className="font-medium">
                    $
                    {(
                      Product[0]["price"] *
                      (1 - Product[0]["discount"] / 100)
                    ).toFixed(2)}
                  </span>
                  <del className="pl-2 text-[13px] text-gray-700/40">
                    ${Product[0]["price"].toFixed(2)}
                  </del>
                </>
              ) : (
                <span className="font-medium">
                  ${Product[0]["price"].toFixed(2)}
                </span>
              )}
              <p className="pl-2 text-[13px] text-gray-700/40">
                Inclusive of VAT
              </p>
            </div>
            <div className="size-fit  mt-5 flex">
              <button
                onClick={(e) => Decrease(e)}
                className="size-[40px] border border-gray-800/50 flex items-center justify-center bg-white  text-gray-800/50 hover:text-white hover:bg-[#4daf65] text-2xl cursor-pointer"
              >
                -
              </button>
              <input
                type="number"
                value={qty}
                onChange={(e) => {
                  const value =
                    parseInt(e.target.value) <= 0
                      ? 1
                      : parseInt(e.target.value);
                  setQty(value);
                }}
                onBlur={() => {
                  if (qty === "" || isNaN(qty)) {
                    setQty(1);
                  }
                }}
                min={1}
                className="[&::-webkit-inner-spin-button]:appearance-none w-[70px] h-[40px] text-center outline-none bg-white text-gray-800/90 border-gray-800/50 border-y text-xl"
              />
              <button
                onClick={(e) => Increase(e)}
                className="size-[40px] border border-gray-800/50  flex items-center justify-center bg-white text-gray-800/50  hover:text-white hover:bg-[#4daf65] text-2xl cursor-pointer"
              >
                +
              </button>
            </div>
            <div className="size-fit  mt-5 flex flex-wrap gap-3">
              <button
                onClick={Cart}
                className="hover:bg-[#fe6150] cursor-pointer capitalize px-12 py-3 bg-[#4daf65] text-white font-bold text-lg "
              >
                Add to cart
              </button>
              <button
                onClick={Wish}
                className="hover:bg-slate-500 hover:text-white hover:border-slate-500 cursor-pointer capitalize px-10 py-3 border border-[#4daf65] text-[#4daf65] font-bold text-lg "
              >
                <FontAwesomeIcon icon={faHeart} className="pr-2" />
                Add to wishlist
              </button>
              <button
                onClick={Copy}
                className="hover:bg-slate-500 hover:text-white hover:border-slate-500 cursor-pointer capitalize px-10 py-3 border border-[#4daf65] text-[#4daf65] font-bold text-lg "
              >
                <FontAwesomeIcon icon={faShare} className="pr-2" />
                Share
              </button>
            </div>
          </div>
        </article>
        <section className="w-full h-fit flex flex-col mt-5 items-center mb-16">
          <div className="w-[95%] h-fit flex flex-col items-center text-sm pb-16">
            <FeatureTitle
              title1={"Related Products"}
              title2={"You maty also like"}
            />
          </div>
          <div className="w-[95%] h-fit  flex flex-wrap justify-between gap-y-5">
            <div className=" lg:grid-cols-5 md:grid-cols-3 grid grid-cols-2 w-full h-fit gap-10">
              {ProductRelated.map(
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
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailProduct;
