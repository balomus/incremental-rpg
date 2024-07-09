import EnemyType from "../types/EnemyType";
import Enemy from "./Enemies/Enemy";

interface EncounterProps {
  encounter: EnemyType[];
  encounterName: string;
}

const Encounter = ({ ...props }: EncounterProps) => {
  return (
    <div className="border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <h2 className="text-xl pb-2">{props.encounterName} Encounter</h2>
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
    </div>
  );
};

export default Encounter;
