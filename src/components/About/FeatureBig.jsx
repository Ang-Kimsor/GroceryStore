import { Link } from "react-router-dom";

const FeatureBig = ({ title, img }) => {
  // Feature Big
  return (
    <Link
      to={"/AboutUs"}
      className="relative flex justify-center w-full mb-20 h-fit"
    >
      <img
        className="lg:h-[700px] lg:w-[95%] h-[400px] object-cover object-left w-full grayscale-[30%]"
        src={img}
        alt={title}
      />
      <p className="uppercase absolute lg:bottom-[-100px]  md:bottom-[-50px] bottom-[-30px] m-0 p-0 text-white lg:text-[190px] md:text-[100px] text-[70px] font-semibold tracking-wider">
        {title}
      </p>
    </Link>
  );
};

export default FeatureBig;
