import MenuIcon from "@mui/icons-material/Menu";
import RoundIcon from "../components/RoundIcon";
import ProfileNavigation from "../components/ProfileNavigation";
import ThirteenMpIcon from "@mui/icons-material/ThirteenMp";

const Header = () => {
  return (
    <div className="w-full flex top-0 left-0 h-20 z-50 sticky bg-customGray">
      {/* left side */}
      <div className="w-[300px] flex gap-2 justify-center  items-center">
        <ThirteenMpIcon sx={{ fontSize: 50, backgroundColor: "green" }} />
        <p className=" text-backgroundGreen text-[3rem]">ERES</p>
      </div>
      {/* right */}
      <div className="w-[calc(100vw_-300px)] flex items-center  justify-between">
        {/* right left */}
        <div className="flex pl-10 gap-5 items-center cursor-pointer ">
          <MenuIcon sx={{ fontSize: 40 }} className="text-CoustomText" />
          <p className="text-[2rem] text-CoustomText">Dashboard</p>
        </div>
        {/*right right  */}
        <div className="flex gap-5">
          <RoundIcon />
          <ProfileNavigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
