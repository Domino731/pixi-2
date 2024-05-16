import { PROFILE_CARD_CONFIG } from '../ProfileCard/ProfileCard.const';
import { GAME_COLORS } from '../../../../const/styles';

export const CONFIG = {
    WIDTH: PROFILE_CARD_CONFIG.WIDTH,
    HEIGHT: 60,
    BACKGROUND_INACTIVE: GAME_COLORS.black2,
    BACKGROUND_ACTIVE: GAME_COLORS.red1,
    BORDER_WIDTH: 2,
    BORDER_COLOR: GAME_COLORS.red1,
    PADDING: 16,
    BUTTON_WIDTH: Math.floor(PROFILE_CARD_CONFIG.WIDTH / 2),
    BUTTON_SHARP_OFFSET: 26,
    FONT_COLOR_ACTIVE: GAME_COLORS.black2,
    FONT_COLOR_INACTIVE: GAME_COLORS.red1,
    FONT_SIZE: 34,
    LETTER_SPACING: 1,
    FONT_WEIGHT: 'bolder' as 'bolder',
};