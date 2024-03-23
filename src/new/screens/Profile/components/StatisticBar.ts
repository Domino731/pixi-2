import { Container, Graphics, Text } from 'pixi.js';
import { GAME_COLORS } from '../../../../const/styles';
import { Button } from '@pixi/ui';

interface StatisticBarOptions {
    position: {
        x: number;
        y: number;
    };
    title: string;
    onClick: () => void;
    width: number;
}

const config = {
    styles: {
        button: {
            size: 36,
            sharpOffset: 8,
            fontSize: 30,
        },
        title: {
            fontSize: 24,
            marginTop: 5,
        },
    },
};

export class StatisticBar extends Container {
    containerPosition: { x: number, y: number };
    containerWidth: number;
    containerHeight: number;
    statTitle: string;

    constructor({ position, title, onClick, width }: StatisticBarOptions) {
        super();
        this.containerPosition = position;
        this.containerHeight = 40;
        this.containerWidth = width;
        this.statTitle = title;
        this.setBottomBorder(onClick);
    }

    private setBottomBorder(onClick: () => void) {
        const container = new Container();
        container.position.set(this.containerPosition.x, this.containerPosition.y);
        const button = this.getButton(onClick);
        const text = this.getText();

        container.addChild(text);
        container.addChild(button);
        this.addChild(container);
    }

    private getText() {
        const x = 0;
        const y = 0 + config.styles.title.marginTop;
        const text = new Text(this.statTitle, {
            fontFamily: 'Arial',
            fontSize: config.styles.title.fontSize,
            fill: GAME_COLORS.lightBlue,
            align: 'center',
        });
        text.position.set(x + 10, y);
        return text;
    }

    private getButton(onClick: () => void) {
        const container = new Container();
        container.position.set(this.containerWidth - config.styles.button.size, 0);
        const graphics = new Graphics();
        graphics.beginFill();
        graphics.lineStyle(2, GAME_COLORS.lightBlue);
        const height = config.styles.button.size;
        const width = config.styles.button.size;
        const sharpOffset = config.styles.button.sharpOffset;
        const x = 0;
        const y = 0;
        const points = [
            x + sharpOffset, y,
            x, y + sharpOffset,

            x, y + height,

            x + width - sharpOffset, x + height,
            x + width, x + height - sharpOffset,

            x + width, y,
        ];
        graphics.drawPolygon(points);
        graphics.endFill();


        const text = new Text('+', {
            fontFamily: 'Arial',
            fontSize: config.styles.button.fontSize,
            fill: GAME_COLORS.lightBlue,
            align: 'center',
        });
        text.position.set(x + 10, y);
        graphics.addChild(text);

        const button = new Button(graphics);
        button.onPress.connect(onClick);
        container.addChild(graphics);
        return container;
    }


}