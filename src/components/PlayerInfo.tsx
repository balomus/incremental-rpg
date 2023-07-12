import { useState } from "react";
import Bar from "./Bar";

export interface Info {
  name: string;
  level: number;
  currentExperience: number;
  maxExperience: number;
  currentHealth: number;
  maxHealth: number;
  currentMana: number;
  maxMana: number;
}

const PlayerInfo = (player: Info) => {
  console.log("player", player);

  const [name, setName] = useState(player.name);
  const [level, setLevel] = useState(player.level);
  const [experience, setExperience] = useState(player.currentExperience);
  const [maxExperience, setMaxExperience] = useState(player.maxExperience);

  return (
    <div className="flex items-center border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <div className="pr-3">
        <div className="text-xl">{name}</div>
        <div>Level {level}</div>
        <div>
          {experience} / {maxExperience}
        </div>
      </div>
      <div className="flex flex-col grow">
        <Bar
          type="health"
          currentValue={player.currentHealth}
          maxValue={player.maxHealth}
        />
        <Bar
          type="mana"
          currentValue={player.currentMana}
          maxValue={player.maxMana}
        />
      </div>
    </div>
  );
};

export default PlayerInfo;
