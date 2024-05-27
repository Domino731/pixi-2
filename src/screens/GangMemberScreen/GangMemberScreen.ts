import { navigation } from '../../main';
import { ContentContainer } from '../../components/ContentContainer';
import { SectionBar } from '../../components/SectionBar';
import { GangsMembersListScreen } from '../GangsMembersListScreen';
import { GangsListBar } from './GangsListBar';
import { InventorySelectionBar } from './InventorySelectionBar';
import { ItemTile } from './ItemTile/ItemTile';
import { Inventory } from './Inventory';
import { CONFIG, InventorySlots, SkillsSlots } from './GangMemberScreen.const';
import { Container } from 'pixi.js';
import { CONFIG as ITEM_TILE_CONFIG } from './ItemTile/ItemTile.const';
import { InventoryScrollBar } from './InventoryScrollbar';
import { ProfileCard } from './ProfileCard';
import { ProfileToggleBar } from './ProfileToggleBar/ProfileToggleBar';
import { ItemLabel } from '../../components/ItemLabel';
import { isPointInRectangle } from '../../utils/shapes';
import { ItemCard } from '../Gunsmith/components/ItemCard';
import { windows } from 'rimraf';
import { GAME } from '../../config/game';

export class GangMemberScreen extends ContentContainer {
    private inventoryItemLabel: ItemLabel;
    private isInventoryItemLabelVisible: boolean = false;
    private inventoryItemLabelTimeout: ReturnType<typeof setTimeout>;
    private currentItemCard: ItemCard | null = null;

    constructor() {
        super();
        this.addChild(this.createSectionBar());
        this.addChild(new GangsListBar());

        this.addChild(new InventorySelectionBar({
            x: CONFIG.INVENTORY_SELECTION_BAR_X,
            y: CONFIG.INVENTORY_SELECTION_BAR_Y,
        }));
        this.inventoryItemLabel = new ItemLabel({
            x: 0, y: 0, onPointerLeave: () => {
                this.inventoryItemLabelTimeout = setTimeout(() => {
                    this.removeChild(this.inventoryItemLabel);
                    this.isInventoryItemLabelVisible = false;
                }, CONFIG.HIDE_INVENTORY_ITEM_LABEL_DELAY);
            },
            onPointerOver: () => {
                clearTimeout(this.inventoryItemLabelTimeout);
            },
        });
        this.addChild(new Inventory({
            x: CONFIG.INVENTORY_X, y: CONFIG.INVENTORY_Y,
            onInventoryItemHover: (_, item) => {
                clearTimeout(this.inventoryItemLabelTimeout);
                if (this.isInventoryItemLabelVisible && item == this.currentItemCard) return;
                this.currentItemCard = item;

                this.isInventoryItemLabelVisible = true;
                const { tx, ty } = item.worldTransform;
                this.showInventoryItemLabel(tx, ty);
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
        }));
        this.addChild(new InventoryScrollBar({ x: CONFIG.INVENTORY_SCROLL_X, y: CONFIG.INVENTORY_SCROLL_Y }));
        this.addChild(new ProfileCard({ x: CONFIG.PROFILE_CARD_X, y: CONFIG.PROFILE_CARD_Y }));
        this.addChild(new ProfileToggleBar({ x: CONFIG.PROFILE_TOGGLE_BAR_X, y: CONFIG.PROFILE_TOGGLE_BAR_Y }));
        this.addChild(this.createInventorySlots());
        this.addChild(this.createSkillsSlots());
    }

    private showInventoryItemLabel(tx: number, ty: number) {
        const baseX = (tx + 30) - this.inventoryItemLabel.width;
        let baseY = ty;

        const labelHeight = this.inventoryItemLabel.height;
        const windowHeight = GAME.WINDOW_HEIGHT;
        let yEnd = baseY + labelHeight;

        if (yEnd > windowHeight) {
            baseY -= yEnd - windowHeight;
        }
        console.log(baseY);
        console.log(yEnd);
        console.log(windowHeight);
        this.inventoryItemLabel.position.set(baseX, baseY);
    }

    private createInventorySlots() {
        const container = new Container();
        container.position.set(CONFIG.INVENTORY_SLOTS_X, CONFIG.INVENTORY_SLOTS_Y);
        InventorySlots.forEach((_, i) => {
            container.addChild(new ItemTile({
                x: 0,
                y: (i * ITEM_TILE_CONFIG.SIZE) + (i * CONFIG.INVENTORY_SLOTS_GAP),
            }));
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