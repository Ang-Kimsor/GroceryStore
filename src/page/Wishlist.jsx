import React from "react";
import { useWishlist } from "./../Context/WishlistContext";
import { Link } from "react-router-dom";
import WishlistCard from "../components/Wishlist/WishlistCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Wishlist = ({ dashboard }) => {
  const { wishlist } = useWishlist();
  return (
    <main className="w-full h-fit flex flex-col items-center py-5">
      <div
        className={`lg:w-[95%] w-[99%] bg-[#f8f8f8] ${
          dashboard ? "lg:px-5 px-3" : "lg:px-10 px-3"
        } pb-10`}
      >
        <h1 className="w-full p-5 text-2xl font-semibold">
          {!dashboard && (
            <Link to={"/OurStore"} className="mr-2">
              &lt;
            </Link>
          )}
          My Wishlist
        </h1>
        <table className=" w-full">
          <thead>
            <tr className="border-y-1 border-gray-500/30">
              <th className=" w-1/5 py-5 text-[12px] font-medium text-[#3C4242]"></th>
              <th className=" w-1/5 py-5 text-[10px] font-medium text-[#3C4242]">
                Product Name
              </th>
              <th className=" w-1/5 py-5 text-[10px] font-medium text-[#3C4242]">
                Price
              </th>
              <th className=" w-1/5 py-5 text-[10px] font-medium text-[#3C4242]">
                Stock
              </th>
              <th className=" w-1/5 py-5 text-[10px] font-medium text-[#3C4242]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody
            className={`w-full relative ${
              wishlist.length == 0 ? "h-[300px]" : "h-fit"
            }`}
          >
            {wishlist.length == 0 ? (
              <tr className="w-full h-[300px]">
                <td
                  colSpan="5"
                  className="text-center text-gray-500 font-semibold text-lg"
                >
                  No items in wishlist
                </td>
              </tr>
            ) : (
              wishlist.map(
                (
                  { id, img, name, price, discount, stock, rate, category },
                  index
                ) => (
                  <WishlistCard
                    key={index}
                    id={id}
                    img={img}
                    name={name}
                    price={price}
                    discount={discount}
                    stock={stock}
                    rate={rate}
                    category={category}
                  />
                )
              )
            )}
          </tbody>
        </table>
        <div className="w-full flex gap-5 justify-end mt-5">
          {!dashboard && (
            <Link
              to={"/OurStore"}
              className="bg-white py-3 px-5 text-sm border font-medium border-[#59C491]"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
              Back
            </Link>
          )}
          <Link
            to={dashboard ? "/UserDashBoard/Cart" : "/Cart"}
            className=" py-3 px-5 text-sm text-white font-medium bg-[#59C491]"
          >
            View Cart
            <FontAwesomeIcon icon={faShoppingCart} className="ml-3" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
