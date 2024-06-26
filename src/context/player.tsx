import { createContext, useState } from "react";
import playerJson from "../mocks/PlayerInfo.json";
import Player from "../types/Player";

// const PlayerContext = createContext(player);

const Provider = ({ children }: any) => {
  // const [name, setName] = useState(player.name);
  // const [level, setLevel] = useState(player.level);
  // // const [experience, setExperience] = useState(player.experience);
  // const [experience, setExperience] = useState(player.experience)
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
  const [player, setPlayer] = useState<Player>(playerJson);

  // const updateHealth = (num) => {
  //   // setPlayer();
  // };

  const valueToShare = {
    player,
  };

  // return (
  //   // <PlayerContext.Provider value={valueToShare}>
  //     // {children}
  //   // </PlayerContext.Provider>
  // );
};

export { Provider };
// export default PlayerContext;
