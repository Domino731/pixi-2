import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { CONFIG } from './GangsListBar.const';
import { Button } from '@pixi/ui';
import { GAME_COLORS } from '../../../config/styles';
import { createAppTexture } from '../../../main';

export class GangsListBar extends Container {
    constructor() {
        super();
        this.addChild(this.createNavigationButton(false));
        this.addChild(this.createNavigationButton(true));
        this.addChild(this.createList());

    }

    private createCard(width: number, x: number, sharpLocation: 'left' | 'right' | 'none') {
        const y = 0;
        const imageHeight = 85;
        const sharpOffset = 14;
        let imageFramePoints: number[] = [];
        if (sharpLocation === 'right') {
            imageFramePoints = [
                x, y,
                x, y + imageHeight,

                x + width - sharpOffset, y + imageHeight,
                x + width, y + imageHeight - sharpOffset,
                x + width, y,
            ];
        } else if (sharpLocation === 'left') {
            imageFramePoints = [
                x, y,
                x, y + imageHeight - sharpOffset,
                x + sharpOffset, y + imageHeight,
                x + width, y + imageHeight,
                x + width, y,
            ];
        } else {
            imageFramePoints = [
                x, y,
                x, y + imageHeight,
                x + width, y + imageHeight,
                x + width, y,
            ];
        }

        const g = new Graphics();

        // frame
        g.beginFill(0xFF0000, 0);
        g.lineStyle(2, GAME_COLORS.red1);
        const imageUrl = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2d961a96-b47f-4f2d-be69-7b2b965755bd/width=450/ComfyUI_02485_.jpeg';
        Texture.fromURL(imageUrl).then(texture => {
            const sprite = new Sprite(texture);
            sprite.width = 400;
            sprite.height = 400;
            const texture2 = createAppTexture(sprite);
            g.beginTextureFill({ texture: texture2 });
            g.drawPolygon(imageFramePoints);
        });
        g.endFill();

        const btn = new Button(g);
        return btn.view;
    }

    private createList() {
        const g = new Graphics();
        g.position.set(CONFIG.X, CONFIG.Y);
        const x = 0;
        const y = 0;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const sharpOffset = CONFIG.SHARP_OFFSET;
        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x, y,
            x, y + height - sharpOffset,
            x + sharpOffset, y + height,
            x + width - sharpOffset, y + height,
            x + width, y + height - sharpOffset,
            x + width, y,
        );
        g.endFill();

        const container = new Container();

        const cards = [1, 2, 3, 4, 5];
        const cardWidth = 72;

        const padding = 10;


        cards.forEach((el, i) => {
            if (i === 0) {
                const card = this.createCard(cardWidth, (i * cardWidth) + (i * padding), 'left');
                container.addChild(card);
            } else if (i === cards.length - 1) {
                const card = this.createCard(cardWidth, (i * cardWidth) + (i * padding), 'right');
                container.addChild(card);
            } else {
                const card = this.createCard(cardWidth, (i * cardWidth) + (i * padding), 'none');
                container.addChild(card);
            }
        });
        container.position.set(CONFIG.HORIZONTAL_PADDING, 6);
        g.addChild(container);

        return g;
    }

    private createNavigationButton(isReversed = false) {
        const g = new Graphics();
        const size = 60;
        const x = isReversed ? CONFIG.X - 10 : CONFIG.X + CONFIG.WIDTH - CONFIG.SHARP_OFFSET;
        const y = CONFIG.Y + CONFIG.HEIGHT - CONFIG.SHARP_OFFSET;
        const sharpOffset = 10;
        const sharpOffset2 = 10;
        g.beginFill('black');
        g.lineStyle(3, 'green');
        if (isReversed) {
            g.drawPolygon(
                x + sharpOffset2, y,
                x, y,
                x, y + size - sharpOffset,
                x + sharpOffset, y + size,
                x + size, y + size,
                x + size, y + size - sharpOffset2,
            );
        } else {
            g.drawPolygon(
                x, y + size - sharpOffset2,
                x, y + size,
                x + size - sharpOffset, y + size,
                x + size, y + size - sharpOffset,
                x + size, y,
                x + size - sharpOffset2, y,
            );
        }

        g.endFill();

        const x2 = isReversed ? x + 14 : x + 26;
        const y2 = y + 24;
        const size2 = 20;
        g.beginFill('green');
        if (isReversed) {
            g.drawPolygon(
                x2, y2,
                x2, y2 + size2,
                x2 + size2, y2 + size2,
            );
        } else {
            g.drawPolygon(
                x2, y2 + size2,
                x2 + size2, y2 + size2,
                x2 + size2, y2,
            );
        }
        g.endFill();


        const btn = new Button(g);
        return btn.view;
    }

}