import { Container, Graphics, Text } from 'pixi.js';
import { AttributeRowOptions } from './AttributeRow.types';
import { CONFIG } from './AttributeRow.const';

export class AttributeRow extends Container {
    private readonly frameWidth: number;
    private readonly attributeName: string;

    constructor({ x, y, width, attributeName }: AttributeRowOptions) {
        super();
        this.frameWidth = width;
        this.attributeName = attributeName;
        this.position.set(x, y);
        this.addChild(this.createFrame());
        this.addChild(this.createLabel());
    }

    private createLabel() {
        const text = new Text(this.attributeName, {
            fill: 'white',
            fontSize: 24,
        });
        return text;
    }

    private createFrame() {
        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        g.drawRect(0, 0, this.frameWidth, 40);
        g.endFill();
        return g;
    }
}