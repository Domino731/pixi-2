import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './Navigation.const';

export class Navigation extends Container {
    constructor() {
        super();
        this.addChild(this.createBackground());
    }

    private createBackground() {
        const x = CONFIG.POSITION_X;
        const y = CONFIG.POSITION_Y;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const sharpOffset = CONFIG.SHARP_OFFSET;
        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        g.drawPolygon([
            x, y,
            x, y + height,
            x + width, y + height,

            x + width, y + sharpOffset,
            x + width - sharpOffset, y,
        ]);
        g.endFill();
        return g;
    }
}