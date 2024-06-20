import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './Inventory.const';
import { InventoryOptions } from './Inventory.types';
import { ItemCard } from '../../Gunsmith/components/ItemCard';
import { List, ScrollBox } from '@pixi/ui';
import { Cloth, ClothesItems } from '../../../modules/items/Clothes';
import { GangMemberInventoryData, GangMemberInventoryItem } from '../GangMemberScreen.types';
import { InventorySection, InventorySectionUnion } from '../GangMemberScreen.const';


export class Inventory extends Container {
    private inventoryItemsByType: GangMemberInventoryData;
    private inventoryItems: Array<GangMemberInventoryItem> = [];
    private onInventoryItemHover: InventoryOptions['onInventoryItemHover'];
    private onInventoryItemPointerLeave: InventoryOptions['onInventoryItemPointerLeave'];
    private onClothCardActionBtnClick: InventoryOptions['onClothCardActionBtnClick'];
    private listContainer: Container = new Container();

    constructor({
                    x,
                    y,
                    onInventoryItemHover,
                    onInventoryItemPointerLeave,
                    inventoryItems,
                    onClothCardActionBtnClick,
                }: InventoryOptions) {
        super();
        this.onInventoryItemHover = onInventoryItemHover;
        this.onInventoryItemPointerLeave = onInventoryItemPointerLeave;
        this.onClothCardActionBtnClick = onClothCardActionBtnClick;
        this.inventoryItemsByType = inventoryItems;
        this.position.set(x, y);
        this.addChild(this.createContainer());
        this.addChild(this.listContainer);
        this.changeInventoryList(InventorySection.CLOTHES);
    }

    public changeInventoryList(inventorySection: InventorySectionUnion) {
        this.inventoryItems = [];
        if (inventorySection === InventorySection.CLOTHES) {
            this.inventoryItems = this.inventoryItemsByType.clothes;
        }

        if (this.listContainer.children[0]) {
            this.listContainer.removeChildAt(0);
        }
        this.listContainer.addChild(this.createItemTile());
    }

    private createItemTile() {
        const onInventoryItemHover = this.onInventoryItemHover;
        const onInventoryItemPointerLeave = this.onInventoryItemPointerLeave;
        const onClothCardActionBtnClick = this.onClothCardActionBtnClick;
        const elementsMargin = 16;
        const scrollbox = new ScrollBox({
            width: 910,
            height: CONFIG.HEIGHT - 50,
        });
        const list = new List({ type: 'vertical', elementsMargin });
        scrollbox.position.set(20, 20);
        let size = 'sm';
        let rowList = new List({ type: 'horizontal', elementsMargin });
        this.inventoryItems.forEach((el, index) => {
            const cloth: Cloth | undefined = ClothesItems.get(el.itemId);
            const card = new ItemCard({
                onActionButtonClick(): void {
                    onClothCardActionBtnClick(el, card);
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
                    id: el.itemId,
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
        console.log(list.width);
        scrollbox.addItem(list);
        return scrollbox;
    }

    private createContainer(): Graphics {
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const x = 0;
        const y = 0;
        const sharpOffsetLeft = CONFIG.SHARP_OFFSET_LEFT;

        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x + sharpOffsetLeft, y,
            x, y + sharpOffsetLeft,
            x, y + height - sharpOffsetLeft,
            x + sharpOffsetLeft, y + height,
            x + width, y + height,
            x + width, y,
        );
        g.endFill();
        return g;
    }
}