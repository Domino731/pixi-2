import { Sprite, Texture } from 'pixi.js';
import { IconOptions } from './Icon.types';
import { ICON_SRC } from './Icon.const';

export class Icon extends Sprite {
    constructor({ name, width, height, tint }: IconOptions) {
        super(Texture.from(ICON_SRC[name]));
        if (width) {
            this.width = width;
        }
        if (height) {
            this.height = height;
        }
        if (tint) {
            this.tint = tint;
        }
    }
}