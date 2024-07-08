import "../styles/App.css";
import { useEffect, useState } from "react";
import Enemy from "../types/EnemyType";
import Tick from "../util/Tick";
import PlayerContextProvider from "../context/PlayerContextProvider";
import PlayerInfo from "../components/PlayerInfo";

function App() {
  const [encounter, setEncounter] = useState<Enemy[]>([]);

  useEffect(() => {
    // console.log("encounter ", encounter);
  }, [encounter]);

  return (
    <PlayerContextProvider>
      <div className={"m-5"}>
        {/* Test */}
        <Tick />
        <PlayerInfo />
        {/* 
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
