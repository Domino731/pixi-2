import {Container, Graphics} from "pixi.js";
import {MapLocations} from "./MapLocations";
import {GAME_COLORS} from "../../../../config/styles";

const CONFIG = {
    width: 300,
    height: 500,
    position_x: 0,
    position_y: 0
}

export class MapDebug extends Container {
    private readonly mapLocations: MapLocations;

    constructor() {
        super();
        this.position.set(CONFIG.position_x, CONFIG.position_y)
        this.mapLocations = new MapLocations();
        this.addContainer();
        this.addChild(this.mapLocations)
    }

    private addContainer() {
        const g = new Graphics();
        g.beginFill(GAME_COLORS.black);
        g.drawRect(0,0, CONFIG.width, CONFIG.height);
        g.endFill();
        this.addChild(g);
    }
}