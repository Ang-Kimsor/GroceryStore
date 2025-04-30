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
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Visa from "./../assets/visa.jpg";
import Mastercard from "./../assets/master.jpg";
import AmericanExpress from "./../assets/americanExpress.jpg";
import Paypal from "./../assets/paypal.jpg";
import { useState } from "react";
const Payment = () => {
  const { Cart } = useCart();
  const [cardNum, setCardNum] = useState("");
  const handleChangeCardNum = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    const formatted = input.replace(/(.{4})/g, "$1 ").trim();
    setCardNum(formatted);
  };
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
            <div className="bg-[#f6f6f8] md:p-5 p-2">
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
          <aside className="bg-white md:p-5 p-2">
            <h1 className="text-lg font-semibold border-b border-gray-500/50 pb-3">
              Payment
            </h1>
            <div className="mt-5">
              <h1 className="text-[12px] text-gray-500/80">
                Please Choose Your Payment Method
              </h1>
              <div className="w-fit mt-2 bg-[#f6f6f8] h-[40px] flex gap-3">
                <img src={Visa} className="h-full" alt="" />
                <img src={Mastercard} className="h-full" alt="" />
                <img src={AmericanExpress} className="h-full" alt="" />
                <img src={Paypal} className="h-full" alt="" />
              </div>
              <div className="py-8 px-5 bg-[#f6f6f8] mt-5">
                <div className="flex gap-5 items-center">
                  <label className="w-[100px] text-[12px]">Card Number*</label>
                  <input
                    type="text"
                    value={cardNum}
                    maxLength={19}
                    className="w-[300px] h-[30px] pl-2 placeholder:text-[12px] placeholder:tracking-wide placeholder:text-gray-500/80 text-[12px] outline-none bg-white"
                    placeholder="1234 1234 1234 1234"
                    onChange={(e) => handleChangeCardNum(e)}
                  />
                </div>
                <div className="flex gap-5 mt-5 items-center">
                  <label className="w-[100px] text-[12px]">Valid Till*</label>
                  <input
                    type="text"
                    maxLength={2}
                    className="w-[135px] h-[30px] pl-2 placeholder:text-[12px] placeholder:tracking-wide placeholder:text-gray-500/80 text-[12px] outline-none bg-white"
                    placeholder="Month"
                  />
                  <input
                    type="number"
                    maxLength={2}
                    className="w-[135px] h-[30px] pl-2 placeholder:text-[12px] placeholder:tracking-wide placeholder:text-gray-500/80 text-[12px] outline-none bg-white"
                    placeholder="Year"
                  />
                </div>
                <div className="flex gap-5 mt-5 items-center">
                  <label className="w-[100px] text-[12px]">Enter CVV*</label>
                  <input
                    type="number"
                    maxLength={3}
                    className="w-[135px] h-[30px] pl-2 placeholder:text-[12px] placeholder:tracking-wide placeholder:text-gray-500/80 text-[12px] outline-none bg-white"
                    placeholder="123"
                  />
                  <p className="text-[10px] text-[#59C491] cursor-pointer">
                    <svg
                      className="shrink-0 inline w-3 h-3 mr-1 text-[#59C491]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    What is this?
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Payment;
