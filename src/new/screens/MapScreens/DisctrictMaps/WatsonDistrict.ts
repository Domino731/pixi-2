import { DistrictMap, IDistrictEntity } from './DistrictMap';
import { navigation } from '../../../../main';
import { GunsmithScreen } from '../../Gunsmith/GunsmithScreen';
import { FixersScreen } from '../../Fixers/FixersScreen';
import { PharmacyScreen } from '../../Pharmacy';
import { RipperdocScreen } from '../../Ripperdoc';
import { MeleeShopScreen } from '../../MeleeShopScreen';
import { NetrunnerScreen } from '../../Netrunner';
import { ScrapbookerScreen } from '../../Scrapbooker';

const WATSON_ENTITIES: Array<IDistrictEntity> = [
    {
        name: 'Gun shop',
        onClick: () => {
            navigation.showScreen(GunsmithScreen);
        },
    },
    {
        name: 'Fixer',
        onClick: () => {
            navigation.showScreen(FixersScreen);
        },
    },
    {
        name: 'Pharmacy',
        onClick: () => {
            navigation.showScreen(PharmacyScreen);
        },
    },
    {
        name: 'Ripperdoc',
        onClick: () => {
            navigation.showScreen(RipperdocScreen);
        },
    },
    {
        name: 'Melee shop',
        onClick: () => {
            navigation.showScreen(MeleeShopScreen);
        },
    },
    {
        name: 'Netrunner',
        onClick: () => {
            navigation.showScreen(NetrunnerScreen);
        },
    },
    {
        name: 'scrapbooker',
        onClick: () => {
            navigation.showScreen(ScrapbookerScreen);
        },
    },
];

export class WatsonDistrict extends DistrictMap {
    constructor() {
        super({ entities: WATSON_ENTITIES });
    }

}