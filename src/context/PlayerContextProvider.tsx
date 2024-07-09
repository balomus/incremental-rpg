import { createContext, useState } from "react";
import initialPlayerInfo from "../mocks/PlayerInfo.json";

interface Player {
  name: string;
  level: number;
  experience: number;
  maxExperience: number;
  gold: number;
  currentHealth: number;
  maxHealth: number;
  currentMana: number;
  maxMana: number;
  healthIncrement: number;
  manaIncrement: number;
}

interface PlayerContextType {
  player: Player;
  setPlayer: (player: Player) => void;
}

export const PlayerContext = createContext<PlayerContextType>({
  player: initialPlayerInfo,
  setPlayer: () => undefined,
});

const PlayerContextProvider = ({ children }: any) => {
  const [player, setPlayer] = useState<Player>(initialPlayerInfo);

  const valueToShare = {
    player: player,
    setPlayer: setPlayer,
  };

  return (
    <PlayerContext.Provider value={valueToShare}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
