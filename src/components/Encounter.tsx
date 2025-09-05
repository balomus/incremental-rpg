import Enemy from "./Enemies/Enemy";
import TEncounter from "../types/TEncounter";
import encounters from "../Encounters.json";

const Encounter = ({ ...props }: TEncounter) => {
  return (
    <div className="border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <h2 className="text-xl pb-2">{props.encounterName} Encounter</h2>
      {props.enemies.map((enemy, i) => (
        <Enemy
          key={`${enemy.name}${i}`}
          enemy={{
            id: enemy.id,
            name: enemy.name,
            level: enemy.level,
            health: enemy.health,
            maxHealth: enemy.maxHealth,
            damage: enemy.damage,
            experienceYield: enemy.experienceYield,
            goldYield: enemy.goldYield,
          }}
          encounter={props.enemies}
          setEncounter={props.setEnemies}
          encounterRewards={
            encounters[
              encounters.findIndex((e) => e.name === props.encounterName)
            ].rewards
          }
        />
      ))}
    </div>
  );
};

export default Encounter;
