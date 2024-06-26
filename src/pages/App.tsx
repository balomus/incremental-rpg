import PlayerInfo from "../components/PlayerInfo";
import "../styles/App.css";
import player from "../mocks/PlayerInfo.json";
import { useEffect, useState } from "react";
import Tick from "../util/Tick";

import { Button } from "antd";
import CombatAreas from "../components/CombatAreas";
import Encounter from "../components/Encounter";
import Enemy from "../types/EnemyType";

function App() {
  // Player state
  const [name, setName] = useState(player.name);
  const [level, setLevel] = useState(player.level);
  const [experience, setExperience] = useState(player.experience);
  const [maxExperience, setMaxExperience] = useState(player.maxExperience);
  const [gold, setGold] = useState(player.gold);
  const [currentHealth, setCurrentHealth] = useState(player.currentHealth);
  const [maxHealth, setMaxHealth] = useState(player.maxHealth);
  const [currentMana, setCurrentMana] = useState(player.currentMana);
  const [maxMana, setMaxMana] = useState(player.maxMana);
  const [healthIncrement, setHealthIncrement] = useState(
    player.healthIncrement
  );
  const [manaIncrement, setManaIncrement] = useState(player.manaIncrement);

  // Encounter state
  const [encounter, setEncounter] = useState<Enemy[]>([]);

  useEffect(() => {
    console.log("encounter ", encounter);
  }, [encounter]);

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
        gold={gold}
        currentHealth={currentHealth}
        maxHealth={maxHealth}
        currentMana={currentMana}
        maxMana={maxMana}
        healthIncrement={healthIncrement}
        manaIncrement={manaIncrement}
      />
      {encounter.length <= 0 ? (
        <>LT or EQ to 0</>
      ) : (
        <Encounter encounter={encounter} />
      )}
      <CombatAreas setEncounter={setEncounter} />
    </div>
  );
}

export default App;
