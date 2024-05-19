import { GAME_COLORS } from '../../../../../config/styles';
import { PROFILE_CARD_CONFIG } from '../../ProfileCard.const';

export const CONFIG = {
    BACKGROUND: GAME_COLORS.black2,
    BORDER_WIDTH: 2,
    BORDER_COLOR: GAME_COLORS.red1,
    WIDTH: Math.floor(PROFILE_CARD_CONFIG.WIDTH / 2),
    HEIGHT: Math.floor(PROFILE_CARD_CONFIG.HEIGHT / 2),
    SHARP_OFFSET: 30,
};

export const PROFILE_FRAME_CONFIG = CONFIG;