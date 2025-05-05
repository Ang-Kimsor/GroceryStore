import cookie from "./../assets/cookie.jpg";
import React from "react";

const Cookie = () => {
  return (
    <main className="w-full h-[500px]  flex items-center justify-center">
      <div className="w-[500px] h-[400px] flex flex-col items-center py-5 ">
        <img src={cookie} alt="" className="size-[150px] " />
        <h1 className="mt-4 text-3xl font-medium">We use cookie</h1>
        <p className="text-center text-sm w-[70%] my-3 text-gray-500/80">
          This website uses cookies to ensure you get the best experience on our
          website.
        </p>
        <div className="w-full flex gap-5 justify-center mt-5 ">
          <button className="bg-red-500 px-5 py-2  text-white font-medium rounded cursor-pointer">
            Reject
          </button>
          <button className="bg-[#59C491] px-5 py-2  text-white font-medium rounded cursor-pointer">
            Accept
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cookie;
