import { Link } from "react-router-dom";

const Address = () => {
  return (
    <div className="bg-[#f8f8f8] p-5">
      <div className="grid w-full h-fit md:grid-cols-2 md:gap-y-16 gap-y-5">
        <div>
          <h1 className="pb-3 text-lg font-medium uppercase">Company Name</h1>
          <address className="pt-1">Street, City, Country</address>
          <p className="pb-1">+855 123 456 789</p>
          <Link className="text-[#59C491] text-sm">companyname@gmail.com</Link>
        </div>
        <div>
          <h1 className="pb-3 text-lg font-medium uppercase">Company Name</h1>
          <address className="pt-1">Street, City, Country</address>
          <p className="pb-1">+855 123 456 789</p>
          <Link className="text-[#59C491] text-sm">companyname@gmail.com</Link>
        </div>
        <div>
          <h1 className="pb-3 text-lg font-medium uppercase">Company Name</h1>
          <address className="pt-1">Street, City, Country</address>
          <p className="pb-1">+855 123 456 789</p>
          <Link className="text-[#59C491] text-sm">companyname@gmail.com</Link>
        </div>
      </div>
      <div className="pt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125075.64098080056!2d104.80778585050594!3d11.579520773004354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1744901514485!5m2!1sen!2skh"
          className="w-full md:h-[500px] h-[300px] border-none"
        />
      </div>
    </div>
  );
};

export default Address;
