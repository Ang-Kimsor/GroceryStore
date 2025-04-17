import { FeatureTitle } from "./../../components/Home";
import { country } from "./../../data/Contact";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <div className="pt-7 px-5">
      <FeatureTitle
        title1={"Contact us for all your questions and opinions"}
        title2={"We're ready to assist!"}
      />
      <form
        className="flex flex-wrap gap-x-[4%] gap-y-5 py-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col w-[48%]">
          <label className="mb-2 font-medium">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8]"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label className="mb-2 font-medium">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 font-medium">
            Phone Number <span className="text-gray-500/50">(Optional)</span>
          </label>
          <input
            type="tel"
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 font-medium">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <select
            required
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8]"
            defaultValue="Cambodia"
          >
            {country.map(({ name, region }, index) => (
              <option key={index} value={name}>
                {name} ({region})
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 font-medium">
            Subject <span className="text-gray-500/50">(Optional)</span>
          </label>
          <input
            type="tel"
            className="outline-none h-[45px] pl-1 bg-[#e8e8e8]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2 font-medium">Message</label>
          <textarea
            className="outline-none h-[100px] p-1 bg-[#e8e8e8]"
            placeholder="Note about your order, e.g. special note for delivery"
          />
        </div>
        <div className="flex flex-row items-center h-[20px] gap-2 w-full">
          <input type="checkbox" className="accent-[#59C491] size-4" />
          <label className="text-sm">
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
