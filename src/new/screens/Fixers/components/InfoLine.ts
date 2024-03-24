import { Container, Text } from 'pixi.js';
import { Graphics } from '@pixi/graphics';

interface IInfoLine {
    position: { x: number; y: number };
    color: string;
    label: string;
}

const ICON_SIZE = 24;

export class InfoLine extends Container {
    constructor({ position: { x, y }, color, label }: IInfoLine) {
        super();
        this.position.set(x, y);
        this.setIcon(color);
        this.setText(label, color);
    }

    private setIcon(color: string) {
        const g = new Graphics();
        g.beginFill();
        g.lineStyle(2, color);
        g.drawRect(0, 0, ICON_SIZE, ICON_SIZE);
        g.endFill();
        this.addChild(g);
    }

    private setText(label: string, color: string) {
        const text = new Text(label, {
            fill: color,
            fontSize: ICON_SIZE - 4,
        });
        text.position.set(ICON_SIZE + 4, 0);
        this.addChild(text);
    }
}