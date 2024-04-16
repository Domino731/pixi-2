import { Container } from 'pixi.js';
import { Graphics } from '@pixi/graphics';

const PANEL_WIDTH = 500;
const PANEL_HEIGHT = 200;
const PANEL_BG_COLOR = 'black';
const POSITION_X = 2060;
const POSITION_Y = 1079;
const PANEL_SHARP_OFFSET = 30;

export class MapPanel extends Container {
    constructor() {
        super();
        this.position.set(POSITION_X, POSITION_Y);
        this.addGraphics();
    }

    private addGraphics() {
        const g = new Graphics();
        const x = 0;
        const y = 0;

        g.beginFill(PANEL_BG_COLOR);
        g.drawPolygon([
            x, y + PANEL_SHARP_OFFSET,

            x, y + PANEL_HEIGHT,
            x + PANEL_WIDTH, y + PANEL_HEIGHT,
            x + PANEL_WIDTH, y,
            x + PANEL_SHARP_OFFSET, y,
        ]);
        g.endFill();
        this.addChild(g);
    }
}