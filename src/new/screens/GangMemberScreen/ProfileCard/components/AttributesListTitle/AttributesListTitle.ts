import { Container, Graphics } from 'pixi.js';
import { AttributeListTitleOptions } from './AttributeListTitle.types';
import { CONFIG } from './AttributesListTitle.const';
import { Text } from 'pixi.js';

export class AttributesListTitle extends Container {
    private readonly frameWidth: number;

    constructor({ x, y, width, title, isSharpOffset }: AttributeListTitleOptions) {
        super();
        this.frameWidth = width;
        this.position.set(x, y);
        this.addChild(this.createBackground(isSharpOffset));
        this.addChild(this.createText(title));
    }

    private createText(title: string) {
        const text = new Text(title, {
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

    private createBackground(isSharpOffset: boolean) {
        const g = new Graphics();
        const width = this.frameWidth;
        const height = CONFIG.HEIGHT;
        const sharpOffset =isSharpOffset ?  CONFIG.SHARP_OFFSET : 0;
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