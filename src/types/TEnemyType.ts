import TItem from "./TItem";

export default interface TEnemyType {
  id: number;
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  damage: number;
  experienceYield: number;
  goldYield: number;
  itemYield?: [TItem];
}
