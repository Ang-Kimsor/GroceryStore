import { Link } from "react-router-dom";

const FeatureBig = ({ title, img }) => {
  // Feature Career Big
  return (
    <Link
      to={"/Career"}
      className="relative flex justify-center w-full mb-20 h-fit"
    >
      <img
        className="lg:h-[700px] lg:w-[95%] h-[400px] object-cover object-left w-full grayscale-[30%]"
        src={img}
        alt={title}
      />
      <p className="uppercase absolute lg:bottom-[-150px]  md:bottom-[-50px] bottom-[-30px] m-0 p-0 text-white lg:text-[240px] md:text-[100px] text-[70px] font-semibold tracking-wider">
        {title}
      </p>
    </Link>
  );
};

export default FeatureBig;
