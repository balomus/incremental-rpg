export default interface Enemy {
  name: string;
  level: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  constitution: number;
  defense: number;
  magicDefense: number;
  experienceYield: number;
  goldYield: number;
  itemYield?: any;
}
