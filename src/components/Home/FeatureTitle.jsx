const FeatureTitle = ({ title1, title2 }) => {
  // Feature Title
  return (
    <>
      <p
        className="uppercase text-[#59C491] text-[13px] tracking-widest"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          hidden: { opacity: 0, y: -10 },
        }}
      >
        {title1}
      </p>
      <h1
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          hidden: { opacity: 0, y: -10 },
        }}
        className="mt-2 md:text-4xl text-xl font-[550] capitalize"
      >
        {title2}
      </h1>
    </>
  );
};

export default FeatureTitle;
