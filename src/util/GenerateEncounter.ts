import Enemy from "../types/EnemyType";
import combinedEnemies from "../components/Enemies/combinedEnemies";

export const generateEncounter = (
  numberOfEnemies: number,
  elligibleEnemies: string[]
) => {
  let encounter = [];
  for (let i = 0; i < numberOfEnemies; i++) {
    encounter.push(findEnemy(pickRandomEnemyFromList(elligibleEnemies)));
  }
  console.log(encounter);
  return encounter;
};

const findEnemy = (enemyName: string): Enemy => {
  return combinedEnemies.find(({ name }) => name === enemyName) as Enemy;
};

const pickRandomEnemyFromList = (listOfEnemies: string[]): string => {
  return listOfEnemies[Math.floor(Math.random() * listOfEnemies.length)];
};
