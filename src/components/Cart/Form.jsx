import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEye,
  faEyeSlash,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { country } from "../../data/Contact";
const Form = () => {
  return (
    <form className="lg:px-10 px-2">
      <div className="border-b border-gray-500/80 pb-3 flex items-center justify-between">
        <p className="md:text-xl text-[12px] font-medium mt-3 ">
          Billing & Shipping Information
        </p>
        <p className="text-[12px] text-gray-500/80 text-center mt-3 font-medium">
          Have an Account?
          <Link to={"/Login"} className="text-[#59C491] ml-2">
            Login
          </Link>
        </p>
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className="mt-6 w-full h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
      />

      <div className="flex items-center pt-5">
        <input type="checkbox" className=" size-4 accent-[#59C491]" />
        <span className="capitalize ml-2 text-gray-500/80 text-[12px]">
          Email me with news and offers
        </span>
      </div>
      <div className="py-5 ">
        <p className="md:text-xl text-[12px] font-medium mt-3 ">
          Billing Address
        </p>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="First Name"
          className="w-1/2  h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-1/2  h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
        />
      </div>
      <input
        type="tel"
        placeholder="Phone"
        className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
      />
      <input
        type="text"
        placeholder="Company (Optional)"
        className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
      />
      <select
        defaultValue="Cambodia"
        className="w-full mt-4 h-[40px] outline-none pl-2 text-[#807D7E] text-[12px] bg-[#F6F6F8]"
      >
        {country.map(({ name, region }, index) => (
          <option
            key={index}
            value={name}
            className="text-[#807D7E] text-[12px]"
          >
            {name} ({region})
          </option>
        ))}
      </select>
      <div className="relative">
        <input
          type="text"
          placeholder="Address"
          className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
        />
        <FontAwesomeIcon
          icon={faLocationDot}
          className="absolute right-1 top-[50%] mt-2 cursor-pointer -translate-y-1/2 text-[#807D7E]"
        />
      </div>
      <input
        type="text"
        placeholder="Apartment, Suite, Etc. (Optional)"
        className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
      />
      <div className="flex gap-3 mt-4">
        <input
          type="text"
          placeholder="Town/City"
          className="w-1/2  h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
        />
        <input
          type="text"
          placeholder="State"
          className="w-1/2  h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
        />
      </div>
      <div className="flex items-center pt-5">
        <input type="checkbox" className=" size-4 accent-[#59C491]" />
        <span className="capitalize ml-2 text-gray-500/80 text-[12px]">
          Create an Account?
        </span>
      </div>
      <div className="relative">
        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
        />
        <FontAwesomeIcon
          icon={faEyeSlash}
          className="absolute right-1 top-[50%] mt-2 cursor-pointer -translate-y-1/2 text-[#807D7E]"
        />
      </div>
      <div className="relative">
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mt-4 h-[40px] outline-none pl-2 placeholder:text-[#807D7E] placeholder:text-[12px] bg-[#F6F6F8]"
        />
        <FontAwesomeIcon
          icon={faEye}
          className="absolute right-1 top-[50%] mt-2 cursor-pointer -translate-y-1/2 text-[#807D7E]"
        />
      </div>
      <div className="mt-4">
        <p className="text-[10px] text-[#807D7E]">
          Your password must have at least:
        </p>
        <span
          className={`text-[10px] text-[#807D7E] mt-2 flex gap-2 items-center`}
        >
          <FontAwesomeIcon icon={faCheck} />
          <p>8 Characters</p>
        </span>
        <span
          className={`text-[10px] text-[#807D7E] mt-2 flex gap-2 items-center`}
        >
          <FontAwesomeIcon icon={faCheck} />
          <p>1 Special Character (Example: # $ @ & ?)</p>
        </span>
        <span
          className={`text-[10px] text-[#807D7E]  mt-2 flex gap-2 items-center`}
        >
          <FontAwesomeIcon icon={faCheck} />
          <p>1 Uppercase and 1 Lowercase</p>
        </span>
        <span
          className={`text-[10px] text-[#807D7E]  mt-2 flex gap-2 items-center`}
        >
          <FontAwesomeIcon icon={faCheck} />
          <p>1 Numberical Digit</p>
        </span>
      </div>
      <div className="flex items-center pt-5">
        <input type="checkbox" className=" size-4 accent-[#59C491]" />
        <span className="capitalize ml-2 text-gray-500/80 text-[12px]">
          Ship to a different address?
        </span>
      </div>
      <div className="w-full bg-[#F6F6F8] mt-5 px-3 py-5">
        <h1 className="text-xl font-medium">Payment Methods</h1>
        <div className="flex flex-col gap-3 items-start mt-5">
          <div className="flex flex-row gap-3 items-center">
            <input type="radio" name="pay" className="accent-[#59C491]" />
            <label className="text-md text-gray-500/80">Collect and Pay</label>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="radio" name="pay" className="accent-[#59C491]" />
            <label className="text-md text-gray-500/80">
              COD (Cash on Delivery)
            </label>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="radio" name="pay" className="accent-[#59C491]" />
            <label className="text-md text-gray-500/80">
              Credit/Debit Card
            </label>
          </div>
          <p className="text-[12px] text-gray-500/80">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <Link className="text-[#59C491] underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
      <div className="w-full mt-7  flex justify-between">
        <Link
          to={"/"}
          className="border border-[#59C491] text-[#59C491] py-3 px-5 text-sm flex items-center justify-center cursor-pointer "
        >
          &lt; Back to Shop
        </Link>
        <Link
          to={"/"}
          className="bg-[#59C491] text-white py-3 px-5 text-sm flex items-center justify-center cursor-pointer "
        >
          Proceed to Payment &gt;
        </Link>
      </div>
    </form>
  );
};

export default Form;
