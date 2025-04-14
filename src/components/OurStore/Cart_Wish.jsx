import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Cart_Wish = ({ img, name, qty, wish, cart, price, discount, hide }) => {
  return (
    <div
      className={`md:w-[320px] md:h-[160px] h-[220px] w-[280px] bg-white shadow-xs shadow-gray-500 rounded fixed bottom-5 right-5 flex flex-wrap transition-all duration-300 z-[199] ${
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
          {cart && (
            <>
              <p className="text-[10px] pl-2 pt-1 text-gray-800/50">
                Quatity: {qty}
              </p>
              <p className="text-[10px] pl-2 pt-1 text-gray-800/50">
                Total: {"$"}
                {(price * (1 - discount / 100) * qty).toFixed(2)}
              </p>
            </>
          )}
        </div>
        <FontAwesomeIcon
          icon={faX}
          className="cursor-pointer text-sm ml-2 mt-1"
          onClick={hide}
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
  );
};

export default Cart_Wish;
