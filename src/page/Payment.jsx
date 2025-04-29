import {
  faEnvelope,
  faCity,
  faFlag,
  faHome,
  faPhone,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Payment = () => {
  const { Cart } = useCart();
  console.log(Cart);
  const totalPrice = Cart.reduce((sum, item) => {
    return sum + item.price * (1 - item.discount / 100) * item.qty;
  }, 0);
  return (
    <div className="w-full flex justify-center pb-10">
      <main className="lg:w-[95%] w-[99%] h-fit ">
        <h1 className="lg:py-12 py-5 text-gray-500/50 lg:pl-0 pl-2 flex gap-4">
          <Link to={"/Cart"} className="text-[#59C491]">
            Cart & Checkout
          </Link>
          <span>/</span>
          <p>Payment</p>
        </h1>
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-5">
          <aside className="bg-red-500">
            <div className="bg-[#f8f8f8] md:p-5 p-2">
              <h1 className="text-lg font-semibold">Order Summary</h1>
              <h1 className="text-md font-medium mt-5">Account</h1>
              <div className="w-full h-[40px] mt-3 flex items-center gap-3 px-5 bg-white">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sm text-[#59C491]"
                />
                <p className="text-[12px] text-gray-500/80">
                  example@gmail.com
                </p>
              </div>
              <div className="w-full  mt-5 grid xl:grid-cols-2 gap-5">
                <div>
                  <h1 className="lg:text-md text-[13px] font-medium">
                    Billing Address
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="w-full h-[40px] mt-3 flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">John Doe</p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">
                        +855 123 456 789
                      </p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faFlag}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">Cambodia</p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faHome}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">
                        123, ABC Street , Near By Hotel AAA , Opp .AD
                      </p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faHome}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">
                        Flat NO 201 , ABC Building
                      </p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faCity}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">Down Town</p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">Phnom Penh</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="lg:text-md text-[13px] font-medium">
                    Shipping Address
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="w-full h-[40px] mt-3 flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">John Doe</p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">
                        +855 123 456 789
                      </p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faFlag}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">Cambodia</p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faHome}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">
                        123, ABC Street , Near By Hotel AAA , Opp .AD
                      </p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faHome}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">
                        Flat NO 201 , ABC Building
                      </p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faCity}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">Down Town</p>
                    </div>
                    <div className="w-full h-[40px] flex items-center gap-3 px-5 bg-white">
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="text-sm text-[#59C491]"
                      />
                      <p className="text-[12px] text-gray-500/80">Phnom Penh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3 bg-white mt-5 px-5">
                <h1 className="text-md font-medium">Your Order</h1>
                <div className="mt-5">
                  {Cart.map(({ name, price, discount, qty }, index) => (
                    <div
                      key={index}
                      className={`${
                        Cart.length - 1 == index ? "border-y" : "border-t"
                      } h-[65px] border-gray-500/40 flex items-center justify-between`}
                    >
                      <h1 className="self-start mt-2 text-[13px]">{name}</h1>
                      <p className="flex flex-col items-end">
                        <span className="text-[12px] text-gray-500/80 font-medium">
                          {qty} x {(price * (1 - discount / 100)).toFixed(2)}
                        </span>
                        <span className="text-[15px] font-normal tracking-wider">
                          ${(qty * price * (1 - discount / 100)).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  ))}

                  <div className="w-full text-md mt-5 flex justify-between text-[12px]">
                    <p>Subtotal ({Cart.length})</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="w-full text-md mt-5 flex justify-between text-[12px]">
                    <p>Tax (5% VAT)</p>
                    <p>${(0.05 * totalPrice).toFixed(2)}</p>
                  </div>
                  <div className="w-full text-md mt-5 flex justify-between text-[12px]">
                    <p>Shipping (Flexible Shipping)</p>
                    <p>
                      $
                      {totalPrice >= 50
                        ? "0.00"
                        : (0.01 * totalPrice).toFixed(2)}
                    </p>
                  </div>
                  <div className="w-full font-medium mt-5 flex justify-between text-xl">
                    <p>Total Amount: </p>
                    <p>
                      $
                      {totalPrice >= 50
                        ? (totalPrice * 1.05).toFixed(2)
                        : (totalPrice * 1.06).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <aside className="bg-green-500">fsafas</aside>
        </div>
      </main>
    </div>
  );
};

export default Payment;
