import { createContext, useState } from "react";
import player from "../mocks/PlayerInfo.json";

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
// keep working on this, just started implementing the Player interface to simplify the playercontext below.
// Look at Stephen Grider books code for reference.

interface PlayerContextType {
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

// export const PlayerContext = createContext<PlayerContextType | null>(null);
export const PlayerContext = createContext<PlayerContextType>({
  name: player.name,
  level: player.level,
  experience: player.experience,
  maxExperience: player.maxExperience,
  gold: player.gold,
  currentHealth: player.currentHealth,
  maxHealth: player.maxHealth,
  currentMana: player.currentMana,
  maxMana: player.maxMana,
  healthIncrement: player.healthIncrement,
  manaIncrement: player.manaIncrement,
});

const PlayerContextProvider = ({ children }: any) => {
  // const [currentPlayer, setCurrentPlayer] = useState<PlayerContextType>(player);

  const [name, setName] = useState(player.name);
  const [level, setLevel] = useState(player.level);
  const [experience, setExperience] = useState(player.experience);
  const [maxExperience, setMaxExperience] = useState(player.maxExperience);
  const [gold, setGold] = useState(player.gold);
  const [currentHealth, setCurrentHealth] = useState(player.currentHealth);
  const [maxHealth, setMaxHealth] = useState(player.maxHealth);
  const [currentMana, setCurrentMana] = useState(player.currentMana);
  const [maxMana, setMaxMana] = useState(player.maxMana);
  const [healthIncrement, setHealthIncrement] = useState(
    player.healthIncrement
  );
  const [manaIncrement, setManaIncrement] = useState(player.manaIncrement);

  console.log("name", name);

  return (
    <PlayerContext.Provider
      value={{
        name,
        level,
        experience,
        maxExperience,
        gold,
        currentHealth,
        maxHealth,
        currentMana,
        maxMana,
        healthIncrement,
        manaIncrement,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
