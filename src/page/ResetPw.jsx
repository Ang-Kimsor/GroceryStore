import Bg from "./../assets/bg-login.jpg";
import { Link } from "react-router-dom";
const ResetPw = ({ dashboard }) => {
  return (
    <main className="w-full md:h-[700px] h-[550px] relative">
      <div className="size-full">
        <img src={Bg} className="size-full object-cover" alt="" />
      </div>
      <form className="md:w-[600px] h-fit flex flex-col md:gap-3 gap-2 w-[90%] bg-white absolute inset-1/2 -translate-1/2 p-5 md:px-10 md:py-16">
        <p className="uppercase text-[#59C491] flex items-center text-[13px] tracking-widest">
          {dashboard && (
            <Link to={"/UserDashboard"} className="text-xl">
              &lt;
            </Link>
          )}
          Reset Password
        </p>
        <p className="mt-2 md:text-4xl text-xl font-[550] capitalize">
          Enter Your Email
        </p>
        <div className="w-full grid grid-cols-1">
          <input
            type="email"
            required
            className="bg-[#e8e8e8] h-[50px] px-2 outline-none rounded"
            placeholder="example@gmail.com"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white h-[40px] rounded text-lg font-medium mt-3 cursor-pointer bg-[#59C491]"
        >
          Reset Password
        </button>
        <p className="text-sm uppercase text-gray-800/50 ">
          New User?{" "}
          <Link to={"/Register"} className="hover:underline text-[#59C491]">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
};

export default ResetPw;
