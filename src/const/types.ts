export enum ITEM_RARITY {
    COMMON = 'COMMON',
    RARE = 'RARE',
    EPIC = 'EPIC',
    LEGENDARY = 'LEGENDARY'
}

export type ItemRarityUnion = keyof typeof ITEM_RARITY;

export const getColorByItemRarity = (rarity: ItemRarityUnion) => {
    switch (rarity) {
        case ITEM_RARITY.COMMON:
            return 'grey';
        case ITEM_RARITY.RARE:
            return 'blue';
        case ITEM_RARITY.EPIC:
            return 'purple';
        case ITEM_RARITY.LEGENDARY:
            return 'yellow';
        default:
            return 'white';
    }
};