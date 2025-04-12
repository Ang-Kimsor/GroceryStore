import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faX,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ProductCard = ({ id, name, price, discount, rate, img, category }) => {
  rate = Math.round(rate);
  const [hover, setHover] = useState(false);
  const [cart, setCart] = useState(false);
  const [wish, setWish] = useState(false);
  const [OpenImg, setOpenImg] = useState(false);
  const Image = (e) => {
    e.preventDefault();
    setOpenImg(true);
  };
  const Cart = (e) => {
    e.preventDefault();
    setCart(true);
    setTimeout(() => {
      setCart(false);
    }, 2500);
  };
  const Wish = (e) => {
    e.preventDefault();
    setWish(true);
    setTimeout(() => {
      setWish(false);
    }, 2500);
  };
  useEffect(() => {
    if (OpenImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [OpenImg]);
  return (
    <>
      {/* Image preview */}
      {OpenImg && (
        <div
          className={`w-full h-screen bg-black/90 fixed top-0 left-0 z-[10] `}
        >
          <FontAwesomeIcon
            icon={faX}
            className="absolute md:right-10 right-2 top-2 md:top-10 text-lg text-white cursor-pointer"
            onClick={() => setOpenImg(false)}
          />
          <div className="w-full h-full flex items-center justify-center">
            <img src={img} alt="" />
          </div>
        </div>
      )}
      {/* Cart_Wishlist */}
      <div
        className={`md:w-[320px] h-[160px] w-[280px] bg-white shadow-sm shadow-gray-500/20 rounded fixed bottom-5 right-5 flex flex-wrap transition-all duration-300 z-[98] ${
          cart || wish ? "opacity-100 visible " : "opacity-0 invisible "
        }`}
      >
        <div className="w-full h-[100px] p-2  flex">
          <div className="w-[90px] h-[90px] flex justify-center items-center ">
            <img
              src={img}
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
            {wish && "Wishlist"}
            {cart && "Checkout"}
          </Link>
        </div>
      </div>

      {/* Main */}
      <Link
        key={id}
        to={`/OurStore/${category.replaceAll(" ", "_")}/${name.replaceAll(
          " ",
          "_"
        )}`}
        className={`w-fit h-fit  group cursor-pointer`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className="w-full h-fit relative">
          <img
            src={img}
            alt={name}
            className="border rounded border-gray-500/50"
          />
          <div
            className={`w-full h-full absolute flex flex-col justify-between top-0 left-0 p-2 group-hover:bg-gray-500/10 ${
              hover ? "bg-gray-500/10" : ""
            } rounded`}
          >
            {discount > 0 ? (
              <span className="size-fit rounded bg-[#4daf65] px-2.5 right-2 top-2 text-white tracking-wider md:text-[12px] text-[10px] absolute">
                -{discount}%
              </span>
            ) : null}
            <div
              className={`${
                hover
                  ? "translate-x-0 visible"
                  : "-translate-x-[30px] invisible"
              } w-full h-fit  flex flex-col items-start gap-2 -translate-x-[30px] invisible group-hover:translate-x-0 group-hover:visible transition-all duration-200`}
            >
              <span
                onClick={(e) => Image(e)}
                className="md:w-[40px] md:h-[40px] size-[25px] rounded-full flex items-center justify-center bg-white"
              >
                <FontAwesomeIcon
                  icon={faImage}
                  className="text-[#4daf65] md:text-sm text-[11px]"
                />
              </span>
              <span
                onClick={(e) => Wish(e)}
                className="md:w-[40px] md:h-[40px] size-[25px] rounded-full flex items-center justify-center bg-white"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={(e) => e.preventDefault()}
                  className="text-[#4daf65] md:text-sm text-[11px]"
                />
              </span>
            </div>
            <button
              onClick={(e) => Cart(e)}
              className={`${
                hover ? "translate-y-0 visible" : "translate-y-[30px] invisible"
              } w-full lg:h-[40px] h-[30px] cursor-pointer md:flex hidden bg-white gap-2 rounded items-center justify-center translate-y-[30px]  invisible group-hover:translate-y-0 group-hover:visible transition-all duration-200`}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[#4daf65] text-[10px] md:text-[12px]"
              />
              <p className="text-[#4daf65] text-[10px] md:text-sm">
                Add to cart
              </p>
            </button>
          </div>
        </div>
        <div className="w-full h-fit py-2 bg-white">
          <span className="w-full h-[20px]  flex items-center gap-[2px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`text-[13px] ${
                  index < rate ? " text-amber-300" : "text-gray-300"
                }`}
              />
            ))}
          </span>
          <p className="md:text-[15.5px] text-[13px] font-[400] py-2 pr-7 capitalize">
            {name}
          </p>
          <p className="text-[16px] font-medium text-[#6ddca6]">
            $
            {discount > 0 ? (
              <>
                <span>{(price * (1 - discount / 100)).toFixed(2)}</span>
                <del className="pl-2 text-[13px] text-gray-700/40">
                  ${price.toFixed(2)}
                </del>
              </>
            ) : (
              <span>{price.toFixed(2)}</span>
            )}
          </p>
          <button
            onClick={(e) => Cart(e)}
            className={` w-full h-[30px] md:hidden flex bg-[#4daf65] gap-2 rounded items-center justify-center mt-5 cursor-pointer`}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white text-[12px]"
            />
            <p className="text-white text-sm">Add to cart</p>
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
