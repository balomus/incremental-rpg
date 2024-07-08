import NameAndLevel from "./NameAndLevel";
import Bars from "./Bars";

const PlayerInfo = () => {
  return (
    <div className="flex items-center border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <NameAndLevel />
      <Bars />
    </div>
  );
};

export default PlayerInfo;
