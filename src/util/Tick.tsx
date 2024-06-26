import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import PlayerContext from "../context/player";

interface TickProps {
  currentHealth: number;
  maxHealth: number;
  setCurrentHealth: Dispatch<SetStateAction<number>>;
  healthIncrement: number;
  currentMana: number;
  maxMana: number;
  setCurrentMana: Dispatch<SetStateAction<number>>;
  manaIncrement: number;
}

const Tick = ({ ...props }: TickProps) => {
  const { setCurrentHealth } = useContext(PlayerContext)

  const addHealth = () => {
    props.setCurrentHealth(
      props.currentHealth + props.healthIncrement >= props.maxHealth
        ? props.maxHealth
        : props.currentHealth + props.healthIncrement
    );
  };

  const addMana = () => {
    props.setCurrentMana(
      props.currentMana + props.manaIncrement >= props.maxMana
        ? props.maxMana
        : props.currentMana + props.manaIncrement
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // START 1000ms TICK
      // Anything placed in these brackets will run once every 1000ms (1 second)
      addHealth();
      addMana();

      // END 1000ms TICK
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.currentHealth, props.currentMana]);
  //   Component returns null because we do not need it to render anything, simply keep track of any functions that need to be run each tick (1 time each second(s))
  return null;
};

export default Tick;
