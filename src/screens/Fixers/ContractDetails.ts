import { Container, Sprite, Text, Texture } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { Button } from '../../components/Buttons';
import { GAME_COLORS } from '../../config/styles';
import { InfoLine } from './components/InfoLine';
import { createAppTexture } from '../../main';
import { ScrollBox } from '@pixi/ui';
import { Button as PixiButton } from '@pixi/ui';

const DETAILS_COLUMN_WIDTH = 400;
const DETAILS_COLUMN_LEFT_PADDING = 40;
const DESCRIPTION_SECTION_X = DETAILS_COLUMN_LEFT_PADDING * 2 + DETAILS_COLUMN_WIDTH;
const WIDTH = 1600;
const DESCRIPTION_WIDTH = WIDTH - DESCRIPTION_SECTION_X - DETAILS_COLUMN_LEFT_PADDING;
const DESCRIPTION_HEIGHT = 600;

interface IContractDetails {
    onCloseButtonClick: () => void;
}

export class ContractDetails extends Container {
    private fixerName = 'Rogue Alvarez';

    constructor({ onCloseButtonClick }: IContractDetails) {
        super();
        this.createContainer();
        this.setFixerText();
        this.setDetails();
        this.setDescriptionSection();
        this.setDetailsImages();
        this.position.set(80, 140);
        this.setCloseButton(onCloseButtonClick);
    }


    private setCloseButton(onCloseButtonClick: () => void) {
        const g = new Graphics();
        const x = 600;
        const y = 0 - 40;
        const width = 40;
        const height = 40;

        g.beginFill('red');
        g.drawRect(x, y, width, height);
        g.endFill();
        const btn = new PixiButton(g);
        btn.onPress.connect(onCloseButtonClick);
        this.addChild(btn.view);
    }

    private createContainer() {
        const sharpOffset1 = 40;
        const sharpOffset2 = 20;
        const topBarWidth = 600;
        const x = 0;
        const y = 0;
        const width = WIDTH;
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
            }, label: 'Accept', labelX: 150,
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
        const imageUrl = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2d961a96-b47f-4f2d-be69-7b2b965755bd/width=450/ComfyUI_02485_.jpeg';
        Texture.fromURL(imageUrl).then(texture => {
            const sprite = new Sprite(texture);
            sprite.width = 400;
            sprite.height = 400;
            const texture2 = createAppTexture(sprite);
            g.beginTextureFill({ texture: texture2 });
            g.drawPolygon(points);
            g.endFill();
        });
        g.endFill();
        return g;
    }

    private setDescriptionSection() {
        const container = new Container();

        const description = new Graphics();
        description.beginFill('red');
        description.drawRect(0, 0, 1000, 500);
        description.endFill();

        const scrollBox = new ScrollBox({
            background: 0XFFFFFF,
            width: DESCRIPTION_WIDTH,
            height: DESCRIPTION_HEIGHT,
            items: [
                description,
            ],
        });
        scrollBox.position.set(DESCRIPTION_SECTION_X, DETAILS_COLUMN_LEFT_PADDING);

        container.addChild(scrollBox);
        this.addChild(container);
    }

    private setDetailsImages() {
        const container = new Container();
        container.position.set(DESCRIPTION_SECTION_X, DESCRIPTION_HEIGHT + (DETAILS_COLUMN_LEFT_PADDING * 2));
        const size = 250;
        const createImage = (x: number) => {

            const offset = 30;
            const y = 0;
            const g = new Graphics();
            g.beginFill();
            g.lineStyle(2, 'red');
            g.drawPolygon([
                x, y,

                x, y + size - offset,
                x + offset, y + size,

                x + size, y + size,

                x + size, y,
            ]);
            g.endFill();
            container.addChild(g);
        };

        createImage(DESCRIPTION_WIDTH - size);
        createImage(DESCRIPTION_WIDTH - (size * 2) - DETAILS_COLUMN_LEFT_PADDING);

        this.addChild(container);
    }
}