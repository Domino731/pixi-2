import { navigation } from '../../main';
import { ContentContainer } from '../../components/ContentContainer';
import { SectionBar } from '../../components/SectionBar';
import { GangsMembersListScreen } from '../GangsMembersListScreen';
import { GangsListBar } from './GangsListBar';
import { InventorySelectionBar } from './InventorySelectionBar';
import { ItemTile } from './ItemTile/ItemTile';
import { Inventory } from './Inventory';
import { CONFIG, SkillsSlots } from './GangMemberScreen.const';
import { Container } from 'pixi.js';
import { CONFIG as ITEM_TILE_CONFIG } from './ItemTile/ItemTile.const';
import { InventoryScrollBar } from './InventoryScrollbar';
import { ProfileCard } from './ProfileCard';
import { ProfileToggleBar } from './ProfileToggleBar/ProfileToggleBar';
import { ItemLabel } from '../../components/ItemLabel';
import { isPointInRectangle } from '../../utils/shapes';
import { ItemCard } from '../Gunsmith/components/ItemCard';
import { GAME } from '../../config/game';
import { GangMemberInventoryData } from './GangMemberScreen.types';
import { ClothesType } from '../../modules/items/clothes/Clothes.types';
import { ClothesItems } from '../../modules/items/clothes/Clothes';

export class GangMemberScreen extends ContentContainer {
    private inventoryItemLabel: ItemLabel;
    private isInventoryItemLabelVisible: boolean = false;
    private inventoryItemLabelTimeout: ReturnType<typeof setTimeout>;
    private currentItemCard: ItemCard | null = null;
    private inventoryData: GangMemberInventoryData = {
        junk: [],
        gun: [],
        melee: [],
        supplies: [],
        modifications: [],
        clothes: [
            { id: '1', itemId: 'Cop_01_Set_Glasses', isEquipped: false, type: ClothesType.face },
            { id: '2', itemId: 'Corporate_01_Set_Glasses', isEquipped: false, type: ClothesType.face },
            { id: '3', itemId: 'Boots_01_basic_01', isEquipped: false, type: ClothesType.feet },
            { id: '4', itemId: 'Boots_01_old_01', isEquipped: false, type: ClothesType.feet },
            { id: '4', itemId: 'Helmet_12_rich_02', isEquipped: false, type: ClothesType.head },
            { id: '5', itemId: 'Helmet_12_rich_03', isEquipped: false, type: ClothesType.head },
            { id: '6', itemId: 'Corporate_01_Set_FormalShirt', isEquipped: false, type: ClothesType.innerTorso },
            { id: '7', itemId: 'Fixer_01_Set_TShirt', isEquipped: false, type: ClothesType.innerTorso },
            { id: '8', itemId: 'Cop_01_Set_Pants', isEquipped: false, type: ClothesType.legs },
            { id: '9', itemId: 'Corporate_01_Set_Pants', isEquipped: false, type: ClothesType.legs },
            { id: '10', itemId: 'Coat_01_basic_01', isEquipped: false, type: ClothesType.outerTorso },
            { id: '11', itemId: 'Coat_01_basic_02', isEquipped: true, type: ClothesType.outerTorso },
        ],
    };
    private inventorySlots = {
        [ClothesType.face]: new ItemTile({
            x: 0, y: 0, onCloseIconClick: () => {
            },
        }),
        [ClothesType.head]: new ItemTile({ x: 0, y: 0 }),
        [ClothesType.outerTorso]: new ItemTile({ x: 0, y: 0 }),
        [ClothesType.innerTorso]: new ItemTile({ x: 0, y: 0 }),
        [ClothesType.legs]: new ItemTile({ x: 0, y: 0 }),
        [ClothesType.feet]: new ItemTile({ x: 0, y: 0 }),
    };
    private inventory: Inventory;

    constructor() {
        super();
        this.addChild(this.createSectionBar());
        this.addChild(new GangsListBar());
        this.inventory = new Inventory({
            inventoryItems: this.inventoryData,
            x: CONFIG.INVENTORY_X, y: CONFIG.INVENTORY_Y,
            onInventoryItemHover: (_, item) => {
                clearTimeout(this.inventoryItemLabelTimeout);
                if (this.isInventoryItemLabelVisible && item == this.currentItemCard) return;
                this.currentItemCard = item;

                this.isInventoryItemLabelVisible = true;
                const { tx, ty } = item.worldTransform;
                this.showInventoryItemLabel(tx, ty, item.getItemId());
                this.addChild(this.inventoryItemLabel);
            },
            onInventoryItemPointerLeave: (e) => {
                const isItemLabelHovered = isPointInRectangle(
                    e.client.x,
                    e.client.y,
                    this.inventoryItemLabel.position.x,
                    this.inventoryItemLabel.position.y,
                    this.inventoryItemLabel.width,
                    this.inventoryItemLabel.height,
                );
                if (isItemLabelHovered) return;
                this.inventoryItemLabelTimeout = setTimeout(() => {
                    this.removeChild(this.inventoryItemLabel);
                    this.isInventoryItemLabelVisible = false;
                }, CONFIG.HIDE_INVENTORY_ITEM_LABEL_DELAY);
            },
            onClothCardActionBtnClick: (item, itemCard) => {
                const clothItem = ClothesItems.get(item.itemId);
                itemCard.setIsMarked(true);
                this.inventorySlots[item.type].addItemTexture(clothItem.getTexture('male'));
                this.inventorySlots[item.type].showCloseIcon(() => {
                    this.inventorySlots[item.type].removeItemTexture();
                    this.inventorySlots[item.type].removeCloseIcon();
                    itemCard.setIsMarked(false);
                });
            },
        });
        this.addChild(new InventorySelectionBar({
            x: CONFIG.INVENTORY_SELECTION_BAR_X,
            y: CONFIG.INVENTORY_SELECTION_BAR_Y,
            onChange: (inventorySection) => {
                this.inventory.changeInventoryList(inventorySection);
            },
        }));
        this.inventoryItemLabel = new ItemLabel({
            x: 0, y: 0,
        });
        this.addChild(this.inventory);
        this.addChild(new InventoryScrollBar({ x: CONFIG.INVENTORY_SCROLL_X, y: CONFIG.INVENTORY_SCROLL_Y }));
        this.addChild(new ProfileCard({ x: CONFIG.PROFILE_CARD_X, y: CONFIG.PROFILE_CARD_Y }));
        this.addChild(new ProfileToggleBar({ x: CONFIG.PROFILE_TOGGLE_BAR_X, y: CONFIG.PROFILE_TOGGLE_BAR_Y }));
        this.addChild(this.createInventorySlots());
        this.addChild(this.createSkillsSlots());
    }

    private showInventoryItemLabel(tx: number, ty: number, itemId: string) {
        const xOffset = -25;
        const baseX = (tx + xOffset) - this.inventoryItemLabel.width;
        let baseY = ty;

        const labelHeight = this.inventoryItemLabel.height;
        const windowHeight = GAME.WINDOW_HEIGHT;
        let yEnd = baseY + labelHeight;

        if (yEnd > windowHeight) {
            baseY -= yEnd - windowHeight;
        }
        this.inventoryItemLabel.changeItemData(itemId);
        this.inventoryItemLabel.position.set(baseX, baseY);
    }

    private createInventorySlots() {
        const container = new Container();
        container.position.set(CONFIG.INVENTORY_SLOTS_X, CONFIG.INVENTORY_SLOTS_Y);
        Object.values(this.inventorySlots).forEach((el, i) => {
            el.position.set(0, (i * ITEM_TILE_CONFIG.SIZE) + (i * CONFIG.INVENTORY_SLOTS_GAP));
            container.addChild(el);
        });

        return container;
    }

    private createSkillsSlots(): Container {
        const container = new Container();
        container.position.set(CONFIG.SKILLS_SLOTS_X, CONFIG.SKILLS_SLOTS_Y);
        SkillsSlots.forEach((_, i) => {
            container.addChild(new ItemTile({
                x: 0,
                y: (i * ITEM_TILE_CONFIG.SIZE) + (i * CONFIG.INVENTORY_SLOTS_GAP),
                label: i + 1,
            }));
        });
        return container;

    }

    private createSectionBar() {
        return new SectionBar({
            backButtonLabel: 'Go back',
            onBackButtonClick: () => {
                navigation.showScreen(GangsMembersListScreen);
            },
        });
    }
}