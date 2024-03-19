import { Container } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { GAME_COLORS } from '../../../../const/styles';


interface LevelBarOptions {
    position: {
        x: number
        y: number
    };
    barWidth: number;
}

export class LevelBar extends Container {
    private containerPosition: {
        x: number
        y: number
    };
    private barWidth: number;

    constructor({ position, barWidth }: LevelBarOptions) {
        super();
        this.containerPosition = position;
        this.barWidth = barWidth;
        this.setProgressBar();
    }

    private setProgressBar() {
        const container = new Container();
        container.position.set(this.containerPosition.x, this.containerPosition.y);
        const wrapper = new Graphics();
        wrapper.beginFill('#001207');
        wrapper.lineStyle(2, GAME_COLORS.lightBlue);
        const width = this.barWidth;
        const height = 40;
        const sharpOffset = 10;
        const sharpOffset2 = 16;

        const x = this.containerPosition.x;
        const y = this.containerPosition.y;

        const points = [
            x, y,


            x, y + height - sharpOffset,
            x + sharpOffset, y + height,

            x + width - sharpOffset2, y + height,
            x + width, y + height - sharpOffset2,

            x + width, y,
        ];

        wrapper.drawPolygon(points);
        wrapper.endFill();


        const progress = new Graphics();


        progress.beginFill('green');

        progress.drawRect(this.containerPosition.x, this.containerPosition.y, 40, height);
        // progress.mask = wrapper;

        progress.endFill();
        wrapper.addChild(progress);

        container.addChild(wrapper);

        this.addChild(container);
    }

}