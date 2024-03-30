import { DistrictMap, IDistrictEntity } from './DistrictMap';

const WATSON_ENTITIES: Array<IDistrictEntity> = [
    {
        name: 'Gun smith',
        onClick: () => console.log('gun shop'),
    },
];

export class WatsonDistrict extends DistrictMap {
    constructor() {
        super({ entities: WATSON_ENTITIES });
    }

}