import ShowChartIcon from "@mui/icons-material/ShowChart";

const Card = () => {
  return (
    <div className="w-64 h-28 p-5 flex justify-between rounded-lg bg-green-700">
      <div>
        <p className="text-white">Total Patient</p>
        <div className="flex gap-2">
          <p className="font-bold text-2xl text-white">773k</p>
          <div className="">
            <ShowChartIcon sx={{ color: "white" }} />
            <div className="text-white">+4%</div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <p>icon</p>
      </div>
    </div>
  );
};

export default Card;
