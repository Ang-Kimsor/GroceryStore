import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Cart_Wish = ({
  img,
  name,
  qty,
  wish,
  cart,
  price,
  discount,
  hidecart,
  hidewish,
  fullStock,
  alreadywish,
}) => {
  return (
    <>
      <div
        className={`${
          fullStock ? "visible opacity-100" : "invisible opacity-0"
        } flex items-center fixed transition-all duration-500 top-20 z-[50] -translate-x-1/2 left-1/2 p-4 mb-4 text-sm text-white rounded-lg bg-red-500`}
        role="alert"
      >
        <svg
          className="shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Adding quantity greater than stock</span>
        </div>
      </div>
      <div
        className={`md:w-[320px] h-fit w-[280px] bg-white shadow-xs shadow-gray-500 rounded fixed bottom-5 right-5 flex flex-wrap transition-all duration-300 z-[199] ${
          cart ? "opacity-100 visible " : "opacity-0 invisible "
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
              has been added to your Cart
            </p>
            {cart && (
              <>
                <p className="text-[10px] pl-2 pt-1 text-gray-800/50">
                  Quatity: {qty}
                </p>
                <p className="text-[10px] pl-2 pt-1 text-gray-800/50">
                  Total: {"$"}
                  {((price * (1 - discount / 100)).toFixed(2) * qty).toFixed(2)}
                </p>
              </>
            )}
          </div>
          <FontAwesomeIcon
            icon={faX}
            className="cursor-pointer text-sm ml-2 mt-1"
            onClick={hidecart}
          />
        </div>
        <div className="w-full h-[60px] grid grid-cols-2 gap-4 place-items-center px-3">
          <Link className="text-sm uppercase font-medium h-[35px] w-full flex items-center justify-center cursor-pointer bg-[#e8e8e8] ">
            View Cart
          </Link>
          <Link className="text-sm uppercase font-medium h-[35px] w-full flex items-center justify-center cursor-pointer bg-black text-white ">
            Checkout
          </Link>
        </div>
      </div>
      <div
        className={`${
          alreadywish ? "visible opacity-100" : "invisible opacity-0"
        } flex items-center fixed transition-all duration-500 top-20 z-[50] -translate-x-1/2 left-1/2 p-4 mb-4 text-sm text-white rounded-lg bg-red-500`}
        role="alert"
      >
        <svg
          className="shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span className="font-medium">Product already in wishlist</span>
        </div>
      </div>
      <div
        className={`md:w-[320px] h-fit w-[280px] bg-white shadow-xs shadow-gray-500 rounded fixed bottom-5 right-5 flex flex-wrap transition-all duration-300 z-[199] ${
          wish ? "opacity-100 visible " : "opacity-0 invisible "
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
              has been added to your wishlist
            </p>
          </div>
          <FontAwesomeIcon
            icon={faX}
            className="cursor-pointer text-sm ml-2 mt-1"
            onClick={hidewish}
          />
        </div>
        <div className="w-full h-[60px] grid grid-cols-2 gap-4 place-items-center px-3">
          <Link className="text-sm uppercase font-medium h-[35px] w-full flex items-center justify-center cursor-pointer bg-[#e8e8e8] ">
            Wishlist
          </Link>
          <Link className="text-sm uppercase font-medium h-[35px] w-full flex items-center justify-center cursor-pointer bg-black text-white ">
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart_Wish;
