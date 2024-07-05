import "../styles/App.css";
import { useEffect, useState } from "react";
import Enemy from "../types/EnemyType";
import player from "../mocks/PlayerInfo.json";

import Tick from "../util/Tick";
import PlayerContextProvider from "../context/PlayerContextProvider";

function App() {
  // Player state
  // const [name, setName] = useState(player.name);
  // const [level, setLevel] = useState(player.level);
  // const [experience, setExperience] = useState(player.experience);
  // const [maxExperience, setMaxExperience] = useState(player.maxExperience);
  // const [gold, setGold] = useState(player.gold);
  // const [currentHealth, setCurrentHealth] = useState(player.currentHealth);
  // const [maxHealth, setMaxHealth] = useState(player.maxHealth);
  // const [currentMana, setCurrentMana] = useState(player.currentMana);
  // const [maxMana, setMaxMana] = useState(player.maxMana);
  // const [healthIncrement, setHealthIncrement] = useState(
  //   player.healthIncrement
  // );
  // const [manaIncrement, setManaIncrement] = useState(player.manaIncrement);
  // const [currentPlayer, setCurrentPlayer] = useState<PlayerContextType>(player);

  // Encounter state
  const [encounter, setEncounter] = useState<Enemy[]>([]);

  useEffect(() => {
    console.log("encounter ", encounter);
  }, [encounter]);

  return (
    // <PlayerContext.Provider value={currentPlayer}>
    <PlayerContextProvider>
      <div className={"m-5"}>
        Test
        <Tick />
        {/* <Tick
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
        <CombatAreas setEncounter={setEncounter} /> */}
      </div>
    </PlayerContextProvider>
  );
}

export default App;
