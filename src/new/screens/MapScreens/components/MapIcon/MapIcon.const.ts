import { GAME_COLORS } from '../../../../../const/styles';

export enum MAP_ICON_VARIANTS {
    VENDOR = 'VENDOR',
    FIXER = 'FIXER'
}

export enum MAP_ICON {
    GUN_VENDOR = 'GUN_VENDOR',
    CLOTHES = 'CLOTHES',
    FIXER = 'FIXER',
    MED_POINT = 'MED_POINT',
    JUNK = 'JUNK',
    MELEE_VENDOR = 'MELEE_VENDOR',
    NETRUNNER = 'NETRUNNER',
    RIPPERDOC = 'RIPPERDOC',
    FOOD = 'FOOD'
}

export const mapIconColors = {
    [MAP_ICON_VARIANTS.VENDOR]: {
        border: GAME_COLORS.red1,
        bg: GAME_COLORS.black2,
    },
    [MAP_ICON_VARIANTS.FIXER]: {
        border: GAME_COLORS.lightBlue,
        bg: GAME_COLORS.black2,
    },
};