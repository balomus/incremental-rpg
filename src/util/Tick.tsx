import { useContext, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContextProvider";

const Tick = () => {
  const { player, setPlayer } = useContext(PlayerContext);

  const tickInterval = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      // START 1000ms TICK
      // Anything placed in these brackets will run once every 1000ms (1 second)

      setPlayer({
        ...player,
        currentHealth: Math.min(
          player.currentHealth + player.healthIncrement,
          player.maxHealth
        ),
        currentMana: Math.min(
          player.currentMana + player.manaIncrement,
          player.maxMana
        ),
      });

      // END 1000ms TICK
    }, tickInterval);

    return () => {
      clearInterval(interval);
    };
  }, [player, setPlayer]);
  //   Component returns null because we do not need it to render anything, simply keep track of any functions that need to be run each tick (1 time each second(s))
  return null;
};

export default Tick;
