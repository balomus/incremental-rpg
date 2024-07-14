import { createContext, useEffect, useState } from "react";
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
  strength: number;
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

  useEffect(() => {
    if (player.currentHealth <= 0) {
      console.log(
        "You died! You lose all experience and 10% of your gold when you die."
      );
      setPlayer({
        ...player,
        currentHealth: player.maxHealth,
        currentMana: player.maxMana,
        experience: 0,
        gold: Math.round(player.gold * 0.9),
      });
    }

    if (player.experience >= player.maxExperience) {
      console.log(
        "You leveled up! +5 to max health and max mana, and +1 to all base stats. Your health and mana are refilled."
      );
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
    }
  }, [player]);

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
