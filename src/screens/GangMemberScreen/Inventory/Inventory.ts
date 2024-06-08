import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './Inventory.const';
import { InventoryOptions } from './Inventory.types';
import { ItemCard } from '../../Gunsmith/components/ItemCard';
import { List } from '@pixi/ui';
import { Cloth, ClothesItems } from '../../../modules/items/Clothes';
import { GangMemberInventoryData } from '../GangMemberScreen.types';


export class Inventory extends Container {
    private inventoryItems: GangMemberInventoryData;

    constructor({
                    x,
                    y,
                    onInventoryItemHover,
                    onInventoryItemPointerLeave,
                    inventoryItems,
                    onClothCardActionBtnClick,
                }: InventoryOptions) {
        super();
        this.inventoryItems = inventoryItems;
        this.position.set(x, y);
        this.addChild(this.createContainer());
        this.addChild(this.createItemTile(onInventoryItemHover, onInventoryItemPointerLeave, onClothCardActionBtnClick));
    }

    private createItemTile(
        onInventoryItemHover: InventoryOptions['onInventoryItemHover'],
        onInventoryItemPointerLeave: InventoryOptions['onInventoryItemPointerLeave'],
        onClothCardActionBtnClick: InventoryOptions['onClothCardActionBtnClick'],
    ) {
        const elementsMargin = 16;
        const list = new List({ type: 'vertical', elementsMargin });
        list.position.set(20, 20);
        let size = 'sm';
        let rowList = new List({ type: 'horizontal', elementsMargin });
        this.inventoryItems.clothes.forEach((el, index) => {

            const cloth: Cloth | undefined = ClothesItems.get(el.itemId);
            const card = new ItemCard({
                onActionButtonClick(): void {
                    card.setIsMarked(true);
                    onClothCardActionBtnClick(el);
                },
                x: 20, y: 20, rarity: 'LEGENDARY', onPointerOver: (e) => {
                    onInventoryItemHover(e, card);
                },
                onPointerLeave: (e) => {
                    onInventoryItemPointerLeave(e, card);
                },
                size: size,
                item: {
                    label: 'Phantom',
                }, onClick: (e) => {
                    console.log(123);
                },
                isMarked: el.isEquipped,
                texture: cloth.getTexture('male'),
            });

            rowList.addChild(card);
            if (size === 'sm' && (index + 1) % 6 === 0) {
                list.addChild(rowList);
                rowList = new List({ type: 'horizontal', elementsMargin });
            }
        });
        list.addChild(rowList);
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