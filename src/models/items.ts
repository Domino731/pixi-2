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


export enum GUN_AMMO {
    handgun = 'handgun',
    rifle = 'rifle',
    shotgun = 'shotgun',
    sniper = 'sniper'
}

export type GunAmmoUnion = keyof typeof GUN_AMMO;