export enum ITEM_RARITY {
    common = 'common',
    rare = 'rare',
    epic = 'epic',
    legendary = 'legendary'
}

export type ItemRarityUnion = keyof typeof ITEM_RARITY;

export enum GUN_TECHNOLOGY {
    blade = 'blade',
    blunt = 'blunt',
    power = 'power',
    smart = 'smart',
    tech = 'tech',
    throwable = 'throwable'
}

export type GunTechnologyUnion = keyof typeof GUN_TECHNOLOGY;