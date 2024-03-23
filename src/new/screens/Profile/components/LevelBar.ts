import { Container } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { GAME_COLORS } from '../../../../const/styles';
import { Text } from 'pixi.js';

interface LevelBarOptions {
    position: {
        x: number
        y: number
    };
    barWidth: number;
}

const LEVELS_OFFSET = 20;
const LEVELS_WIDTH = 100;
const LEVELS_HEIGHT = 36;

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
        this.setLevelText();
        this.setFixersLevelText();
        this.setTitleText();
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



        const wrapper2 = new Graphics();
        wrapper2.beginFill('#001207');
        wrapper2.lineStyle(2, GAME_COLORS.lightBlue);

        const points2 = [
            x, y,


            x, y + height - sharpOffset,
            x + sharpOffset, y + height,

            x + width - sharpOffset2, y + height,
            x + width, y + height - sharpOffset2,

            x + width, y,
        ];

        wrapper2.drawPolygon(points2);
        wrapper2.endFill();



        const progress = new Graphics();


        progress.beginFill('green');

        progress.drawRect(this.containerPosition.x + 1, this.containerPosition.y + 1, 100, 40);
        

        progress.endFill();
     
        container.addChild(wrapper2);
        container.addChild(wrapper);
        container.addChild(progress);

        progress.mask = wrapper;

        this.addChild(container);
        
    }

private setLevelText(){
    const container = new Container();
    const yOffset = LEVELS_OFFSET
    container.position.set(this.containerPosition.x + 10, this.containerPosition.y+ yOffset);
    const wrapper = new Graphics();
    wrapper.beginFill();
    wrapper.lineStyle(2, GAME_COLORS.lightBlue);
    const width = LEVELS_WIDTH;
    const height = LEVELS_HEIGHT;
    const sharpOffset = 10;

    const x = this.containerPosition.x;
    const y = this.containerPosition.y + yOffset;

    const points = [
        x, y,

        x, y + height - sharpOffset,
        x + sharpOffset, y + height,

        x + width, y + height,
        x + width, y,
    ];

    wrapper.drawRect(x, y, width, height);
    wrapper.endFill();

    const text = new Text('24', {
        fontFamily: 'Arial',
        fontSize: 26,
        fill: 'white',
        align: 'center',
        fontWeight: 'bold',
    });
    text.position.set(x + 34, y + 4);

    container.addChild(wrapper)
    container.addChild(text);
    this.addChild(container)
}


private setFixersLevelText(){
    const container = new Container();
    const yOffset = LEVELS_OFFSET
    container.position.set(this.containerPosition.x + 10 + LEVELS_WIDTH, this.containerPosition.y+ yOffset);
    const wrapper = new Graphics();
    wrapper.beginFill();
    wrapper.lineStyle(2, GAME_COLORS.lightBlue);
    const width = LEVELS_WIDTH;
    const height = LEVELS_HEIGHT;
    const sharpOffset = 10;

    const x = this.containerPosition.x;
    const y = this.containerPosition.y + yOffset;

    const points = [
        x, y,

        x, y + height,
        
        x + width, y + height,
        x + width, y,
    ];

    wrapper.drawPolygon(points);
    wrapper.endFill();

    const text = new Text('24', {
        fontFamily: 'Arial',
        fontSize: 26,
        fill: 'white',
        align: 'center',
        fontWeight: 'bold',
    });
    text.position.set(x + 34, y + 4);

    container.addChild(wrapper)
    container.addChild(text);
    this.addChild(container)
}

private setTitleText(){
    const container = new Container();
    const yOffset = LEVELS_OFFSET
    container.position.set(this.containerPosition.x + 10 + (LEVELS_WIDTH * 2), this.containerPosition.y+ yOffset);
    const wrapper = new Graphics();
    wrapper.beginFill();
    wrapper.lineStyle(2, GAME_COLORS.lightBlue);
    const width = 315;
    const height = LEVELS_HEIGHT;

    const x = this.containerPosition.x;
    const y = this.containerPosition.y + yOffset;


    wrapper.drawRect(x, y, width, height);
    wrapper.endFill();


    container.addChild(wrapper)
    const text = new Text('Scavenger', {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 'white',
        align: 'center',
        fontWeight: 'bold',
    });
    text.position.set(x + 34,y + 5);


    container.addChild(text);
    this.addChild(container)
    // this.addChild(text)
}

}