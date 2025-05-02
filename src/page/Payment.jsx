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
import { List } from "../components/Cart";
const Payment = () => {
  const { Cart } = useCart();
  const [cardNum, setCardNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const handleChangeCardNum = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    const formatted = input.replace(/(.{4})/g, "$1 ").trim();
    setCardNum(formatted);
  };
  const handleChangeMonth = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    if (parseInt(input) > 12) input = "12";
    else if (parseInt(input) < 1) input = "1";
    setMonth(input);
  };
  const handleChangeYear = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    setYear(input);
  };
  const handleChangeCVV = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    setCvv(input);
  };
  const totalPrice = Cart.reduce((sum, item) => {
    return sum + item.price * (1 - item.discount / 100) * item.qty;
  }, 0);
  return (
    <div className="w-full flex justify-center pb-10 px-3">
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
                    <List
                      length={Cart.length}
                      key={index}
                      index={index}
                      name={name}
                      price={price}
                      discount={discount}
                      qty={qty}
                      isListImg={false}
                    />
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
              <div className="py-10 md:px-8 px-2 bg-[#f6f6f8] mt-5">
                <div className="flex md:flex-row flex-col md:gap-5 gap-3 md:items-center">
                  <label className="md:w-[100px] w-full md:text-[12px] text-sm">
                    Card Number*
                  </label>
                  <input
                    type="text"
                    value={cardNum}
                    maxLength={19}
                    className="md:w-[300px] md:h-[30px] h-[40px] pl-2 placeholder:text-[12px] placeholder:tracking-wide placeholder:text-gray-500/80 text-[12px] outline-none bg-white"
                    placeholder="1234 1234 1234 1234"
                    onChange={(e) => handleChangeCardNum(e)}
                  />
                </div>
                <div className="flex md:flex-row  mt-5 flex-col md:gap-5 gap-3 md:items-center">
                  <label className="md:w-[100px] w-full md:text-[12px] text-sm">
                    Valid Till*
                  </label>
                  <input
                    type="text"
                    maxLength={2}
                    value={month}
                    className="md:w-[135px] md:h-[30px] h-[40px] pl-2 placeholder:text-[12px] placeholder:tracking-wide placeholder:text-gray-500/80 text-[12px] outline-none bg-white"
                    placeholder="Month"
                    onChange={(e) => handleChangeMonth(e)}
                  />
                  <input
                    type="text"
                    maxLength={4}
                    value={year}
                    className="md:w-[135px] md:h-[30px] h-[40px] pl-2 placeholder:text-[12px] placeholder:tracking-wide placeholder:text-gray-500/80 text-[12px] outline-none bg-white"
                    placeholder="Year"
                    onChange={(e) => handleChangeYear(e)}
                    onBlur={() => {
                      if (parseInt(year) < 2025) {
                        setYear(new Date().getFullYear());
                      }
                    }}
                  />
                </div>
                <div className="flex md:flex-row  mt-5 flex-col md:gap-5 gap-3 md:items-center">
                  <label className="md:w-[100px] w-full md:text-[12px] text-sm">
                    Enter CVV*
                  </label>
                  <input
                    type="text"
                    maxLength={3}
                    value={cvv}
                    onChange={(e) => handleChangeCVV(e)}
                    className="md:w-[135px] md:h-[30px] h-[40px] pl-2 placeholder:text-[12px] placeholder:tracking-wide placeholder:text-gray-500/80 text-[12px] outline-none bg-white"
                    placeholder="123"
                  />
                  <p className="md:text-[10px] text-sm text-[#59C491] cursor-pointer">
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
              <div className="px-8 mt-3 flex items-center gap-4">
                <input type="checkbox" />
                <label className="capitalize text-gray-500/80 text-[9px]">
                  By agreeing, the emerald star general trading LLC will share
                  your card details , billing address and email with Click to
                  pay to allow you to securely enroll for faster Checkout.{" "}
                  <Link className="text-[#59C491]">Learn More</Link>
                </label>
              </div>
            </div>
            <div className="w-full mt-7  flex justify-between">
              <Link
                to={"/Cart"}
                className="border border-[#59C491] text-[#59C491] py-3 px-5 text-sm flex items-center justify-center cursor-pointer "
              >
                &lt; Back To Cart
              </Link>
              <Link
                to={`/Cart/Payment/PaymentStatus`}
                className={`${
                  Cart.length == 0 && "hidden"
                } bg-[#59C491] text-white py-3 px-5 text-sm flex items-center justify-center cursor-pointer`}
              >
                Pay & Place Order &gt;
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Payment;
