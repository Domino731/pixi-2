import { Container, Graphics, Text } from 'pixi.js';
import { GAME_COLORS } from '../../../../const/styles';
import { Button } from '@pixi/ui';

interface IFixerCard {
    width: number;
    x: number;
    y: number;
    label: string;
    onClick: () => void;
}


export class FixerCard extends Container {
    constructor({ width, x, y, label, onClick }: IFixerCard) {
        super();
        this.position.set(x, y);
        this.setStyles(width, label, onClick);
    }


    private setStyles(width: number, label: string, onClick: () => void) {
        const g = new Graphics();
        const offset = 14;
        const x = 0;
        const y = 0;
        const height = 60;

        g.beginFill();
        g.lineStyle(2, GAME_COLORS.yellow);
        g.drawPolygon([
            x, y,

            x, y + height,

            x + width - offset, y + height,
            x + width, y + height - offset,

            x + width, y + offset,
            x + width - offset, y,
        ]);
        g.endFill();

        const text = new Text(label, {
            fill: GAME_COLORS.yellow,
            fontSize: 32,
            letterSpacing: 1,
        });
        text.position.set(20, 10);

        g.addChild(text);

        const g2 = new Graphics();
        const x2 = width - 80;
        const y2 = 0;
        const width2 = 80;

        g2.beginFill(GAME_COLORS.yellow);
        g2.drawPolygon([
            x2, y2,

            x2, y2 + height,

            x2 + width2 - offset, y2 + height,
            x2 + width2, y2 + height - offset,

            x2 + width2, y2 + offset,
            x2 + width2 - offset, y2,
        ]);
        g2.endFill();

        g.addChild(g2);

        const button = new Button(g);
        button.onPress.connect(onClick);

        this.addChild(button.view);
    }


}