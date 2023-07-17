import PlayerInfo from "../components/PlayerInfo";
import "../styles/App.css";
import player from "../mocks/PlayerInfo.json";
import { useEffect, useState } from "react";
import Tick from "../util/Tick";

import { Button } from "antd";
import CombatAreas from "../components/CombatAreas";

function App() {
  const [name, setName] = useState(player.name);
  const [level, setLevel] = useState(player.level);
  const [experience, setExperience] = useState(player.currentExperience);
  const [maxExperience, setMaxExperience] = useState(player.maxExperience);
  const [currentHealth, setCurrentHealth] = useState(player.currentHealth);
  const [maxHealth, setMaxHealth] = useState(player.maxHealth);
  const [currentMana, setCurrentMana] = useState(player.currentMana);
  const [maxMana, setMaxMana] = useState(player.maxMana);

  const [healthIncrement, setHealthIncrement] = useState(
    player.healthIncrement
  );
  const [manaIncrement, setManaIncrement] = useState(player.manaIncrement);

  return (
    <div className={"m-5"}>
      <Tick
        currentHealth={currentHealth}
        maxHealth={maxHealth}
        setCurrentHealth={setCurrentHealth}
        healthIncrement={healthIncrement}
        currentMana={currentMana}
        maxMana={maxMana}
        setCurrentMana={setCurrentMana}
        manaIncrement={manaIncrement}
      />
      <PlayerInfo
        name={name}
        level={level}
        currentExperience={experience}
        maxExperience={maxExperience}
        currentHealth={currentHealth}
        maxHealth={maxHealth}
        currentMana={currentMana}
        maxMana={maxMana}
        healthIncrement={healthIncrement}
        manaIncrement={manaIncrement}
      />
      <CombatAreas />
      {/* <Button
        onClick={() => {
          setCurrentHealth(currentHealth - 5);
        }}
      >
        damage
      </Button> */}
    </div>
  );
}

export default App;
