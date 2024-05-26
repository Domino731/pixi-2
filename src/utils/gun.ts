import { GUN_AMMO, GunAmmoUnion } from '../models/items';

export const getGunAmmoText = (ammo: GunAmmoUnion) => {
    switch (ammo) {
        case GUN_AMMO.handgun:
            return 'handgun';
        case GUN_AMMO.rifle:
            return 'rifle';
        case GUN_AMMO.shotgun:
            return 'shotgun';
        case GUN_AMMO.sniper:
            return 'sniper';
        default:
            console.error('default value returned from getGunAmmoText() function');
            return '[unknown] ammo';
    }
};