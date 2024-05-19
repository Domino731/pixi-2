import { Button as PixiButton } from '@pixi/ui';
import { Graphics } from '@pixi/graphics';
import { Container, Text } from 'pixi.js';
import { GAME_COLORS } from '../../config/styles';


interface IButton {
    position: { x: number; y: number };
    width: number;
    label: string;
    labelX: number;
}

export class Button extends Container {
    constructor({ label, labelX, width, position: { x, y } }: IButton) {
        super();
        this.position.set(x, y);
        this.setStyles(width, label, labelX);
    }

    private setStyles(width: number, label: string, labelX: number) {
        const g = new Graphics();
        const x = 0;
        const y = 0;
        const height = 46;
        const offset = 16;

        const points = [
            x, y,
            x, y + height,
            x + width - offset, y + height,
            x + width, y + height - offset,
            x + width, y,
        ];

        g.beginFill(GAME_COLORS.green2);
        g.lineStyle(2, GAME_COLORS.green1);
        g.drawPolygon(points);
        g.endFill();

        const text = new Text(label, {
            fontSize: 22,
            fill: GAME_COLORS.green1,
            fontWeight: 'bold',
            letterSpacing: 1,
        });
        text.position.set(labelX, 10);
        g.addChild(text);

        const btn = new PixiButton(g);
        this.addChild(btn.view);
    }
}