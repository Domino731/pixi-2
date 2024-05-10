import { Container, Graphics } from "pixi.js";
import { ItemTileOptions } from "./ItemTile.types";
import { CONFIG } from "./ItemTile.const";

export class ItemTile extends Container {
    constructor({x,y}: ItemTileOptions) {
        super();
        this.addChild(this.createTile(x,y))
    }

    private createTile(x: number, y: number) {
        const size = CONFIG.SIZE;
        const sharpOffset = CONFIG.SHARP_OFFSET;
        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x + sharpOffset, y,
            x, y + sharpOffset,

            x, y + size - sharpOffset,
            x + sharpOffset, y + size,

            x + size - sharpOffset, y + size,
            x + size, y + size - sharpOffset,
            
            x + size, y + sharpOffset,
            x + size - sharpOffset, y
        )
        g.endFill();
        return g;
    }
}