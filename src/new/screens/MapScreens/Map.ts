import { Container } from 'pixi.js';
import { MapPanel } from './MapPanel/MapPanel';
import { Map2000 } from './Maps/2000/Map2000';

export class CityMap extends Container {
    private mapPanel: MapPanel;

    constructor() {
        super();
        this.mapPanel = new MapPanel();
        // this.addChild(new Map200());
        // this.addChild(new Map500());
        // this.addChild(new Map1000());
        this.addChild(new Map2000());
        this.addChild(this.mapPanel);


    }


}