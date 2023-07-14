import PlayerInfo, { Info } from "../components/PlayerInfo";
import "../styles/App.css";
import mockPlayerInfo from "../mocks/PlayerInfo.json";

import { useEffect } from "react";
import tick from "../util/tick";

function App() {
  // Tick function below is called every 1 second(s).
  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      console.log("cleaning up setInterval");
      clearInterval(interval);
    };
  }, []);

  const mockPlayer = mockPlayerInfo as Info;
  return (
    <div className={"m-5"}>
      <PlayerInfo {...mockPlayer} />
    </div>
  );
}

export default App;
