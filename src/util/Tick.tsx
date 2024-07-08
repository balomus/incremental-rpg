import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { PlayerContext } from "../context/PlayerContextProvider";

// interface TickProps {
//   currentHealth: number;
//   maxHealth: number;
//   setCurrentHealth: Dispatch<SetStateAction<number>>;
//   healthIncrement: number;
//   currentMana: number;
//   maxMana: number;
//   setCurrentMana: Dispatch<SetStateAction<number>>;
//   manaIncrement: number;
// }

// const Tick = ({ ...props }: TickProps) => {
const Tick = () => {
  // const { setCurrentHealth } = useContext(CurrentPlayerContext);
  // const { currentHealth } = useContext(PlayerContext);

  // const { player } = useContext(PlayerContext);

  const { player, setPlayer } = useContext(PlayerContext);

  console.log("player.currentMana", player.currentMana);

  // const updateHealth = useCallback(() => {
  //   let newHealth = player.currentHealth + player.healthIncrement;
  //   if (newHealth >= player.maxHealth) {
  //     newHealth = player.maxHealth;
  //   } else if (newHealth <= 0) {
  //     newHealth = 0;
  //   }
  //   console.log("setPlayer should run", newHealth);
  //   setPlayer({ ...player, currentHealth: newHealth });
  // }, [player, setPlayer]);

  const updateHealth = useCallback(() => {
    const newHealth = player.currentHealth + player.healthIncrement;
    if (newHealth >= player.maxHealth) {
      setPlayer({ ...player, currentHealth: player.maxHealth });
    } else if (newHealth <= 0) {
      setPlayer({ ...player, currentHealth: 0 });
    } else {
      setPlayer({ ...player, currentHealth: newHealth });
    }
  }, [player, setPlayer]);

  const updateMana = useCallback(() => {
    const newMana = player.currentMana + player.manaIncrement;
    if (newMana >= player.maxMana) {
      setPlayer({ ...player, currentMana: player.maxMana });
    } else if (newMana <= 0) {
      setPlayer({ ...player, currentMana: 0 });
    } else {
      setPlayer({ ...player, currentMana: newMana });
    }
  }, [player, setPlayer]);

  // const addHealth = () => {
  //   props.setCurrentHealth(
  //     props.currentHealth + props.healthIncrement >= props.maxHealth
  //       ? props.maxHealth
  //       : props.currentHealth + props.healthIncrement
  //   );
  // };

  // const addMana = () => {
  //   props.setCurrentMana(
  //     props.currentMana + props.manaIncrement >= props.maxMana
  //       ? props.maxMana
  //       : props.currentMana + props.manaIncrement
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      // START 1000ms TICK
      // Anything placed in these brackets will run once every 1000ms (1 second)
      updateHealth();
      updateMana();
      console.log("tick ran");

      // END 1000ms TICK
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [updateHealth, updateMana]);
  //   Component returns null because we do not need it to render anything, simply keep track of any functions that need to be run each tick (1 time each second(s))
  return null;
};

export default Tick;
