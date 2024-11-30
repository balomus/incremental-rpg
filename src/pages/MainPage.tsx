import { useState } from "react";
import CombatAreas from "../components/CombatAreas";
import Encounter from "../components/Encounter";
import PlayerInfo from "../components/PlayerInfo";
import Tick from "../util/Tick";
import TEnemyType from "../types/TEnemyType";

const MainPage = () => {
  const [encounter, setEncounter] = useState<TEnemyType[]>([]);
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
