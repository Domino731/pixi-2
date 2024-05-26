import { Texture } from 'pixi.js';
import { GUN_TECHNOLOGY, GunTechnologyUnion } from '../models/items';

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