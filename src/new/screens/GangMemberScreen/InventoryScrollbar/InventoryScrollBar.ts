import { Container, Graphics } from 'pixi.js';
import { InventoryScrollBarOptions } from './InventoryScrollBar.types';
import { CONFIG } from './InventoryScrollBar.const';

export class InventoryScrollBar extends Container {
    constructor({ x, y }: InventoryScrollBarOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createBackground());
    }

    private createBackground() {
        const g = new Graphics();
        const x = 0;
        const y = 0;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;

        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawRect(x, y, width, height);
        g.endFill();

        return g;
    }
}