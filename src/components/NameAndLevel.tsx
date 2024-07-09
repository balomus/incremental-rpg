import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContextProvider";

const NameAndLevel = () => {
  const { player } = useContext(PlayerContext);

  return (
    <div className="pr-3">
      <h2 className="text-xl pb-2">{player.name}</h2>
      <div>Level {player.level}</div>
      <div>
        XP: {player.experience} / {player.maxExperience}
      </div>
      <div>Gold: {player.gold}</div>
    </div>
  );
};

export default NameAndLevel;
