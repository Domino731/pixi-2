import { Container, Graphics, Text } from 'pixi.js';
import { AttributeRowOptions } from './AttributeRow.types';
import { CONFIG } from './AttributeRow.const';
import { IconsUnion } from '../../../../../components/Icon/Icon.const';
import { Icon } from '../../../../../components/Icon';
import { GAME_COLORS } from '../../../../../../const/styles';

export class AttributeRow extends Container {
    private readonly frameWidth: number;
    private readonly attributeName: string;

    constructor({ x, y, width, attributeName, icon, count }: AttributeRowOptions) {
        super();
        this.frameWidth = width;
        this.attributeName = attributeName;
        this.position.set(x, y);
        this.addChild(this.createFrame());
        this.addChild(this.createLabel());
        this.addChild(this.createIcon(icon));
        this.addChild(this.createValueText(count));
    }

    private createValueText(value: number) {
        const text = new Text(value, {
            fill: CONFIG.VALUE_FONT_COLOR,
            fontSize: CONFIG.VALUE_FONT_SIZE,
            fontWeight: CONFIG.VALUE_FONT_WEIGHT as 'bolder',
            stroke: CONFIG.VALUE_FONT_STROKE,
            letterSpacing: CONFIG.VALUE_FONT_LETTER_SPACING,
            strokeThickness: CONFIG.VALUE_FONT_STROKE_THICKNESS,
        });
        const x = this.frameWidth - text.width;
        const y = Math.floor(CONFIG.HEIGHT / 2) - Math.floor(text.height / 2);
        text.position.set(x, y);
        return text;
    }

    private createIcon(iconName: IconsUnion) {
        const icon = new Icon({
            name: iconName,
            width: CONFIG.HEIGHT,
            height: CONFIG.HEIGHT,
            tint: 'red',
        });
        return icon;
    }

    private createLabel() {
        const text = new Text(this.attributeName, {
            fill: CONFIG.FONT_COLOR,
            fontSize: CONFIG.FONT_SIZE,
        });
        const x = CONFIG.TEXT_OFFSET_X;
        const y = Math.floor(CONFIG.HEIGHT / 2) - Math.floor(text.height / 2);
        text.position.set(x, y);
        return text;
    }

    private createFrame() {
        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        // g.beginFill('green');
        g.drawRect(0, 0, this.frameWidth, CONFIG.HEIGHT);
        g.endFill();
        return g;
    }
}