import { Container } from 'pixi.js';
import { MapPanel } from './MapPanel/MapPanel';
import { Map2000 } from './Maps/2000/Map2000';
import { Map500 } from './Maps/500/Map500';
import { Map1000 } from './Maps/1000/Map1000';
import { Map200 } from './Maps/200/map200';
import { Map4000 } from './Maps/4000/Map4000';
import { Navigation } from './Navigation';

export class CityMap extends Container {
    private mapPanel: MapPanel;
    private navigation: Navigation;

    private maps = {
        large: new Map4000(),
        big: new Map2000(),
        medium: new Map1000(),
        small: new Map500(),
        extraSmall: new Map200(),
    };
    private currentMapIndex: 'extraSmall' | 'small' | 'medium' | 'big' | 'large' = 'large';
    private currentMap = this.maps[this.currentMapIndex];

    constructor() {
        super();
        this.mapPanel = new MapPanel(this);
        this.navigation = new Navigation();
        this.addChild(this.currentMap);
        this.addChild(this.mapPanel);
        this.addChild(this.navigation);
    }

    public zoomIn() {
        const mapIndex = this.getChildIndex(this.currentMap);
        this.removeChildAt(mapIndex);
        switch (this.currentMapIndex) {
            case 'extraSmall':
                this.currentMap = this.maps.small;
                this.currentMapIndex = 'small';
                break;
            case 'small':
                this.currentMap = this.maps.medium;
                this.currentMapIndex = 'medium';
                break;
            case 'medium':
                this.currentMap = this.maps.big;
                this.currentMapIndex = 'big';
                break;
            case 'big':
                this.currentMap = this.maps.large;
                this.currentMapIndex = 'large';
                break;
            default:
                console.log('Maximum zoom accomplished');
                break;
        }
        if (!this.currentMap) return;
        this.addChildAt(this.currentMap, mapIndex);
    }

    public zoomOut() {
        const mapIndex = this.getChildIndex(this.currentMap);
        this.removeChildAt(mapIndex);
        switch (this.currentMapIndex) {
            case 'large':
                this.currentMap = this.maps.big;
                this.currentMapIndex = 'big';
                break;
            case 'big':
                this.currentMap = this.maps.medium;
                this.currentMapIndex = 'medium';
                break;
            case 'medium':
                this.currentMap = this.maps.small;
                this.currentMapIndex = 'small';
                break;
            case 'small':
                this.currentMap = this.maps.extraSmall;
                this.currentMapIndex = 'extraSmall';
                break;
            default:
                console.log('Minimum zoom accomplished');
                break;
        }
        if (!this.currentMap) return;
        this.addChildAt(this.currentMap, mapIndex);
    }
}