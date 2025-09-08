import { createContext, useState } from "react";
import initialPlayerInfo from "../mocks/PlayerInfo.json";
import { countDown } from "../util/ModalCountdown";
import {
  deathStr,
  deathTitle,
  levelUpStr,
  levelUpTitle,
} from "../util/Strings";
import TPlayer from "../types/TPlayer";

interface PlayerContextType {
  player: TPlayer;
  setPlayer: (player: TPlayer) => void;
  killPlayer: () => void;
  levelUpPlayer: () => void;
}

export const PlayerContext = createContext<PlayerContextType>({
  player: initialPlayerInfo,
  setPlayer: () => undefined,
  killPlayer: () => undefined,
  levelUpPlayer: () => undefined,
});

const PlayerContextProvider = ({ children }: any) => {
  const [player, setPlayer] = useState<TPlayer>(initialPlayerInfo);

  const killPlayer = () => {
    setPlayer({
      ...player,
      currentHealth: player.maxHealth,
      currentMana: player.maxMana,
      experience: 0,
      gold: Math.round(player.gold * 0.9),
    });

    countDown(10, deathTitle, deathStr);
  };

  const levelUpPlayer = () => {
    const remainder = player.experience - player.maxExperience;
    setPlayer({
      ...player,
      level: player.level + 1,
      maxExperience: player.maxExperience * 2,
      currentHealth: player.maxHealth + 5,
      maxHealth: player.maxHealth + 5,
      currentMana: player.maxMana + 5,
      maxMana: player.maxMana + 5,
      strength: player.strength + 1,
      experience: remainder,
    });

    countDown(10, levelUpTitle, levelUpStr);
  };

  const valueToShare = {
    player: player,
    setPlayer: setPlayer,
    killPlayer: killPlayer,
    levelUpPlayer: levelUpPlayer,
  };

  return (
    <PlayerContext.Provider value={valueToShare}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
