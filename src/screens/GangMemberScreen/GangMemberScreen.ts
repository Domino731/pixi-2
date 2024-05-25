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

export class GangMemberScreen extends ContentContainer {
    constructor() {
        super();
        this.addChild(this.createSectionBar());
        this.addChild(new GangsListBar());

        this.addChild(new InventorySelectionBar({
            x: CONFIG.INVENTORY_SELECTION_BAR_X,
            y: CONFIG.INVENTORY_SELECTION_BAR_Y,
        }));
        this.addChild(new Inventory({ x: CONFIG.INVENTORY_X, y: CONFIG.INVENTORY_Y }));
        this.addChild(new InventoryScrollBar({ x: CONFIG.INVENTORY_SCROLL_X, y: CONFIG.INVENTORY_SCROLL_Y }));
        this.addChild(new ProfileCard({ x: CONFIG.PROFILE_CARD_X, y: CONFIG.PROFILE_CARD_Y }));
        this.addChild(new ProfileToggleBar({ x: CONFIG.PROFILE_TOGGLE_BAR_X, y: CONFIG.PROFILE_TOGGLE_BAR_Y }));
        this.addChild(this.createInventorySlots());
        this.addChild(this.createSkillsSlots());
        this.addChild(new ItemLabel({ x: 1000, y: 100 }));
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