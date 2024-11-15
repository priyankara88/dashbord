import { Outlet } from "react-router-dom";
import SideNavigation from "../components/SideNavigation";
import Header from "./Header";

const MainLayouts = () => {
  return (
    <div className="w-full relative ">
      <Header />
      <div className="w-[300px] fixed max-h-[calc(100vh_-80px)] overflow-x-hidden overflow-y-auto bg-customGray ">
        <SideNavigation />
      </div>
      <div className="w-full pl-[300px] max-h-[calc(100vh_-80px)] overflow-x-hidden overflow-y-auto bg-customBody">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
