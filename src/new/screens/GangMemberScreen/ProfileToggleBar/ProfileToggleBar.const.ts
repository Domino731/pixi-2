import { GAME_COLORS } from '../../../../const/styles';
import { CONFIG as PROFILE_CARD_CONFIG } from '../ProfileCard/ProfileCard.const';

const paddingHorizontal = 0;
const paddingVertical = 0;

export const CONFIG = {
    BACKGROUND: GAME_COLORS.black2,
    BORDER_WIDTH: 2,
    BORDER_COLOR: GAME_COLORS.red1,
    WIDTH: PROFILE_CARD_CONFIG.WIDTH - 30,
    HEIGHT: 48,
    SHARP_OFFSET: 16,
    TEXT_OFFSET_Y: 6,
    TEXT_FILL: 'white',
    TEXT_SIZE: 30,
    TEXT_WEIGHT: 'bolder',
    TEXT_LETTER_SPACING: 2,
    PADDING_VERTICAL: paddingVertical,
    PADDING_HORIZONTAL: paddingHorizontal,

    BUTTON_WIDTH: 60,
    BUTTON_HEIGHT: 48,
    BUTTON_BORDER_COLOR: GAME_COLORS.red1,
    BUTTON_BORDER_WIDTH: 2,
    BUTTON_BACKGROUND: GAME_COLORS.black2,
    BUTTON_SHARP_OFFSET: 16,
};