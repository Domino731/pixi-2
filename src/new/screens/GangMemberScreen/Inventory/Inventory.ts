import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './Inventory.const';

export class Inventory extends Container {
    constructor() {
        super();
        this.position.set(CONFIG.X, CONFIG.Y);
        this.addChild(this.createContainer());

    }

    private createContainer(): Graphics {
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const x = 0;
        const y = 0;
        const sharpOffsetLeft = CONFIG.SHARP_OFFSET_LEFT;
        const sharpOffsetRight = CONFIG.SHARP_OFFSET_RIGHT;
        const indentBottomOffset = CONFIG.INDENT_BOTTOM_OFFSET;
        const indentHeight = CONFIG.INDENT_HEIGHT;

        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x + sharpOffsetLeft, y,
            x, y + sharpOffsetLeft,

            x, y + height - sharpOffsetLeft,
            x + sharpOffsetLeft, y + height,

            x + width - sharpOffsetRight, y + height,
            x + width, y + height - sharpOffsetRight,

            x + width, y + height - indentBottomOffset,
            x + width - sharpOffsetRight, y + height - indentBottomOffset - sharpOffsetRight,
            x + width - sharpOffsetRight, y + height - indentBottomOffset - indentHeight,
            x + width, y + height - indentBottomOffset - indentHeight,
            x + width, y,
        );
        g.endFill();
        return g;
    }
}