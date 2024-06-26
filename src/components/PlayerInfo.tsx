// import { useEffect } from "react";
import NameAndLevel from "./NameAndLevel";
import Bars from "./Bars";
import Info from "../types/InfoType";

const PlayerInfo = ({ ...player }: Info) => {
  return (
    <div className="flex items-center border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <NameAndLevel
        name={player.name}
        level={player.level}
        experience={player.currentExperience}
        maxExperience={player.maxExperience}
        gold={player.gold}
      />
      <Bars
        currentHealth={player.currentHealth}
        maxHealth={player.maxHealth}
        healthIncrement={player.healthIncrement}
        currentMana={player.currentMana}
        maxMana={player.maxMana}
        manaIncrement={player.manaIncrement}
      />
    </div>
  );
};

export default PlayerInfo;
