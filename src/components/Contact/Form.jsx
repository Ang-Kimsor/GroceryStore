import FeatureTitle from "./../../components/Home/FeatureTitle";
import { country } from "./../../data/Contact";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <div className=" w-full md:pt-7 md:px-5 px-2">
      <FeatureTitle
        title1={"Contact us for all your questions and opinions"}
        title2={"We're ready to assist!"}
      />
      <form
        className=" w-full flex flex-wrap gap-x-[4%] gap-y-5 py-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col md:w-[48%] w-full items-center">
          <label className="mb-2 font-medium self-start ">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8] w-[99%]"
          />
        </div>
        <div className="flex flex-col md:w-[48%] w-full items-center">
          <label className="mb-2 font-medium self-start ">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8] w-[99%]"
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="mb-2 font-medium self-start ">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8] w-[99%]"
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="mb-2 font-medium self-start ">
            Phone Number <span className="text-gray-500/50">(Optional)</span>
          </label>
          <input
            type="tel"
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8] w-[99%]"
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="mb-2 font-medium self-start ">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <select
            required
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8] w-[99%]"
            defaultValue="Cambodia"
          >
            {country.map(({ name, region }, index) => (
              <option key={index} value={name}>
                {name} ({region})
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="mb-2 font-medium self-start ">
            Subject <span className="text-gray-500/50">(Optional)</span>
          </label>
          <input
            type="tel"
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8] w-[99%]"
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="mb-2 font-medium self-start ">Message</label>
          <textarea
            className="outline-none h-[100px] p-1 bg-[#e8e8e8] resize-none  pl-1 w-[99%]"
            placeholder="Note about your order, e.g. special note for delivery"
          />
        </div>
        <div className="flex flex-row items-center h-[20px] gap-2 my-4 w-full">
          <input type="checkbox" className="accent-[#59C491] size-4 " />
          <label className="md:text-sm text-[12px]">
            I want to receive news and updates once in a while. By submitting ,
            I'm agreed to the{" "}
            <Link className="text-[#59C491] hover:underline">
              Terms & Conditions
            </Link>
          </label>
        </div>
        <button
          className="uppercase font-medium bg-black text-white cursor-pointer py-2 px-5 hover:bg-[#59C491] transition-all duration-100"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
