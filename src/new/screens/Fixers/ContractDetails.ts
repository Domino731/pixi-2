import { Container, Text } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { Button } from '../../../components/Buttons';
import { GAME_COLORS } from '../../../const/styles';
import { InfoLine } from './components/InfoLine';

const DETAILS_COLUMN_WIDTH = 300;
const DETAILS_COLUMN_LEFT_PADDING = 40;

export class ContractDetails extends Container {
    private fixerName = 'Rogue Alvarez';

    constructor() {
        super();
        this.createContainer();
        this.setFixerText();
        this.setDetails();
        this.position.set(200, 100);
    }


    private createContainer() {
        const sharpOffset1 = 40;
        const sharpOffset2 = 20;
        const topBarWidth = 600;
        const x = 0;
        const y = 0;
        const width = 1600;
        const height = 1000;

        const g = new Graphics();
        g.beginFill();
        g.lineStyle(2, 'red');
        g.drawPolygon(
            x, y - sharpOffset1,

            // x, y + height,
            x, y + height - sharpOffset1,
            x + sharpOffset1, y + height,

            x + width - sharpOffset1, y + height,
            x + width, y + height - sharpOffset1,

            x + width, y + height - 160,
            x + width - sharpOffset2, y + height - 170,
            x + width - sharpOffset2, y + height - 440,
            x + width, y + height - 440,

            x + width, y,
            x + topBarWidth, y,
            x + topBarWidth - sharpOffset1, y - sharpOffset1,
        );

        // g.drawRect(0, 0, 1400, 800);
        g.endFill();

        this.addChild(g);
    }

    private setFixerText() {
        const text = new Text(this.fixerName, {
            fontSize: 36,
            fill: 'white',
        });
        text.position.set(10, -32);
        this.addChild(text);
    }

    private setDetails() {
        const container = new Container();
        const fixerPhoto = this.getFixerPhoto();
        const acceptMissionBtn = new Button({
            width: DETAILS_COLUMN_WIDTH, position: {
                x: 0, y: fixerPhoto.height + 120,
            }, label: 'Accept', labelX: 110,
        });
        const expInfo = new InfoLine({
            position: { x: 0, y: fixerPhoto.height + 30 },
            color: GAME_COLORS.green1,
            label: '100',
        });
        const timeInfo = new InfoLine({
            position: { x: 0, y: fixerPhoto.height + 70 },
            color: GAME_COLORS.lightBlue,
            label: '13:00',
        });
        container.addChild(fixerPhoto);
        container.addChild(acceptMissionBtn);
        container.position.set(DETAILS_COLUMN_LEFT_PADDING, DETAILS_COLUMN_LEFT_PADDING);
        container.addChild(expInfo);
        container.addChild(timeInfo);
        this.addChild(container);
    }

    private getFixerPhoto() {
        const g = new Graphics();
        const x = 0;
        const y = 0;
        const size = DETAILS_COLUMN_WIDTH;
        const offset = 40;

        g.beginFill();
        g.lineStyle(2, GAME_COLORS.red1);
        const points = [
            x, y,
            x, y + size,
            x + size - offset, y + size,
            x + size, y + size - offset,

            x + size, y,
        ];
        g.drawPolygon(points);
        g.endFill();
        return g;
    }
}