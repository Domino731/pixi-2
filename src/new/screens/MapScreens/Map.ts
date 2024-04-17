import { Container } from 'pixi.js';
import { MapPanel } from './MapPanel/MapPanel';
import { Map200 } from './Maps/200/map200';
import { Map500 } from './Maps/500/Map500';

export class CityMap extends Container {
    private mapPanel: MapPanel;

    constructor() {
        super();
        this.mapPanel = new MapPanel();
        // this.addChild(new Map200());
        this.addChild(new Map500());
        this.addChild(this.mapPanel);


    }


}