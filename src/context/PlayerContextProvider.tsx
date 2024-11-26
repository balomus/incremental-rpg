import { createContext, useEffect, useState } from "react";
import initialPlayerInfo from "../mocks/PlayerInfo.json";
import { Modal } from "antd";

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

const deathTitle = "You died";
const deathStr = "You lose all experience and 10% of your gold when you die.";
const levelUpTitle = "Level Up";
const levelUpStr =
  "You leveled up! +5 to max health and max mana, and +1 to all base stats. Your health and mana are refilled.";

const PlayerContextProvider = ({ children }: any) => {
  const [player, setPlayer] = useState<Player>(initialPlayerInfo);

  const [modal, contextHolder] = Modal.useModal();

  const instance = (seconds: number, title: string, contentStr: string) =>
    modal.success({
      title: title,
      content: (
        <>
          <p>{contentStr}</p>
          <p>This modal will be destroyed after {seconds} second(s).</p>
        </>
      ),
    });

  useEffect(() => {
    if (player.currentHealth <= 0) {
      setPlayer({
        ...player,
        currentHealth: player.maxHealth,
        currentMana: player.maxMana,
        experience: 0,
        gold: Math.round(player.gold * 0.9),
      });

      let secondsToGo = 5;

      const currentInstance = instance(secondsToGo, deathTitle, deathStr);
      // const instance = modal.success({
      //   title: deathTitle,
      //   content: (
      //     <>
      //       <p>{deathStr}</p>
      //       <p>This modal will be destroyed after {secondsToGo} second(s).</p>
      //     </>
      //   ),
      // });

      const timer = setInterval(() => {
        secondsToGo -= 1;
        // currentInstance.update();
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        currentInstance.destroy();
      }, secondsToGo * 1000);
    }

    //   const instance = modal.success({
    //     title: "You died",
    //     content: (
    //       <>
    //         <p>You lose all experience and 10% of your gold when you die.</p>
    //         {timeRemainingElement}
    //         {/* <p>This modal will be destroyed after {secondsToGo} second(s).</p> */}
    //       </>
    //     ),
    //   });

    //   const timer = setInterval(() => {
    //     secondsToGo -= 1;
    //     instance.update({
    //       content: (
    //         <>
    //           <p>You lose all experience and 10% of your gold when you die.</p>
    //           {timeRemainingElement}
    //           {/* <p>This modal will be destroyed after {secondsToGo} second(s).</p> */}
    //         </>
    //       ),
    //     });
    //   }, 1000);

    //   setTimeout(() => {
    //     clearInterval(timer);
    //     instance.destroy();
    //   }, secondsToGo * 1000);
    // }

    // if (player.experience >= player.maxExperience) {
    //   const remainder = player.experience - player.maxExperience;
    //   setPlayer({
    //     ...player,
    //     level: player.level + 1,
    //     maxExperience: player.maxExperience * 2,
    //     currentHealth: player.maxHealth + 5,
    //     maxHealth: player.maxHealth + 5,
    //     currentMana: player.maxMana + 5,
    //     maxMana: player.maxMana + 5,
    //     strength: player.strength + 1,
    //     experience: remainder,
    //   });

    //   let secondsToGo = 5;

    //   const instance = modal.success({
    //     title: "Level Up",
    //     content: (
    //       <>
    //         <p>
    //           You leveled up! +5 to max health and max mana, and +1 to all base
    //           stats. Your health and mana are refilled.
    //         </p>
    //         {timeRemainingElement}
    //         {/* <p>This window will go away after {secondsToGo} second(s).</p> */}
    //       </>
    //     ),
    //   });

    //   const timer = setInterval(() => {
    //     secondsToGo -= 1;
    //     instance.update({
    //       content: (
    //         <>
    //           <p>
    //             You leveled up! +5 to max health and max mana, and +1 to all
    //             base stats. Your health and mana are refilled.
    //           </p>
    //           {timeRemainingElement}
    //           {/* <p>This window will be go away after {secondsToGo} second(s).</p> */}
    //         </>
    //       ),
    //     });
    //   }, 1000);

    //   setTimeout(() => {
    //     clearInterval(timer);
    //     instance.destroy();
    //   }, secondsToGo * 1000);
    // }
  }, [player]);

  const valueToShare = {
    player: player,
    setPlayer: setPlayer,
  };

  return (
    <PlayerContext.Provider value={valueToShare}>
      {children}
      {contextHolder}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
