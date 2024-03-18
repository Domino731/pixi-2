import { Container, Graphics, Sprite, Text, Texture } from 'pixi.js';
import { GAME_COLORS } from '../../const/styles';
import { createAppTexture } from '../../main';

interface ProfileImageFrameOptions {
    position: {
        x: number;
        y: number;
    };
    width: number;
    height: number;
}

export class ProfileImageFrame extends Container {
    framePosition: {
        x: number;
        y: number;
    };
    frameWidth: number;
    frameHeight: number;
    sharpOffset = 40;
    sharpOffset2 = 20;
    titleFrameHeight = 70;

    constructor({ position, width, height }: ProfileImageFrameOptions) {
        super();
        this.framePosition = position;
        this.frameWidth = width;
        this.frameHeight = height;
        this.setFrame();
        this.setTitle();
    }


    private setFrame() {
        const position = this.framePosition;

        const graphics = new Graphics();
        graphics.beginFill();
        graphics.lineStyle(2, GAME_COLORS.lightBlue);
        const height = this.frameHeight;
        const width = this.frameWidth;
        const sharpOffset = this.sharpOffset;
        const sharpOffest2 = this.sharpOffset2;
        const x = position?.x ?? 0;
        const y = position?.y ?? 0;

        const points = [
            x, y,

            x, y + height,

            x + width, y + height,

            x + width, y + sharpOffset,
            (x + width) - sharpOffset, y,
        ];

        graphics.drawPolygon(points);
        graphics.endFill();


        // Load image texture from a web URL
        const imageUrl = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2d961a96-b47f-4f2d-be69-7b2b965755bd/width=450/ComfyUI_02485_.jpeg';
        Texture.fromURL(imageUrl).then(texture => {
            // graphics.fill = 'asd'

            const sprite = new Sprite(texture);
            sprite.width = this.frameWidth;
            sprite.height = this.frameHeight;
            const texture2 = createAppTexture(sprite);
            graphics.beginTextureFill({ texture: texture2 });
            const points = [
                x, y,

                x, y + height,

                x + width, y + height,

                x + width, y + sharpOffset,
                (x + width) - sharpOffset, y,
            ];
            // graphics.addChild(texture);
            graphics.drawPolygon(points);

            graphics.endFill();

            // Add the graphics to the stage or container
            // this.addChild(graphics);
        }).catch(error => {
            console.error('Error loading texture:', error);
        });

        this.addChild(graphics);
    }

    private setTitle() {
        const position = this.framePosition;

        const graphics = new Graphics();
        graphics.beginFill(GAME_COLORS.lightBlue);
        graphics.lineStyle(2, GAME_COLORS.lightBlue);
        // graphics
        const height = this.titleFrameHeight;
        const width = this.frameWidth;
        const sharpOffset = this.sharpOffset;
        const sharpOffest2 = this.sharpOffset2;
        const x = position.x;
        const y = position.y + this.frameHeight;

        const points = [
            x, y,

            x, (y + height) - sharpOffest2,
            x + sharpOffest2, y + height,

            (x + width) - sharpOffset, y + height,
            x + width, (y + height) - sharpOffset,

            x + width, y,
        ];

        graphics.drawPolygon(points);
        graphics.endFill();


        const text = new Text('Judy Alvarez', {
            fontFamily: 'Arial',
            fontSize: 30,
            fill: 'black',
            align: 'center',
            fontWeight: 'bold',
        });
        text.position.set(x + 24, y + 14);

        graphics.addChild(text);
        this.addChild(graphics);
    }
}