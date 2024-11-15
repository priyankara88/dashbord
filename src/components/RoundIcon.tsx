import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { Box } from "@mui/system";
const Icon = [
  NotificationsNoneOutlinedIcon,
  ChatOutlinedIcon,
  Inventory2OutlinedIcon,
  Brightness5OutlinedIcon,
];

const RoundIcon: React.FC = () => {
  return (
    <div className="flex gap-3">
      {Icon.map((IconComponent, index) => (
        <div
          key={index}
          className="w-[3rem] h-[3rem] flex items-center justify-center bg-customBody rounded-full border-2 border-roundedBorder cursor-pointer"
        >
          <Box sx={{ color: "#36c95f" }}>
            <IconComponent />
          </Box>
        </div>
      ))}
    </div>
  );
};

export default RoundIcon;
