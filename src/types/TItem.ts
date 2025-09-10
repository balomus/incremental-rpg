export default interface TItem {
  name: string;
  description: string;
  quantity: number;
  itemType: ItemType;
}

export enum ItemType {
  CONSUMABLE,
  EQUIPMENT,
  QUEST,
  JUNK,
}
