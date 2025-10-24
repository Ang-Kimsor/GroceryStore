import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FeatureJobCard = ({ title, business, type, location }) => {
  // Feature Job Card
  return (
    <div className="py-12 bg-white px-7">
      <h1 className="text-3xl text-[#59C491] font-medium uppercase">{title}</h1>
      <hr className="my-4 border border-gray-800/20" />
      <p className="flex justify-between mb-2 capitalize text-gray-800/50 text-md">
        Business <span className="text-black">{business}</span>
      </p>
      <p className="flex justify-between mb-2 capitalize text-gray-800/50 text-md">
        Job Type <span className="text-black">{type}</span>
      </p>
      <p className="flex justify-between mb-2 capitalize text-gray-800/50 text-md">
        Location <span className="text-black">{location}</span>
      </p>
      <button className="bg-black uppercase font-medium text-white px-5 py-3 mt-5 gap-5 flex items-center cursor-pointer transition-all  duration-100 hover:bg-[#59C491]">
        Apply Now <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default FeatureJobCard;
