import PlayerInfo, { Info } from "../components/PlayerInfo";
import "../styles/App.css";
import mockPlayerInfo from "../mocks/PlayerInfo.json";
import { Button } from "antd";
import { Fragment } from "react";

function App() {
  const mockPlayer = mockPlayerInfo as Info;
  console.log("mockPlayer", mockPlayer);
  return (
    <div className={"m-5"}>
      <PlayerInfo {...mockPlayer} />
    </div>
  );
}

export default App;
