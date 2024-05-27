import { Container, Sprite, Text, Texture } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { getColorByItemRarity } from '../../../config/types';
import { CONFIG } from './ItemCard.const';
import { ITEM_CARD_SIZE, ItemCardItem, ItemCardOptions, ItemCardSizeUnion } from './ItemCard.types';
import { GAME_COLORS } from '../../../config/styles';

export class ItemCard extends Container {
    private highlightColor: string;
    private readonly size: ItemCardSizeUnion;
    private readonly itemCardWidth: number;
    private readonly item: ItemCardItem;
    private isMarked: boolean;

    constructor({ x, y, rarity, onPointerOver, onPointerLeave, size, item, onClick, isMarked }: ItemCardOptions) {
        super();
        this.isMarked = isMarked;
        this.item = item;
        this.size = size;
        this.itemCardWidth = this.getItemCardWidth();
        this.interactive = true;

        this.highlightColor = getColorByItemRarity(rarity);
        this.position.set(x, y);

        this.addChild(this.createRarityGraphic());
        this.addChild(this.createItemCardGraphics());
        this.addChild(this.createGunImage());
        this.addChild(this.createLabel());

        this.on('pointerover', onPointerOver);
        this.on('pointerleave', onPointerLeave);
        this.on('click', (e) => {
            onClick(e);
        });
    }

    private createGunImage() {
        const g = new Graphics();
        const txt = Texture.from(`guns/sniperRifles/grad`);
        const gunTxt = new Sprite(txt);
        gunTxt.width = Math.floor(gunTxt.width * CONFIG.GUN_SCALE.SNIPER);
        gunTxt.height = Math.floor(gunTxt.height * CONFIG.GUN_SCALE.SNIPER);
        const x = CONFIG.RARITY_WIDTH + CONFIG.GAP;
        const y = 0;
        const height = CONFIG.HEIGHT;
        const width = this.itemCardWidth;

        const gX = x + Math.floor(width / 2) - Math.floor(gunTxt.width / 2);
        const gY = y + Math.floor(height / 2) - Math.floor(gunTxt.height / 2);

        g.addChild(gunTxt);
        g.position.set(gX, gY);
        return g;
    }

    private createRarityGraphic() {
        const x = 0;
        const y = 0;
        const width = CONFIG.RARITY_WIDTH;
        const height = CONFIG.HEIGHT;
        const offsetHeight = CONFIG.RARITY_INDENT_HEIGHT;
        const identXOffset = CONFIG.RARITY_IDNENT_OFFEST_X;
        const identYOffset = CONFIG.RARITY_IDNENT_OFFEST_Y;
        const points = [
            x, y,

            x, y + identYOffset,
            x + identXOffset, y + identYOffset + identXOffset,
            x + identXOffset, y + identYOffset + offsetHeight,
            x, y + identYOffset + offsetHeight,

            x, y + height,
            x + width, y + height,
            x + width, y,
        ];

        const g = new Graphics();
        console.log(this.highlightColor);
        g.beginFill(this.highlightColor);
        g.drawPolygon(points);
        g.endFill();
        return g;
    }

    private createLabel() {
        const x = CONFIG.RARITY_WIDTH + CONFIG.GAP;
        const y = 0;
        const height = CONFIG.HEIGHT;
        const width = this.itemCardWidth;
        const text = new Text(this.item.label.toUpperCase(), {
            fill: CONFIG.ITEM_LABEL_COLOR,
            fontSize: CONFIG.ITEM_LABEL_FONT_SIZE,
            letterSpacing: CONFIG.ITEM_LABEL_LETTER_SPACING,
            fontWeight: CONFIG.ITEM_LABEL_FONT_WEIGHT,
        });
        const textX = x + Math.floor(width / 2) - Math.floor(text.width / 2);
        const textY = y + Math.floor(height - text.height) - CONFIG.ITEM_LABEL_FONT_SIZE_PADDING_BOTTOM;

        text.position.set(textX, textY);
        return text;
    }

    private getItemCardWidth() {
        switch (this.size) {
            case ITEM_CARD_SIZE.sm:
                return Math.floor(CONFIG.ITEM_CARD_MAX_WIDTH / 3);
            case ITEM_CARD_SIZE.md:
                return Math.floor(CONFIG.ITEM_CARD_MAX_WIDTH / 2);
            default:
                return CONFIG.ITEM_CARD_MAX_WIDTH;
        }
    }

    private createItemCardGraphics() {
        const g = new Graphics();
        const x = CONFIG.RARITY_WIDTH + CONFIG.GAP;
        const y = 0;
        const height = CONFIG.HEIGHT;
        const width = this.itemCardWidth;
        const sharpOffset = CONFIG.ITEM_CARD_SHARP_OFFSET;

        g.beginFill(CONFIG.ITEM_CARD_BACKGROUND);
        g.lineStyle(CONFIG.ITEM_CARD_BORDER_WIDTH, CONFIG.ITEM_CARD_BORDER_COLOR);
        g.drawPolygon(
            x, y,
            x, y + height,
            x + width - sharpOffset, y + height,
            x + width, y + height - sharpOffset,
            x + width, y,
        );
        g.endFill();

        let leftMarkedX = CONFIG.RARITY_WIDTH + CONFIG.GAP;
        let leftMarkedY = 0;
        const leftMarkedSize = 15;
        const leftMarkedBorderWidth = 3;

        g.beginFill(GAME_COLORS.lightBlue);
        g.lineStyle(0, GAME_COLORS.lightBlue);
        g.drawPolygon(
            leftMarkedX, leftMarkedY,
            leftMarkedX, leftMarkedY + leftMarkedSize,
            leftMarkedX + leftMarkedSize, leftMarkedY + leftMarkedSize,
            leftMarkedX + leftMarkedSize, leftMarkedY,
        );
        g.endFill();

        leftMarkedY += leftMarkedBorderWidth;
        leftMarkedX += leftMarkedBorderWidth;

        g.beginFill(CONFIG.ITEM_CARD_BACKGROUND);
        g.lineStyle(0, GAME_COLORS.lightBlue);
        g.drawPolygon(
            leftMarkedX, leftMarkedY,
            leftMarkedX, leftMarkedY + leftMarkedSize,
            leftMarkedX + leftMarkedSize, leftMarkedY + leftMarkedSize,
            leftMarkedX + leftMarkedSize, leftMarkedY,
        );
        g.endFill();


        const rightMakredSize = 30;
        const rightMarkedX = CONFIG.RARITY_WIDTH + CONFIG.GAP + width - rightMakredSize;
        const rightMarkedY = height - rightMakredSize;
        const rightMarkedThicknes = 12;

        g.beginFill(GAME_COLORS.lightBlue);
        g.lineStyle(0, GAME_COLORS.lightBlue);
        g.drawPolygon(
            rightMarkedX, rightMarkedY + rightMakredSize,

            rightMarkedX + rightMarkedThicknes, rightMarkedY + rightMakredSize,
            rightMarkedX + rightMakredSize, rightMarkedY + rightMarkedThicknes,

            rightMarkedX + rightMakredSize, rightMarkedY,
        );
        g.endFill();

        return g;
    }
}