import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './Inventory.const';
import { InventoryOptions } from './Inventory.types';
import { ItemCard } from '../../Gunsmith/components/ItemCard';

export class Inventory extends Container {
    constructor({ x, y, onInventoryItemHover, onInventoryItemPointerLeave }: InventoryOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createContainer());
        this.addChild(this.createItemTile(onInventoryItemHover, onInventoryItemPointerLeave));

    }

    private createItemTile(onInventoryItemHover: InventoryOptions['onInventoryItemHover'], onInventoryItemPointerLeave: InventoryOptions['onInventoryItemPointerLeave']) {
        const card1 = new ItemCard({
            x: 20, y: 20, rarity: 'LEGENDARY', onPointerOver: (e) => {
                onInventoryItemHover(e, card1);
            },
            onPointerLeave: (e) => {
                onInventoryItemPointerLeave(e, card1);
            },
        });
        return card1;
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