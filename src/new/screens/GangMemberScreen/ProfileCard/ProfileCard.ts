import { Container, Graphics } from 'pixi.js';
import { ProfileCardOptions } from './ProfileCard.types';
import { CONFIG } from './ProfileCard.const';

export class ProfileCard extends Container {
    constructor({ x, y }: ProfileCardOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createBackground());
    }

    private createBackground(): Graphics {
        const g = new Graphics();
        const x = 0;
        const y = 0;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const sharpOffsetPrimary = CONFIG.SHARP_OFFSET_PRIMARY;
        const halfHeight = Math.floor(height / 2);

        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x, y,

            x, y + halfHeight,
            x + sharpOffsetPrimary, y + halfHeight + sharpOffsetPrimary,

            x + sharpOffsetPrimary, y + height,

            x + width + sharpOffsetPrimary, y + height,
            x + width + sharpOffsetPrimary, y + sharpOffsetPrimary + height - halfHeight,
            x + width, y + height - halfHeight,

            x + width, y + sharpOffsetPrimary,
            x + width - sharpOffsetPrimary, y,
        );
        g.endFill();

        return g;
    }
}