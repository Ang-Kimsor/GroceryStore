const FeatureCustomerCard = ({ img, des, name, type }) => {
  // Feature Customer Card
  return (
    <div className="relative flex flex-col items-center w-full gap-10 py-10 bg-white rounded cursor-pointer h-fit">
      <div className="size-[50px]">
        <img
          src={img}
          alt={name}
          className="object-cover object-center rounded-full size-full"
        />
      </div>
      <div className=" w-[95%] flex flex-col gap-2 items-center justify-center">
        <p className="text-center text-gray-800/50 lg:text-sm text-[10px]">
          {des}
        </p>
        <p className="pt-5 font-medium text-center">{name}</p>
        <p className="text-[10px] text-gray-800/50">{type}</p>
      </div>
      <p className="absolute text-9xl bottom-[-7px] right-5 font-mono text-[#fdeedb]">
        ,,
      </p>
    </div>
  );
};

export default FeatureCustomerCard;
