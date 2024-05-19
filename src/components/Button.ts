import { Button, FancyButton } from '@pixi/ui';
import { Container, Graphics, Sprite, Text } from 'pixi.js';

type CyberButtonOptions = {
    label: string;
    onClick: () => void;
    styles?: {
        width: number;
    },
    position?: {
        x: number;
        y: number;
    }
}

export class CyberButton {
    public container: Container;

    constructor({ label, onClick, styles, position }: CyberButtonOptions) {
        this.container = new Container();

        const graphics = new Graphics();
        graphics.beginFill();
        graphics.lineStyle(2, 0xe8132a);
        const height = 50;
        const width = styles?.width ?? 250;
        const sharpOffset = 20;
        const sharpOffest2 = 10;
        const x = position?.x ?? 0;
        const y = position?.y ?? 0;

        const points = [
            x, y,
            x, y + (height - sharpOffset),
            x + sharpOffset, y + height,
            x + (width - sharpOffest2), y + height,
            x + width, y + (height - sharpOffest2),
            x + width, y + (0 + sharpOffset),
            x + width - sharpOffset, y,
        ];

        graphics.drawPolygon(points);
        graphics.endFill();

        const button = new Button(graphics);
        button.onPress.connect(() => {
            onClick();
        });

        const text = new Text(label, {
            fontFamily: 'Arial',
            fontSize: 26,
            fill: 0xe8132a,
            align: 'center',
        });
        text.position.set(x + 24, y + 8);

        this.container.addChild(button.view);
        this.container.addChild(text);

    }
}
