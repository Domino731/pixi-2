import { GAME_COLORS } from '../../../config/styles';

const height = 1000;
const width = 800;

export const CONFIG = {
    WIDTH: width,
    HEIGHT: height,
    BACKGROUND: GAME_COLORS.black2,
    BORDER_COLOR: GAME_COLORS.red1,
    BORDER_WIDTH: 2,
    SHARP_OFFSET_PRIMARY: 30,
    PROFILE_FRAME_X: 16,
    PROFILE_FRAME_Y: 16,
    ATTRIBUTE_LIST_TITLE_X: Math.floor(width / 2) + 30,
    ATTRIBUTE_LIST__TITLE_Y: 16,
    ATTRIBUTE_ROW_WIDTH: 355,
    ATTRIBUTES_LIST_X: Math.floor(width / 2) + 30,
    ATTRIBUTES_LIST_Y: 42,
    OVERVIEW_TITLE_X: Math.floor(width / 2) + 30,
    OVERVIEW_TITLE_Y: 360,
    LEVELS_LIST_X: Math.floor(width / 2) + 30,
    LEVELS_LIST_Y: 420,
    SKILLS_CONTAINER_X: 46,
    SKILLS_CONTAINER_Y: Math.floor(height / 2) + 100,
    SKILL_ROW_WIDTH: Math.floor(width / 2) - 26,
    STATS_BAR_X: 30,
    STATS_BAR_Y: Math.floor(height / 2) + 30,
};

export const PROFILE_CARD_CONFIG = CONFIG;