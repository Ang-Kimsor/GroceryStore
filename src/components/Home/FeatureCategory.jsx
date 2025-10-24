const FeatureCategory = ({ name, img }) => {
  // Feature Category Hero Card
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-3 group lg:-translate-y-[80px] -translate-y-[40px] md:hover:-translate-y-[40px] transition-all cursor-pointer">
        <div className="flex justify-center">
          <img src={img} alt={`category-${name}`} className="rounded" />
        </div>
        <div className="w-full h-fit flex flex-col items-center ">
          <h1 className="lg:text-xl md:text-lg text-[11px] my-3 font-[500] text-center">
            {name}
          </h1>
        </div>
      </div>
    </>
  );
};

export default FeatureCategory;
