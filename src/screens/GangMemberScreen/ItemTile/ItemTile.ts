import { Container, Graphics, Sprite, Text, Texture } from 'pixi.js';
import { ItemTileOptions } from './ItemTile.types';
import { CONFIG } from './ItemTile.const';
import { textUtils } from '../../../utils/text';
import { Button } from '@pixi/ui';

export class ItemTile extends Container {
    private itemTextureContainer: Container = new Container();
    private closeIconContainer: Container = new Container();

    constructor({ x, y, label, onCloseIconClick }: ItemTileOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createTile());
        if (label !== undefined) {
            this.addChild(this.createLabel(label));
        }
        this.addChild(this.itemTextureContainer);
        this.addChild(this.closeIconContainer);
    }

    public addItemTexture(texture: Texture) {
        if (this.itemTextureContainer.children[0]) {
            this.itemTextureContainer.removeChildAt(0);
        }
        const g = new Graphics();
        const gunTxt = new Sprite(texture);
        gunTxt.width = Math.floor(gunTxt.width * 0.4);
        gunTxt.height = Math.floor(gunTxt.height * 0.4);
        g.addChild(gunTxt);
        g.position.set(4, 0);
        this.itemTextureContainer.addChild(g);
    }

    public removeItemTexture() {
        if (this.itemTextureContainer.children[0]) {
            this.itemTextureContainer.removeChildAt(0);
        }
    }

    public removeCloseIcon() {
        if (this.closeIconContainer.children[0]) {
            this.closeIconContainer.removeChildAt(0);
        }
    }

    public showCloseIcon(onClick: () => void) {
        const size = CONFIG.LABEL_SIZE;
        const sharpOffsetPrimary = CONFIG.LABEL_SHARP_OFFSET;
        const g = new Graphics();
        const x = -16;
        const y = CONFIG.SIZE - CONFIG.SHARP_OFFSET;

        g.beginFill(CONFIG.LABEL_BACKGROUND);
        g.drawPolygon(
            x + CONFIG.SHARP_OFFSET, y,
            x, y + CONFIG.SHARP_OFFSET,

            x, y + size - sharpOffsetPrimary,
            x + sharpOffsetPrimary, y + size,

            x + size - sharpOffsetPrimary, y + size,
            x + size, y + size - sharpOffsetPrimary,

            x + size, y + sharpOffsetPrimary,
            x + size - sharpOffsetPrimary, y,
        );
        g.endFill();

        const btn = new Button(g);
        btn.onPress.connect(() => {
            onClick();
        });
        this.closeIconContainer.addChild(btn.view);
    }


    private createLabel(label: number) {
        const size = CONFIG.LABEL_SIZE;
        const sharpOffsetPrimary = CONFIG.LABEL_SHARP_OFFSET;
        const g = new Graphics();
        const x = CONFIG.SIZE - CONFIG.SHARP_OFFSET;
        const y = CONFIG.SIZE - CONFIG.SHARP_OFFSET;

        const text = new Text(label, {
            fill: CONFIG.LABEL_FONT_COLOR,
            fontSize: CONFIG.LABEL_FONT_SIZE,
            fontWeight: CONFIG.LABEL_FONT_WEIGHT,
        });
        textUtils.centerText({ text, wrapperHeight: size, wrapperWidth: size, x, y });
        g.beginFill(CONFIG.LABEL_BACKGROUND);
        g.drawPolygon(
            x + CONFIG.SHARP_OFFSET, y,
            x, y + CONFIG.SHARP_OFFSET,

            x, y + size - sharpOffsetPrimary,
            x + sharpOffsetPrimary, y + size,

            x + size - sharpOffsetPrimary, y + size,
            x + size, y + size - sharpOffsetPrimary,

            x + size, y + sharpOffsetPrimary,
            x + size - sharpOffsetPrimary, y,
        );
        g.endFill();
        g.addChild(text);
        return g;
    }

    private createTile() {
        const size = CONFIG.SIZE;
        const sharpOffset = CONFIG.SHARP_OFFSET;
        const g = new Graphics();
        const x = 0;
        const y = 0;

        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x + sharpOffset, y,
            x, y + sharpOffset,

            x, y + size - sharpOffset,
            x + sharpOffset, y + size,

            x + size - sharpOffset, y + size,
            x + size, y + size - sharpOffset,

            x + size, y + sharpOffset,
            x + size - sharpOffset, y,
        );
        g.endFill();
        return g;
    }
}