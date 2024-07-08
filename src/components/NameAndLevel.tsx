// interface NameAndLevelProps {
//   name: string;
//   level: number;
//   experience: number;
//   maxExperience: number;
//   gold: number;
// }

import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContextProvider";

// const NameAndLevel = ({
//   name,
//   level,
//   experience,
//   maxExperience,
//   gold,
// }: NameAndLevelProps) => {
const NameAndLevel = () => {
  const { player } = useContext(PlayerContext);

  return (
    <div className="pr-3">
      <div className="text-xl">{player.name}</div>
      <div>Level {player.level}</div>
      <div>
        XP: {player.experience} / {player.maxExperience}
      </div>
      <div>Gold: {player.gold}</div>
    </div>
  );
};

export default NameAndLevel;
