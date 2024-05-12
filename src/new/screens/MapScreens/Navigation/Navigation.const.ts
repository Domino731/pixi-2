import { GAME_COLORS } from '../../../../const/styles';
import { GAME } from '../../../../configs/game';

export const CONFIG = {
    POSITION_X: 0,
    // Always subtract navigation's height from window's height
    POSITION_Y: GAME.WINDOW_HEIGHT - 400,
    WIDTH: 180,
    HEIGHT: 400,
    BACKGROUND: GAME_COLORS.black,
    SHARP_OFFSET: 40,
    BUTTONS_LIST_MARGIN: 14,
    BUTTONS_LIST_HOR_PADDING: 18,
    BUTTONS_LIST_VER_PADDING: 50,
};