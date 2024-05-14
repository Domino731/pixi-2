import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { ProfileFrameOptions } from './ProfileFrame.types';
import { GAME_COLORS } from '../../../../../../const/styles';
import { createAppTexture } from '../../../../../../main';
import { CONFIG } from './ProfileFrame.const';
import { LvlIcon } from '../../../../../../components/LvlIcon';
import { LVL_ICON_VARIANT } from '../../../../../../components/LvlIcon/LvlIcon.const';

export class ProfileFrame extends Container {
    constructor({ x, y }: ProfileFrameOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createFrame());
        this.addChild(this.createLevelIcons());
    }

    private createLevelIcons() {
        const container = new Container();
        container.addChild(new LvlIcon({
            x: 15,
            y: 15,
            variant: LVL_ICON_VARIANT.OVERALL,
            lvl: 6,
            graphicsStyle: 1,
        }));
        container.addChild(new LvlIcon({
            x: 15,
            y: 65,
            variant: LVL_ICON_VARIANT.POWER,
            lvl: 3,
            graphicsStyle: 2,
        }));
        return container;
    }

    private createFrame() {
        const g = new Graphics();
        const x = 0;
        const y = 0;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const sharpOffset = CONFIG.SHARP_OFFSET;

        const polygonPoints: number[] = [
            x, y,
            x, y + height - sharpOffset,
            x + sharpOffset, y + height,
            x + width, y + height,
            x + width, y,
        ];

        g.beginFill(0xFF0000, 0);
        g.lineStyle(2, GAME_COLORS.red1);
        const imageUrl = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2d961a96-b47f-4f2d-be69-7b2b965755bd/width=450/ComfyUI_02485_.jpeg';
        Texture.fromURL(imageUrl).then(texture => {
            const sprite = new Sprite(texture);
            const texture2 = createAppTexture(sprite);
            g.beginTextureFill({ texture: texture2 });
            g.drawPolygon(polygonPoints);
        });
        g.endFill();
        return g;
    }
}