import { Container } from 'pixi.js';
import { MapPanel } from './MapPanel/MapPanel';
import { Map500 } from './Maps/500/Map500';
import { Map1000 } from './Maps/1000/Map1000';

export class CityMap extends Container {
    private mapPanel: MapPanel;

    constructor() {
        super();
        this.mapPanel = new MapPanel();
        // this.addChild(new Map200());
        // this.addChild(new Map500());
        this.addChild(new Map1000());
        this.addChild(this.mapPanel);


    }


}