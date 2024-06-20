import { ClothesTypeUnion } from '../../modules/items/Clothes.types';

export interface GangMemberInventoryItem {
    itemId: string;
    isEquipped: boolean;
    id: string;
    type: ClothesTypeUnion;
}

// export enum InventorySection {
//     JUNK = 'JUNK',
//     GUN = 'GUN',
//     MELEE = 'MELEE',
//     CLOTHES = 'CLOTHES',
//     SUPPLIES = 'SUPPLIES',
//     MODIFICATIONS = 'MODIFICATIONS'
// }
export interface GangMemberInventoryData {
    junk: Array<GangMemberInventoryItem>;
    gun: Array<GangMemberInventoryItem>;
    melee: Array<GangMemberInventoryItem>;
    clothes: Array<GangMemberInventoryItem>;
    supplies: Array<GangMemberInventoryItem>;
    modifications: Array<GangMemberInventoryItem>;

}