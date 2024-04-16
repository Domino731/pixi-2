import { Container } from 'pixi.js';
import { WholeMap } from './WholeMap/WholeMap';
import { MapPanel } from './MapPanel/MapPanel';

export class CityMap extends Container {
    private wholeMap: WholeMap = new WholeMap();
    private mapPanel: MapPanel;

    constructor() {
        super();
        this.mapPanel = new MapPanel();
        this.addChild(this.mapPanel);
        // this.addChild(this.wholeMap);
        
    }


}