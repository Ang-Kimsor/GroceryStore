import React, { useState } from "react";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const WishlistCard = ({
  id,
  img,
  name,
  price,
  discount,
  stock,
  rate,
  category,
}) => {
  const { dispatchWishlist } = useWishlist();
  const { Cart, dispatchCart } = useCart();
  const removefromWishlist = (id) => {
    dispatchWishlist({ type: "REMOVE", payload: id });
  };
  const addtocart = (id, name, price, discount, rate, img, category, stock) => {
    const inCart = Cart.find((item) => item.id === id);
    if (inCart) {
      alert("Item already in cart");
      setCart(true);
      return;
    }
    setCart(true);
    dispatchCart({
      type: "ADD",
      payload: {
        id: id,
        name: name,
        price: price,
        discount: discount,
        rate: rate,
        img: img,
        category: category,
        stock: stock,
        qty: 1,
      },
    });
  };
  const [cart, setCart] = useState(false);
  return (
    <tr className="border-y-1 w-full h-[40px] relative border-gray-500/30 ">
      <th className="w-full py-5 text-[12px] font-medium relative text-[#3C4242] justify-center flex items-center">
        <img src={img} alt="" className="size-[60px]" />
      </th>
      <th className="w-1/5 py-5 md:text-[12px] text-[10px] font-medium text-[#3C4242]">
        {name}
      </th>
      <th className=" w-1/5 py-5 text-[12px] font-medium text-[#3C4242]">
        ${(price * (1 - discount / 100)).toFixed(2)}
      </th>
      <th
        className={`w-1/5 py-5 text-[11px] font-medium ${
          stock == 0 ? "text-[#3C4242]" : "text-[#59C491]"
        }`}
      >
        {stock == 0 ? "Out of stock" : `Available (${stock})`}
      </th>
      <th className=" w-1/5 text-[12px] font-medium text-[#3C4242]">
        <button
          onClick={() => removefromWishlist(id)}
          className="size-[25px] md:size-fit md:px-2 py-1 mr-3 rounded text-white lg:text-[10px] text-[9px] font-medium cursor-pointer bg-red-500"
        >
          <p className="md:block hidden">Remove</p>
          <div className="md:hidden block">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </button>
        <button
          onClick={() => {
            cart
              ? null
              : addtocart(
                  id,
                  name,
                  price,
                  discount,
                  rate,
                  img,
                  category,
                  stock
                );
          }}
          className={` size-[25px] md:size-fit md:px-1 py-1 rounded text-white lg:text-[10px] text-[9px] font-medium cursor-pointer bg-[#59C491]`}
        >
          <p className="md:block hidden">
            {cart ? "Already in cart" : "Add to cart"}
          </p>
          <div className="md:hidden block">
            <FontAwesomeIcon
              className="md:hidden block"
              icon={cart ? faCheck : faShoppingCart}
            />
          </div>
        </button>
      </th>
    </tr>
  );
};

export default WishlistCard;
