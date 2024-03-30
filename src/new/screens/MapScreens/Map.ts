import { Container } from 'pixi.js';
import { WholeMap } from './WholeMap/WholeMap';

export class CityMap extends Container {
    private wholeMap: WholeMap = new WholeMap();

    constructor() {
        super();
        this.addChild(this.wholeMap);
    }


}