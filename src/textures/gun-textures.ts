import { Texture } from 'pixi.js';
import { GUN_AMMO, GUN_TECHNOLOGY, GunAmmoUnion, GunTechnologyUnion } from '../models/items';

export const getGunTechnologyTexture = (technology: GunTechnologyUnion) => {
    switch (technology) {
        case GUN_TECHNOLOGY.blade:
            return Texture.from(`guns/technologies/blade`);
        case GUN_TECHNOLOGY.blunt:
            return Texture.from(`guns/technologies/blunt`);
        case GUN_TECHNOLOGY.power:
            return Texture.from(`guns/technologies/power`);
        case GUN_TECHNOLOGY.smart:
            return Texture.from(`guns/technologies/smart`);
        case GUN_TECHNOLOGY.tech:
            return Texture.from(`guns/technologies/tech`);
        case GUN_TECHNOLOGY.throwable:
            return Texture.from(`guns/technologies/throwable`);
        default:
            console.error('default value returned from getGunTechnologyTexture() function');
            return Texture.from(`guns/technologies/throwable`);
    }
};

export const getGunAmmoTexture = (ammo: GunAmmoUnion) => {
    switch (ammo) {
        case GUN_AMMO.handgun:
            return Texture.from(`guns/ammo/handgun`);
        case GUN_AMMO.rifle:
            return Texture.from(`guns/ammo/rifle`);
        case GUN_AMMO.shotgun:
            return Texture.from(`guns/ammo/shotgun`);
        case GUN_AMMO.sniper:
            return Texture.from(`guns/ammo/sniper`);
        default:
            console.error('default value returned from getGunAmmoTexture() function');
            return Texture.from(`guns/ammo/handgun`);
    }
};