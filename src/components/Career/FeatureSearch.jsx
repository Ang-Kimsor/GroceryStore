import FeatureTitle from "./../Home/FeatureTitle";
const FeatureSearch = () => {
  // Feature Search
  return (
    <div className="flex flex-col items-center w-full h-fit">
      <FeatureTitle
        title1={"come work with us"}
        title2={"Search the right job for you"}
      />
      <div className="md:w-[95%] h-[150px] w-[98%]  items-center justify-between flex flex-row md:gap-10 md:flex-nowrap flex-wrap mt-10">
        <div className="flex flex-row w-full lg:w-1/2 h-1/3">
          <input
            type="text"
            className="w-[80%] h-full outline-none px-2 text-md bg-[#e8e8e8]"
            placeholder="Job Title or Keyword"
          />
          <button className="w-[20%] bg-[#59C491] cursor-pointer font-medium text-white">
            Search
          </button>
        </div>
        <div className="flex w-full gap-5 lg:w-1/2 h-1/3">
          <select className="outline-none w-1/3 text-[13px] h-full bg-[#e8e8e8] pl-2">
            <option value="">All Business</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Technology">Technology</option>
            <option value="Management">Management</option>
          </select>
          <select className="outline-none w-1/3 text-[13px] h-full bg-[#e8e8e8] pl-2">
            <option value="">All Type</option>
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>
          <select className="outline-none w-1/3 text-[13px] h-full bg-[#e8e8e8] pl-2">
            <option value="">All Location</option>
            <option value="Cambodia">Cambodia</option>
            <option value="China">China</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FeatureSearch;
