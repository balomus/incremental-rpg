import EnemyType from "../types/EnemyType";
import Enemy from "./Enemies/Enemy";

interface EncounterProps {
  encounter: EnemyType[];
}

const Encounter = ({ ...props }: EncounterProps) => {
  return (
    <>
      {props.encounter.map((enemy, i) => (
        <Enemy
          name={enemy.name}
          level={enemy.level}
          health={enemy.health}
          damage={enemy.damage}
          experienceYield={enemy.experienceYield}
          goldYield={enemy.goldYield}
          key={`${enemy.name}${i}`}
        />
        // <div key={`${enemy.name}${i}`}>{enemy.name}</div>
      ))}
    </>
  );
};

export default Encounter;
