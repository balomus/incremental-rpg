import { useEffect, useState } from "react";
import NameAndLevel from "./NameAndLevel";
import Bars from "./Bars";
import { Button } from "antd";

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

const PlayerInfo = ({ ...player }: Info) => {
  const [name, setName] = useState(player.name);
  const [level, setLevel] = useState(player.level);
  const [experience, setExperience] = useState(player.currentExperience);
  const [maxExperience, setMaxExperience] = useState(player.maxExperience);
  const [currentHealth, setCurrentHealth] = useState(player.currentHealth);
  const [maxHealth, setMaxHealth] = useState(player.maxHealth);
  const [currentMana, setCurrentMana] = useState(player.currentMana);
  const [maxMana, setMaxMana] = useState(player.maxMana);

  return (
    <div className="flex items-center border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <NameAndLevel
        name={name}
        level={level}
        experience={experience}
        maxExperience={maxExperience}
      />
      <Bars
        currentHealth={currentHealth}
        maxHealth={maxHealth}
        currentMana={currentMana}
        maxMana={maxMana}
      />
      <Button
        onClick={() => {
          setCurrentHealth(currentHealth - 5);
        }}
      >
        damage
      </Button>
    </div>
  );
};

export default PlayerInfo;
