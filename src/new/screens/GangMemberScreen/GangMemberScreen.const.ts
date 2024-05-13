import { CONFIG as INVENTORY_CONFIG } from './Inventory/Inventory.const';
import { CONFIG as INVENTORY_SELECTION_BAR_CONFIG } from './InventorySelectionBar/InventorySelectionBar.const';
import { CONFIG as ITEM_TILE_CONFIG } from './ItemTile/ItemTile.const';
import { CONFIG as INVENTORY_SCROLL_CONFIG } from './InventoryScrollbar/InventoryScrollBar.const';
import { GAME } from '../../../configs/game';
import { PROFILE_CARD_CONFIG } from './ProfileCard';
import { PROFILE_TOGGLE_BAR_CONFIG } from './ProfileToggleBar';

const horizontalPadding = 40;
const verticalPadding = 40;

export const CONFIG = {
    HORIZONTAL_PADDING: horizontalPadding,

    INVENTORY_X: GAME.WINDOW_WIDTH - (INVENTORY_SCROLL_CONFIG.WIDTH + 24) - INVENTORY_CONFIG.WIDTH - horizontalPadding,
    INVENTORY_Y: GAME.WINDOW_HEIGHT - INVENTORY_CONFIG.HEIGHT - verticalPadding,

    INVENTORY_SELECTION_BAR_X: GAME.WINDOW_WIDTH - (INVENTORY_SCROLL_CONFIG.WIDTH + 24) - 526 - horizontalPadding,
    INVENTORY_SELECTION_BAR_Y: GAME.WINDOW_HEIGHT - INVENTORY_CONFIG.HEIGHT - INVENTORY_SELECTION_BAR_CONFIG.HEIGHT - verticalPadding - 24,

    INVENTORY_SLOTS_X: GAME.WINDOW_WIDTH - (INVENTORY_SCROLL_CONFIG.WIDTH + 24) - INVENTORY_CONFIG.WIDTH - horizontalPadding - ITEM_TILE_CONFIG.SIZE - 24,
    INVENTORY_SLOTS_Y: GAME.WINDOW_HEIGHT - INVENTORY_CONFIG.HEIGHT - verticalPadding + INVENTORY_CONFIG.SHARP_OFFSET_LEFT,
    INVENTORY_SLOTS_GAP: 24,

    INVENTORY_SCROLL_X: GAME.WINDOW_WIDTH - horizontalPadding - INVENTORY_SCROLL_CONFIG.WIDTH,
    INVENTORY_SCROLL_Y: GAME.WINDOW_HEIGHT - INVENTORY_CONFIG.HEIGHT - verticalPadding,

    PROFILE_CARD_X: horizontalPadding,
    PROFILE_CARD_Y: GAME.WINDOW_HEIGHT - PROFILE_CARD_CONFIG.HEIGHT - verticalPadding,

    SKILLS_SLOTS_X: horizontalPadding + PROFILE_CARD_CONFIG.WIDTH + 24,
    SKILLS_SLOTS_Y: GAME.WINDOW_HEIGHT - PROFILE_CARD_CONFIG.HEIGHT - verticalPadding + PROFILE_CARD_CONFIG.SHARP_OFFSET_PRIMARY,

    PROFILE_TOGGLE_BAR_X: horizontalPadding,
    PROFILE_TOGGLE_BAR_Y: GAME.WINDOW_HEIGHT - PROFILE_CARD_CONFIG.HEIGHT - verticalPadding - PROFILE_TOGGLE_BAR_CONFIG.HEIGHT - 24,
};

export const InventorySlots = [
    1, 2, 3, 4, 5, 6, 7, 8,
];

export const SkillsSlots = [1, 2, 3, 4];