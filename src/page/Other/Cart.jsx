import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense, lazy } from "react";
import { useCart } from "./../../Context/CartContext";
const CartCard = lazy(() => import("./../../components/Cart/CartCard"));
const Form = lazy(() => import("./../../components/Cart/Form"));
const Cart = ({ dashboard }) => {
  const { Cart } = useCart();
  const totalPrice = Cart.reduce((sum, item) => {
    return sum + item.price * (1 - item.discount / 100) * item.qty;
  }, 0);

  return (
    <main className="w-full flex justify-center pb-10 px-1">
      <motion.section
        className="lg:w-[95%] w-[99%] h-fit "
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
          hidden: {},
        }}
      >
        <motion.h1
          className="lg:py-12 py-5 text-[#59C491] flex flex-col lg:pl-0 pl-2"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          {dashboard && (
            <Link to={"/UserDashBoard"} className="mr-2 text-gray-500 mb-5">
              &lt; Back to Dashboard
            </Link>
          )}
          Cart & Checkout
        </motion.h1>
        <motion.div
          className="grid lg:grid-cols-2 lg:gap-20 gap-5"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
            hidden: { opacity: 0, y: -20 },
          }}
        >
          <aside>
            <div className="bg-[#f6f6f8] md:p-5 p-2">
              <div
                className={` w-full h-[55px] border border-[#59C491] bg-white flex items-center justify-center`}
              >
                <svg
                  className="shrink-0 inline w-3 h-3 mr-1 text-[#59C491]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <p className="md:text-[13px] text-[9px] text-center  font-normal">
                  {totalPrice >= 50
                    ? "Free Shipping!"
                    : `You only need $${(50 - totalPrice).toFixed(
                        2
                      )} more to get free shipping!`}

                  <Link to={"/OurStore"} className="text-[#59C491] ml-2">
                    Continue Shopping &gt;
                  </Link>
                </p>
              </div>
              <div className="my-10">
                <p className="text-sm">
                  Have a coupon?
                  <span className="text-[#59C491] cursor-pointer">
                    Enter your code
                  </span>
                </p>
                <div className="mt-5  h-[40px] ">
                  <input
                    type="text"
                    className="w-[180px] h-full outline-none pl-1 bg-white placeholder:text-[12px]"
                    placeholder="Coupon Code"
                  />
                  <button className="text-[13px] uppercase text-white cursor-pointer px-3 bg-[#59C491] h-full">
                    Apply Coupon
                  </button>
                </div>
              </div>
              <div className="w-full">
                <h1 className="text-xl font-medium mb-5">Your Cart</h1>
                <Suspense
                  fallback={
                    <div className="bg-white w-full p-5 flex flex-col gap-5">
                      {Cart.map((_, index) => (
                        <Skeleton
                          key={index}
                          height="120px"
                          baseColor="rgba(229, 231, 235)"
                        />
                      ))}
                    </div>
                  }
                >
                  <motion.div
                    className="bg-white w-full p-5 flex flex-col gap-5"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.2,
                        },
                      },
                      hidden: {},
                    }}
                  >
                    {Cart.length === 0 ? (
                      <p className="text-center text-gray-500/80 py-10 flex items-center justify-center">
                        Cart is empty
                      </p>
                    ) : (
                      Cart.map(
                        (
                          { id, name, img, price, qty, discount, stock },
                          index
                        ) => (
                          <motion.div
                            key={index}
                            variants={{
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6 },
                              },
                              hidden: { opacity: 0, y: -20 },
                            }}
                          >
                            <CartCard
                              id={id}
                              name={name}
                              img={img}
                              price={price}
                              qty={qty}
                              discount={discount}
                              stock={stock}
                              lastitem={index == Cart.length - 1}
                            />
                          </motion.div>
                        )
                      )
                    )}
                  </motion.div>
                </Suspense>
                <div className="w-full text-md mt-7 flex justify-between text-[12px]">
                  <p>Subtotal ({Cart.length})</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="w-full text-md mt-7 flex justify-between text-[12px]">
                  <p>Tax (5% VAT)</p>
                  <p>${(0.05 * totalPrice).toFixed(2)}</p>
                </div>
                <div className="w-full text-md mt-7 flex justify-between text-[12px]">
                  <p>Shipping (Flexible Shipping)</p>
                  <p>
                    $
                    {totalPrice >= 50 ? "0.00" : (0.01 * totalPrice).toFixed(2)}
                  </p>
                </div>
                <div className="w-full font-medium mt-7 flex justify-between text-xl">
                  <p>Total Amount: </p>
                  <p>
                    $
                    {totalPrice >= 50
                      ? (totalPrice * 1.05).toFixed(2)
                      : (totalPrice * 1.06).toFixed(2)}
                  </p>
                </div>
                <p className="text-[12px] mt-7 text-gray-500/80 font-medium">
                  The total amount you pay includes all applicable customs
                  duties & taxes. Lorem ipsum is simply dummy text of the
                  printing and typesetting industry standard dummy text ever
                  since.
                </p>
              </div>
            </div>
          </aside>
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Suspense
              fallback={
                <Skeleton height="600px" baseColor="rgba(229, 231, 235)" />
              }
            >
              <Form />
            </Suspense>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Cart;
