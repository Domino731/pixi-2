export enum GUN_TEXTURES_NAMES {
    technologyBlade = 'technologyBlade',
    technologyBlunt = 'technologyBlunt',
    technologyPower = 'technologyPower',
    technologySmart = 'technologySmart',
    technologyTech = 'technologyTech',
    technologyThrowable = 'technologyThrowable'
}

export type GunTextureNamesUnion = keyof typeof GUN_TEXTURES_NAMES;