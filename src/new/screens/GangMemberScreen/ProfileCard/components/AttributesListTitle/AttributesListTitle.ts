import { Container, Graphics } from 'pixi.js';
import { AttributeListTitleOptions } from './AttributeListTitle.types';
import { CONFIG } from './AttributesListTitle.const';
import { Text } from 'pixi.js';

export class AttributesListTitle extends Container {
    private readonly frameWidth: number;

    constructor({ x, y, width }: AttributeListTitleOptions) {
        super();
        this.frameWidth = width;
        this.position.set(x, y);
        this.addChild(this.createBackground());
        this.addChild(this.createText());
    }

    private createText() {
        const text = new Text('Attributes', {
            fontSize: CONFIG.FONT_SIZE,
            fill: CONFIG.FONT_COLOR,
            letterSpacing: CONFIG.LETTER_SPACING,
            fontWeight: CONFIG.FONT_WEIGHT as 'bolder',
        });
        const x = CONFIG.HORIZONTAL_PADDING;
        const y = Math.floor(CONFIG.HEIGHT / 2) - Math.floor(text.height / 2);
        text.position.set(x, y);
        return text;
    }

    private createBackground() {
        const g = new Graphics();
        const width = this.frameWidth;
        const height = CONFIG.HEIGHT;
        const sharpOffset = CONFIG.SHARP_OFFSET;
        const x = 0;
        const y = 0;

        g.beginFill(CONFIG.BACKGROUND);
        g.drawPolygon(
            x, y,
            x, y + height,

            x + width, y + height,
            x + width, y + sharpOffset,
            x + width - sharpOffset, y,
        );
        g.endFill();

        return g;
    }
}