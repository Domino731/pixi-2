import {MapLocationItem} from "./Map.types";

export enum MAP_LOCATION_GROUP {
    Exploration = 'Exploration',
    Vendors = 'Vendors',
    Gigs = 'Gigs',
    NCPDScannerHustles = 'NCPDScannerHustles',
    OtherActivities = 'OtherActivities',
    Miscellany = "Miscellany"
}

export enum MAP_LOCATION_TYPE {
    // Exploration
    DropPoint = 'DropPoint',
    MetroStation = 'MetroStation',
    FastTravel = 'FastTravel',

    // Vendors
    BlackMarketVendor = "BlackMarketVendor",
    ClothingVendor = 'ClothingVendor',
    Fixer = 'Fixer',
    Food = 'Food',
    JukeVendor = 'JukeVendor',
    Medpoint = 'Medpoint',
    MeleeVendor = 'MeleeVendor',
    Netrunner = 'Netrunner',
    Ripperdoc = 'Ripperdoc',
    WeaponShop = 'WeaponShop',

    // GIGS
    AgentSaboteur = 'AgentSaboteur',
    GunForHide = 'GunForHire',
    PhantomLiberty = 'PhantomLiberty',
    SearchAndRecover = 'SearchAndRecover',
    SOSMercNeeded = 'SOSMercNeeded',
    SpecialDelivery = 'SpecialDelivery',
    Thievery = 'Thievery',

    // NCPD Scanner hustles
    Assault = 'Assault',
    OrganizedCrime = 'OrganizedCrime',
    HiddenGem = 'HiddenGem',
    ReportedCrime = 'ReportedCrime',

    // Other activities
    Airdrop = 'Airdrop',
    Cyberpsycho = 'Cyberpsycho',
    IncreasedCriminalActivity = 'TarotGraffiti',
    TarotGraffiti = 'TarotGraffiti',

    // Miscellany
    Apartment = 'Apartment',
    AutofixerTerminal = "AutofixerTerminal",
    Bar = 'Bar',
    Joytoy = "Joytoy",
    Landmark = "Landmark",
    RelicStation = 'RelicStation'
}

export const MAP_LOCATIONS: MapLocationItem[] = [
    {
        group: MAP_LOCATION_GROUP.Exploration,
        type: MAP_LOCATION_TYPE.DropPoint,
        name: "Drop Point"
    },
    {
        group: MAP_LOCATION_GROUP.Exploration,
        type: MAP_LOCATION_TYPE.MetroStation,
        name: "Metro Station"
    },
    {
        group: MAP_LOCATION_GROUP.Exploration,
        type: MAP_LOCATION_TYPE.FastTravel,
        name: "Fast Travel Point"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.BlackMarketVendor,
        name: "Black Market Vendor"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.ClothingVendor,
        name: "Clothing Vendor"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.Fixer,
        name: "Fixer"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.Food,
        name: "Food Vendor"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.JukeVendor,
        name: "Juke Vendor"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.Medpoint,
        name: "Medpoint"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.MeleeVendor,
        name: "Melee Vendor"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.Netrunner,
        name: "Netrunner"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.Ripperdoc,
        name: "Ripperdoc"
    },
    {
        group: MAP_LOCATION_GROUP.Vendors,
        type: MAP_LOCATION_TYPE.WeaponShop,
        name: "Weapon Shop"
    },
    {
        group: MAP_LOCATION_GROUP.Gigs,
        type: MAP_LOCATION_TYPE.AgentSaboteur,
        name: "Agent Saboteur Gig"
    },
    {
        group: MAP_LOCATION_GROUP.Gigs,
        type: MAP_LOCATION_TYPE.GunForHide,
        name: "Gun for Hire Gig"
    },
    {
        group: MAP_LOCATION_GROUP.Gigs,
        type: MAP_LOCATION_TYPE.PhantomLiberty,
        name: "Phantom Liberty Gig"
    },
    {
        group: MAP_LOCATION_GROUP.Gigs,
        type: MAP_LOCATION_TYPE.SearchAndRecover,
        name: "Search and Recover Gig"
    },
    {
        group: MAP_LOCATION_GROUP.Gigs,
        type: MAP_LOCATION_TYPE.SOSMercNeeded,
        name: "SOS Merc Needed Gig"
    },
    {
        group: MAP_LOCATION_GROUP.Gigs,
        type: MAP_LOCATION_TYPE.SpecialDelivery,
        name: "Special Delivery Gig"
    },
    {
        group: MAP_LOCATION_GROUP.Gigs,
        type: MAP_LOCATION_TYPE.Thievery,
        name: "Thievery Gig"
    },
    {
        group: MAP_LOCATION_GROUP.NCPDScannerHustles,
        type: MAP_LOCATION_TYPE.Assault,
        name: "Assault in Progress"
    },
    {
        group: MAP_LOCATION_GROUP.NCPDScannerHustles,
        type: MAP_LOCATION_TYPE.OrganizedCrime,
        name: "Organized Crime Activity"
    },
    {
        group: MAP_LOCATION_GROUP.NCPDScannerHustles,
        type: MAP_LOCATION_TYPE.HiddenGem,
        name: "Hidden Gem"
    },
    {
        group: MAP_LOCATION_GROUP.NCPDScannerHustles,
        type: MAP_LOCATION_TYPE.ReportedCrime,
        name: "Reported Crime"
    },
    {
        group: MAP_LOCATION_GROUP.OtherActivities,
        type: MAP_LOCATION_TYPE.Airdrop,
        name: "Airdrop Location"
    },
    {
        group: MAP_LOCATION_GROUP.OtherActivities,
        type: MAP_LOCATION_TYPE.Cyberpsycho,
        name: "Cyberpsycho Incident"
    },
    {
        group: MAP_LOCATION_GROUP.OtherActivities,
        type: MAP_LOCATION_TYPE.IncreasedCriminalActivity,
        name: "Increased Criminal Activity"
    },
    {
        group: MAP_LOCATION_GROUP.OtherActivities,
        type: MAP_LOCATION_TYPE.TarotGraffiti,
        name: "Tarot Graffiti"
    },
    {
        group: MAP_LOCATION_GROUP.Miscellany,
        type: MAP_LOCATION_TYPE.Apartment,
        name: "Apartment"
    },
    {
        group: MAP_LOCATION_GROUP.Miscellany,
        type: MAP_LOCATION_TYPE.AutofixerTerminal,
        name: "Autofixer Terminal"
    },
    {
        group: MAP_LOCATION_GROUP.Miscellany,
        type: MAP_LOCATION_TYPE.Bar,
        name: "Bar"
    },
    {
        group: MAP_LOCATION_GROUP.Miscellany,
        type: MAP_LOCATION_TYPE.Joytoy,
        name: "Joytoy"
    },
    {
        group: MAP_LOCATION_GROUP.Miscellany,
        type: MAP_LOCATION_TYPE.Landmark,
        name: "Landmark"
    },
    {
        group: MAP_LOCATION_GROUP.Miscellany,
        type: MAP_LOCATION_TYPE.RelicStation,
        name: "Relic Station"
    }
];