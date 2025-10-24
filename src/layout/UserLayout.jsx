import { Outlet } from "react-router-dom";
import Scroll from "../components/Scroll";
import SideMenu from "../components/User/SideMenu";
const UserLayout = () => {
  return (
    <>
      <Scroll />
      <div className="w-full mt-5 md:px-5 px-3 flex lg:flex-row flex-col">
        <SideMenu />
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
