import { CONFIG as INVENTORY_CONFIG } from './Inventory/Inventory.const';
import { CONFIG as INVENTORY_SELECTION_BAR_CONFIG } from './InventorySelectionBar/InventorySelectionBar.const';
import { CONFIG as ITEM_TILE_CONFIG } from './ItemTile/ItemTile.const';
import { GAME } from '../../../configs/game';

const horizontalPadding = 40;
const verticalPadding = 40;

export const CONFIG = {
    HORIZONTAL_PADDING: horizontalPadding,

    INVENTORY_X: GAME.WINDOW_WIDTH - INVENTORY_CONFIG.WIDTH - horizontalPadding,
    INVENTORY_Y: GAME.WINDOW_HEIGHT - INVENTORY_CONFIG.HEIGHT - verticalPadding,

    INVENTORY_SELECTION_BAR_X: GAME.WINDOW_WIDTH - 526 - horizontalPadding,
    INVENTORY_SELECTION_BAR_Y: GAME.WINDOW_HEIGHT - INVENTORY_CONFIG.HEIGHT - INVENTORY_SELECTION_BAR_CONFIG.HEIGHT - verticalPadding - 24,

    INVENTORY_SLOTS_X: GAME.WINDOW_WIDTH - INVENTORY_CONFIG.WIDTH - horizontalPadding - ITEM_TILE_CONFIG.SIZE - 24,
    INVENTORY_SLOTS_Y: GAME.WINDOW_HEIGHT - INVENTORY_CONFIG.HEIGHT - verticalPadding + INVENTORY_CONFIG.SHARP_OFFSET_LEFT,
    INVENTORY_SLOTS_GAP: 24,
};

export const InventorySlots = [
    1, 2, 3, 4, 5, 6, 7, 8,
];