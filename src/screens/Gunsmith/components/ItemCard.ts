import { Container, Sprite, Text, Texture } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { GAME_COLORS } from '../../../config/styles';
import { getColorByItemRarity, ItemRarityUnion } from '../../../config/types';
import { CONFIG } from './ItemCard.const';

interface IItemCard {
    x: number;
    y: number;
    rarity: ItemRarityUnion;
}

export class ItemCard extends Container {
    private highlightColor: string;

    constructor({ x, y, rarity, onHover }: IItemCard) {
        super();
        this.interactive = true;  // Make the container interactive
        this.buttonMode = true;   // Change the cursor to a pointer when hovering

        this.highlightColor = getColorByItemRarity(rarity);
        this.position.set(x, y);

        this.addChild(this.createRarityGraphic());
        this.addChild(this.createItemCardGraphics());
        this.addChild(this.createGunImage());
        this.addChild(this.createLabel());

        this.on('pointermove', () => {
            console.log('pointermove');
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
        const width = CONFIG.ITEM_CARD_WIDTH;

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
        const width = CONFIG.ITEM_CARD_WIDTH;
        const text = new Text('Phantom'.toUpperCase(), {
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

    private createItemCardGraphics() {
        const g = new Graphics();
        const x = CONFIG.RARITY_WIDTH + CONFIG.GAP;
        const y = 0;
        const height = CONFIG.HEIGHT;
        const width = CONFIG.ITEM_CARD_WIDTH;
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

        return g;
    }
}