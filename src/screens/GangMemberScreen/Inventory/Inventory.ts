import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './Inventory.const';
import { InventoryOptions } from './Inventory.types';
import { ItemCard } from '../../Gunsmith/components/ItemCard';
import { List } from '@pixi/ui';

export class Inventory extends Container {
    constructor({ x, y }: InventoryOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createContainer());
        this.addChild(this.createItemTile());

    }

    private createItemTile() {
        const list = new List({ type: 'horizontal' });
        const card1 = new ItemCard({ x: 20, y: 20, rarity: 'LEGENDARY' });
        const card2 = new ItemCard({ x: 0, y: 0, rarity: 'LEGENDARY' });
        // list.addChild(card1);
        // list.addChild(card2);
        return card1
    }

    private createContainer(): Graphics {
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const x = 0;
        const y = 0;
        const sharpOffsetLeft = CONFIG.SHARP_OFFSET_LEFT;
        const sharpOffsetRight = CONFIG.SHARP_OFFSET_RIGHT;
        const indentBottomOffset = CONFIG.INDENT_BOTTOM_OFFSET;
        const indentHeight = CONFIG.INDENT_HEIGHT;

        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x + sharpOffsetLeft, y,
            x, y + sharpOffsetLeft,

            x, y + height - sharpOffsetLeft,
            x + sharpOffsetLeft, y + height,

            x + width, y + height,

            x + width, y + height - indentBottomOffset,
            x + width - sharpOffsetRight, y + height - indentBottomOffset - sharpOffsetRight,
            x + width - sharpOffsetRight, y + height - indentBottomOffset - indentHeight,
            x + width, y + height - indentBottomOffset - indentHeight,
            x + width, y,
        );
        g.endFill();
        return g;
    }
}