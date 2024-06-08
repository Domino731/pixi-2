import { ClothesTypeUnion } from '../../modules/items/Clothes.types';

export interface GangMemberInventoryItem {
    itemId: string;
    isEquipped: boolean;
    id: string;
    type: ClothesTypeUnion;
}

export interface GangMemberInventoryData {
    clothes: Array<GangMemberInventoryItem>;
}