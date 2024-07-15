import "../styles/App.css";
import { useContext, useEffect, useState } from "react";
import Enemy from "../types/EnemyType";
import Tick from "../util/Tick";
import PlayerContextProvider, {
  PlayerContext,
} from "../context/PlayerContextProvider";
import PlayerInfo from "../components/PlayerInfo";
import Encounter from "../components/Encounter";
import CombatAreas from "../components/CombatAreas";

function App() {
  const [encounter, setEncounter] = useState<Enemy[]>([]);
  const [encounterName, setEncounterName] = useState<string>("");

  const { player } = useContext(PlayerContext);

  return (
    <PlayerContextProvider>
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
    </PlayerContextProvider>
  );
}

export default App;
