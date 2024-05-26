export interface BaseGameItem {
    name: string;
    rarity: ItemRarityUnion;
    type: WeaponTypeUnion;
    dps: number;
    damage: number | number[];
    attackPerSecond: number;
    reloadSpeed: number;
    effectiveRange: number;
    handling: number;
    magazineCapacity: number;
    armorPenetration: number;
    ammo: GunAmmoUnion;
    technology: GunTechnologyUnion;
    stats: {
        electricalDamage: number;
        critChange: number;
        critDamage: number;
        headshotDamageMultiplier: number;

    },
    attachments: GunAttachmentsUnion[];
    modificationsSlots: number[];
    description: string;
    weight: number;
    basePrice: number;
}

export enum ITEM_RARITY {
    common = 'common',
    rare = 'rare',
    epic = 'epic',
    legendary = 'legendary'
}

export type ItemRarityUnion = keyof typeof ITEM_RARITY;

export enum WEAPON_TYPE {
    pistol = 'pistol',
    revolver = 'revolver',
    smg = 'smg',
    shotgun = 'shotgun',
    assaultRifle = 'assaultRifle',
    lmg = 'lmg',
    precisionRifle = 'precisionRifle',
    sniperRifle = 'sniperRifle'
}

export type WeaponTypeUnion = keyof typeof WEAPON_TYPE;

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

export enum GUN_ATTACHMENTS {
    scopes = 'scopes',
    muzzles = 'muzzles'
}

export type GunAttachmentsUnion = keyof typeof GUN_ATTACHMENTS;