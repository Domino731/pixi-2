import { GAME_COLORS } from '../../config/styles';
import { GAME } from '../../config/game';
import { TextStyleFontWeight } from 'pixi.js';

export const SECTION_BAR_CONFIG = {
    HEIGHT: 94,
    WIDTH: GAME.WINDOW_WIDTH,
    BACKGROUND: GAME_COLORS.black,
    BOTTOM_BORDER_HEIGHT: 2,
    BOTTOM_BORDER_COLOR: GAME_COLORS.red1,

    BACK_BTN_WIDTH: 200,
    BACK_BTN_HEIGHT: 50,
    BACK_BTN_SHARP_OFFSET: 25,
    BACK_BTN_X: 1,
    BACK_BTN_Y: 1,
    BACK_BTN_BACKGROUND: GAME_COLORS.black,
    BACK_BTN_LINE_COLOR: GAME_COLORS.red1,
    BACK_BTN_LINE_HEIGHT: 3,
    BACK_BTN_TEXT_COLOR: GAME_COLORS.red1,
    BACK_BTN_TEXT_SIZE: 24,
    BACK_BTN_TEXT_X: 34,
    BACK_BTN_TEXT_Y: 12,
    BACK_BTN_TEXT_BOLD: 'bold' as TextStyleFontWeight,
    BACK_BTN_TEXT_SPACING: 1,
};