import { COMMON_TEXTURES_NAMES, CommonTexturesNamesUnion } from './common-textures.const';
import { Texture } from 'pixi.js';

export const getCommonTexture = (name: CommonTexturesNamesUnion) => {
    switch (name) {
        case COMMON_TEXTURES_NAMES.euroDollar:
            return Texture.from('common/eurodollar');
        case COMMON_TEXTURES_NAMES.weight:
            return Texture.from('common/weight');
        default:
            console.error('default value returned from getCommonTexture() function');
            return Texture.from('common/eurodollar');
    }
};