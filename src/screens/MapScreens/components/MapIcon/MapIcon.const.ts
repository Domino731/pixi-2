import {GAME_COLORS} from '../../../../config/styles';

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
    FOOD = 'FOOD',
    PLACE = 'PLACE',
    TARROT = 'TARROT',
    FAST_TRAVEL = "FAST_TRAVEL",
    CHEST = 'CHEST',
    METRO = 'METRO',
    // havoc - rozboj w toku, change name to assault later
    HAVOC = 'HAVOC',
    ASSAULT = 'ASSAULT',
    THIEF = 'THIEF',
    PSYCHO = "PSYCHO",
    SOS_MERC_NEEDED = 'SOS_MERC_NEEDED',
    BAR = 'BAR',
    APARTMENT = 'APARTMENT',
    DROP_POINT = "DROP_POINT",
    REPORTED_CRIME = "REPORTED_CRIME",
    AUTOFIXER_TERMINAL = "AUTOFIXER_TERMINAL",
    AgentSaboteur = "AgentSaboteur",
    ORGANIZED_CRIME = 'ORGANIZED_CRIME',
    LAND_MARK = 'LAND_MARK'
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