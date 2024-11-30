import { useState } from "react";
import Enemy from "../types/TEnemyType";
import CombatAreas from "../components/CombatAreas";
import Encounter from "../components/Encounter";
import PlayerInfo from "../components/PlayerInfo";
import Tick from "../util/Tick";

const MainPage = () => {
  const [encounter, setEncounter] = useState<Enemy[]>([]);
  const [encounterName, setEncounterName] = useState<string>("");

  return (
    <div className={"m-5"}>
      <Tick />
      <PlayerInfo />

      {encounter.length > 0 && (
        <Encounter
          encounter={encounter}
          encounterName={encounterName}
          setEncounter={setEncounter}
        />
      )}
      {encounter.length === 0 && (
        <CombatAreas
          setEncounter={setEncounter}
          setEncounterName={setEncounterName}
        />
      )}
    </div>
  );
};

export default MainPage;
