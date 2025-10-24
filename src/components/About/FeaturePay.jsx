import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturePay = ({ icon, title, des }) => {
  // Feature Pay
  return (
    <div className="flex items-center gap-5 ">
      <div className="self-start mt-1.5 flex justify-center items-center ">
        <FontAwesomeIcon icon={icon} className="text-[#59C491] text-3xl " />
      </div>
      <div>
        <h1 className="pt-2 font-medium uppercase text-md">{title}</h1>
        <p className="text-[10px] pb-2 text-gray-500/70 capitalize">{des}</p>
      </div>
    </div>
  );
};

export default FeaturePay;
