import {GAME_COLORS} from '../../../../config/styles';

export enum MAP_ICON_VARIANTS {
    VENDOR = 'VENDOR',
    FIXER = 'FIXER'
}

export enum MAP_ICON {
    DROP_POINT = "DROP_POINT",
    FAST_TRAVEL = "FAST_TRAVEL",
    METRO_STATION = "METRO_STATION",
    BLACK_MARKET_VENDOR = "BLACK_MARKET_VENDOR",
    CLOTHING = "CLOTHING",
    FIXER = "FIXER",
    FOOD = "FOOD",
    JUNK_VENDOR = "JUNK_VENDOR",
    MEDPOINT = "MEDPOINT",
    MELEE_VENDOR = "MELEE_VENDOR",
    NETRUNNER = "NETRUNNER",
    RIPPERDOC = "RIPPERDOC",
    WEAPON_SHOP = "WEAPON_SHOP",
    AGENT_SABOTEUR = "AGENT_SABOTEUR",
    GUN_FOR_HIRE = "GUN_FOR_HIRE",
    MAIN_JOB = "MAIN_JOB",
    PHANTOM_LIBERTY = "PHANTOM_LIBERTY",
    SEARCH_RECOVER = "SEARCH_RECOVER",
    SIDE_JOB = "SIDE_JOB",
    SOS_MERC_NEEDED = "SOS_MERC_NEEDED",
    SPECIAL_DELIVERY = "SPECIAL_DELIVERY",
    THIEVERY = "THIEVERY",
    ASSAULT = "ASSAULT",
    HIDDEN_GEM = "HIDDEN_GEM",
    ORGANIZED_CRIME = "ORGANIZED_CRIME",
    REPORTED_CRIME = "REPORTED_CRIME",
    AIRDROP = "AIRDROP",
    CYBERPSYCHO = "CYBERPSYCHO",
    INCREASED_CRIMINAL_ACTIVITY = "INCREASED_CRIMINAL_ACTIVITY",
    TARROT_CARD = "TARROT_CARD",
    APARTMENT = "APARTMENT",
    AUTOFIXER_TERMINAL = "AUTOFIXER_TERMINAL",
    BAR = "BAR",
    DOGTOWN_GATE = "DOGTOWN_GATE",
    JOYTOY = "JOYTOY",
    LANDMARK = "LANDMARK",
    RELIC_STATION = "RELIC_STATION"
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

export const MAP_ICONS_CONFIG = {
    [MAP_ICON.DROP_POINT]: {
        width: 66,
        height: 88,
        x: 0,
        y: 0,
        pixelRatio: 2
    },
    [MAP_ICON.FAST_TRAVEL]: {
        width: 66,
        height: 88,
        x: 0,
        y: 88,
        pixelRatio: 2
    },
    [MAP_ICON.METRO_STATION]: {
        width: 66,
        height: 88,
        x: 0,
        y: 176,
        pixelRatio: 2
    },
    [MAP_ICON.BLACK_MARKET_VENDOR]: {
        width: 66,
        height: 88,
        x: 0,
        y: 264,
        pixelRatio: 2
    },
    [MAP_ICON.CLOTHING]: {
        width: 66,
        height: 88,
        x: 0,
        y: 352,
        pixelRatio: 2
    },
    [MAP_ICON.FIXER]: {
        width: 66,
        height: 88,
        x: 0,
        y: 440,
        pixelRatio: 2
    },
    [MAP_ICON.FOOD]: {
        width: 66,
        height: 88,
        x: 0,
        y: 528,
        pixelRatio: 2
    },
    [MAP_ICON.JUNK_VENDOR]: {
        width: 66,
        height: 88,
        x: 0,
        y: 616,
        pixelRatio: 2
    },
    [MAP_ICON.MEDPOINT]: {
        width: 66,
        height: 88,
        x: 0,
        y: 704,
        pixelRatio: 2
    },
    [MAP_ICON.MELEE_VENDOR]: {
        width: 66,
        height: 88,
        x: 0,
        y: 792,
        pixelRatio: 2
    },
    [MAP_ICON.NETRUNNER]: {
        width: 66,
        height: 88,
        x: 0,
        y: 880,
        pixelRatio: 2
    },
    [MAP_ICON.RIPPERDOC]: {
        width: 66,
        height: 88,
        x: 0,
        y: 968,
        pixelRatio: 2
    },
    [MAP_ICON.WEAPON_SHOP]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1056,
        pixelRatio: 2
    },
    [MAP_ICON.AGENT_SABOTEUR]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1144,
        pixelRatio: 2
    },
    [MAP_ICON.GUN_FOR_HIRE]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1232,
        pixelRatio: 2
    },
    [MAP_ICON.MAIN_JOB]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1320,
        pixelRatio: 2
    },
    [MAP_ICON.PHANTOM_LIBERTY]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1408,
        pixelRatio: 2
    },
    [MAP_ICON.SEARCH_RECOVER]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1496,
        pixelRatio: 2
    },
    [MAP_ICON.SIDE_JOB]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1584,
        pixelRatio: 2
    },
    [MAP_ICON.SOS_MERC_NEEDED]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1672,
        pixelRatio: 2
    },
    [MAP_ICON.SPECIAL_DELIVERY]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1760,
        pixelRatio: 2
    },
    [MAP_ICON.THIEVERY]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1848,
        pixelRatio: 2
    },
    [MAP_ICON.ASSAULT]: {
        width: 66,
        height: 88,
        x: 0,
        y: 1936,
        pixelRatio: 2
    },
    [MAP_ICON.HIDDEN_GEM]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2024,
        pixelRatio: 2
    },
    [MAP_ICON.ORGANIZED_CRIME]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2112,
        pixelRatio: 2
    },
    [MAP_ICON.REPORTED_CRIME]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2200,
        pixelRatio: 2
    },
    [MAP_ICON.AIRDROP]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2288,
        pixelRatio: 2
    },
    [MAP_ICON.CYBERPSYCHO]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2376,
        pixelRatio: 2
    },
    [MAP_ICON.INCREASED_CRIMINAL_ACTIVITY]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2464,
        pixelRatio: 2
    },
    [MAP_ICON.TARROT_CARD]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2552,
        pixelRatio: 2
    },
    [MAP_ICON.APARTMENT]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2640,
        pixelRatio: 2
    },
    [MAP_ICON.AUTOFIXER_TERMINAL]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2728,
        pixelRatio: 2
    },
    [MAP_ICON.BAR]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2816,
        pixelRatio: 2
    },
    [MAP_ICON.DOGTOWN_GATE]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2904,
        pixelRatio: 2
    },
    [MAP_ICON.JOYTOY]: {
        width: 66,
        height: 88,
        x: 0,
        y: 2992,
        pixelRatio: 2
    },
    [MAP_ICON.LANDMARK]: {
        width: 66,
        height: 88,
        x: 0,
        y: 3080,
        pixelRatio: 2
    },
    [MAP_ICON.RELIC_STATION]: {
        width: 66,
        height: 88,
        x: 0,
        y: 3168,
        pixelRatio: 2
    }
};
