export default interface EnemyType {
  name: string;
  level: number;
  health: number;
  damage: number;
  experienceYield: number;
  goldYield: number;
  itemYield?: any;
}
