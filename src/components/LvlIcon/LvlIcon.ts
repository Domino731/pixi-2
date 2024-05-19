import { Container, Graphics, Text } from 'pixi.js';
import { LvlIconOptions } from './LvlIcon.types';
import { LvlIconColorsVariants, LvlIconVariantUnion } from './LvlIcon.const';
import { GAME_COLORS } from '../../config/styles';

export class LvlIcon extends Container {
    private readonly lvl: number;
    private readonly variant: LvlIconVariantUnion;

    constructor({ x, y, lvl, variant }: LvlIconOptions) {
        super();
        this.variant = variant;
        this.lvl = lvl;
        this.position.set(x, y);
        this.addChild(this.createIcon());
    }


    private createIcon() {
        const width = 40;
        const height = 40;
        const x = 0;
        const y = 0;
        const sharpOffset = 14;
        const g = new Graphics();
        g.beginFill(LvlIconColorsVariants[this.variant]);
        g.drawPolygon(
            x + sharpOffset, y,
            x, y + sharpOffset,
            x, y + height,

            x + width - 18, y + height,
            x + width - 14, y + height - 4,
            x + width, y + height - 4,

            x + width, y,
        );
        g.endFill();
        const text = new Text(this.lvl, {
            fontSize: 28,
            fill: GAME_COLORS.black2,
            fontWeight: 'bolder',
        });
        text.position.set(12, 3);
        g.addChild(text);
        return g;
    }
}