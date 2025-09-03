import { useContext, useEffect, useState } from "react";
import CombatAreas from "../components/CombatAreas";
import Encounter from "../components/Encounter";
import PlayerInfo from "../components/PlayerInfo";
import Tick from "../util/Tick";
import TEnemyType from "../types/TEnemyType";
import { PlayerContext } from "../context/PlayerContextProvider";

const MainPage = () => {
  const [enemies, setEnemies] = useState<TEnemyType[]>([]);
  const [encounterName, setEncounterName] = useState<string>("");

  const { player, killPlayer, levelUpPlayer } = useContext(PlayerContext);

  useEffect(() => {
    if (player.currentHealth <= 0) {
      killPlayer();
    }
    if (player.experience >= player.maxExperience) {
      levelUpPlayer();
    }
  }, [player]);

  return (
    <div className={"m-5"}>
      <Tick />
      <PlayerInfo />

      {enemies.length > 0 && (
        <Encounter
          enemies={enemies}
          encounterName={encounterName}
          setEnemies={setEnemies}
        />
      )}
      {enemies.length === 0 && (
        <CombatAreas
          setEnemies={setEnemies}
          setEncounterName={setEncounterName}
        />
      )}
    </div>
  );
};

export default MainPage;
