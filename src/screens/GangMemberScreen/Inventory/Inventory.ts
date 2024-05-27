import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './Inventory.const';
import { InventoryOptions } from './Inventory.types';
import { ItemCard } from '../../Gunsmith/components/ItemCard';
import { List } from '@pixi/ui';

export class Inventory extends Container {
    constructor({ x, y, onInventoryItemHover, onInventoryItemPointerLeave }: InventoryOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createContainer());
        this.addChild(this.createItemTile(onInventoryItemHover, onInventoryItemPointerLeave));

    }

    private createItemTile(onInventoryItemHover: InventoryOptions['onInventoryItemHover'], onInventoryItemPointerLeave: InventoryOptions['onInventoryItemPointerLeave']) {
        const list = new List({ type: 'vertical', elementsMargin: 20 });
        list.position.set(20, 20);
        const card1 = new ItemCard({
            x: 20, y: 20, rarity: 'LEGENDARY', onPointerOver: (e) => {
                onInventoryItemHover(e, card1);
            },
            onPointerLeave: (e) => {
                onInventoryItemPointerLeave(e, card1);
            },
            onClick: (e) => {
                console.log(123);
            },
            size: 'lg',
            item: {
                label: 'Phantom',
            },
        });
        const card2 = new ItemCard({
            x: 20, y: 20, rarity: 'LEGENDARY', onPointerOver: (e) => {
                onInventoryItemHover(e, card2);
            },
            onPointerLeave: (e) => {
                onInventoryItemPointerLeave(e, card2);
            },
            size: 'md',
            item: {
                label: 'Phantom',
            }, onClick: (e) => {
                console.log(123);
            },
        });
        const card3 = new ItemCard({
            x: 20, y: 20, rarity: 'LEGENDARY', onPointerOver: (e) => {
                onInventoryItemHover(e, card3);
            },
            onPointerLeave: (e) => {
                onInventoryItemPointerLeave(e, card3);
            },
            size: 'sm',
            item: {
                label: 'Phantom',
            }, onClick: (e) => {
                console.log(123);
            },
        });
        list.addChild(card1);
        list.addChild(card2);
        list.addChild(card3);

        return list;
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