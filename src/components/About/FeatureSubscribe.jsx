import { Link } from "react-router-dom";
const FeatureSubscribe = ({ title, des, link, path, img }) => {
  // Featuer Subscribe
  return (
    <div className="bg-white rounded w-[95%] lg:h-[450px] h-fit grid lg:grid-cols-2 lg:gap-5 pt-10">
      <div className="flex flex-col justify-center px-5 lg:px-10 gap-7">
        <h1 className="pl-2 pr-5 text-2xl font-medium capitalize lg:text-4xl">
          {title}
        </h1>
        <p className="pl-2 pr-5 text-sm capitalize text-gray-500/50">
          {des + " "}
          <Link to={path} className="uppercase text-[#59C491]">
            {link}
          </Link>
        </p>
        <div className="w-fit h-[50px] px-2 flex">
          <input
            type="email"
            placeholder="Email Address"
            className="w-[200px] h-[70%] outline-none bg-[#e8e8e8] pl-2"
          />
          <button className="w-fit h-[70%] cursor-pointer bg-black text-white text-sm px-2 hover:bg-[#59C491]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex items-end px-5 ">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default FeatureSubscribe;
