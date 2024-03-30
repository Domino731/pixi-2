import { DistrictMap, IDistrictEntity } from './DistrictMap';

const WATSON_ENTITIES: Array<IDistrictEntity> = [
    {
        name: 'Gun shop',
        onClick: () => console.log('gun shop'),
    },
    {
        name: 'Fixer',
        onClick: () => console.log('Fixer'),
    },
    {
        name: 'Pharmacy',
        onClick: () => console.log('Pharmacy'),
    },
    {
        name: 'Ripperdoc',
        onClick: () => console.log('ripperdoc'),
    },
    {
        name: 'Melee shop',
        onClick: () => console.log('Melee shop'),
    },
    {
        name: 'Netrunner',
        onClick: () => console.log('Netrunner'),
    },
    {
        name: 'scrapbooker',
        onClick: () => console.log('scrapbooker'),
    },
];

export class WatsonDistrict extends DistrictMap {
    constructor() {
        super({ entities: WATSON_ENTITIES });
    }

}