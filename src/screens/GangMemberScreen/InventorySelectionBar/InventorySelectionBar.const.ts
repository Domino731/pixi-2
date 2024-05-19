import { GAME_COLORS } from '../../../config/styles';

export const CONFIG = {
    X: 1000,
    y: 500,
    BACKGROUND: GAME_COLORS.black2,
    BORDER_COLOR: GAME_COLORS.red1,
    BORDER_WIDTH: 2,
    SHARP_OFFSET: 16,
    HORIZONTAL_PADDING: 16,
    VERTICAL_PADDING: 16,
    HEIGHT: 120,
    BUTTON_WIDTH: 64,
    BUTTON_HEIGHT: 90,
    BUTTONS_GAP: 22,
    GAP_LINE_COLOR: GAME_COLORS.red1,
    BUTTON_ICON_SIZE: 46,
};

export const INVENTORY_SECTIONS = [
    { icon: 'icons/map/junk' },
    { icon: 'icons/map/gun-vendor' },
    { icon: 'icons/map/melee-vendor' },
    { icon: 'icons/map/clothes' },
    { icon: 'icons/map/food' },
    { icon: 'icons/map/ripperdoc' },
];