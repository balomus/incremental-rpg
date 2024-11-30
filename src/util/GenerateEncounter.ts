import TEnemyType from "../types/TEnemyType";
import combinedEnemies from "../components/Enemies/combinedEnemies";

export const generateEncounter = (
  numberOfEnemies: number,
  elligibleEnemies: string[]
) => {
  const encounter = [];
  for (let i = 0; i < numberOfEnemies; i++) {
    encounter.push({
      ...findEnemy(pickRandomEnemyFromList(elligibleEnemies)),
      id: i,
    });
  }
  return encounter;
};

const findEnemy = (enemyName: string): TEnemyType => {
  return combinedEnemies.find(({ name }) => name === enemyName) as TEnemyType;
};

const pickRandomEnemyFromList = (listOfEnemies: string[]): string => {
  return listOfEnemies[Math.floor(Math.random() * listOfEnemies.length)];
};
