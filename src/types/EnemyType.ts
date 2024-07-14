export default interface EnemyType {
  id: number;
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  damage: number;
  experienceYield: number;
  goldYield: number;
  itemYield?: any;
}
