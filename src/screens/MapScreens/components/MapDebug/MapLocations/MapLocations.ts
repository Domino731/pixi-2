import {Container, Graphics} from "pixi.js";
import {List} from "@pixi/ui";
import {MapIcon} from "../../MapIcon/MapIcon";

export class MapLocations extends Container {
    constructor() {
        super();
        this.position.set(0, 0);
        this.createList();
    }

    private createList() {
        const mapIcon = new MapIcon();

        const list = new List({
            children: [
                // new Graphics().rect(0, 0, 50, 50).fill(0x000000),
                // new Graphics().rect(0, 0, 50, 50).fill(0xFFFFFF),
            ],
        });

        // list.addChild(new Graphics().rect(0, 0, 50, 50)).fill(0x000000);
        this.addChild(list)
    }
}