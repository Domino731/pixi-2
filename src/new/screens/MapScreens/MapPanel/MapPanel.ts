import { Container } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { GAME_COLORS } from '../../../../config/styles';
import { Button } from '@pixi/ui';
import { CityMap } from '../Map';

const PANEL_WIDTH = 500;
const PANEL_HEIGHT = 200;
const PANEL_BG_COLOR = GAME_COLORS.yellow;
const POSITION_X = 2060;
const POSITION_Y = 1079;
const PANEL_SHARP_OFFSET = 30;

export class MapPanel extends Container {
    private readonly map: CityMap;

    constructor(map: CityMap) {
        super();
        this.map = map;
        this.position.set(POSITION_X, POSITION_Y);
        this.addGraphics();
        this.setTopButtons();
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

    private setTopButtons() {
        const container = new Container();
        const g1 = new Graphics();
        g1.beginFill('black');
        g1.drawRect(20, 20, 40, 40);
        g1.endFill();
        const btn1 = new Button(g1);
        btn1.onPress.connect(() => {
            this.map.zoomIn();
        });

        const g2 = new Graphics();
        g2.beginFill('black');
        g2.drawRect(100, 20, 40, 40);
        g2.endFill();
        const btn2 = new Button(g2);
        btn2.onPress.connect(() => {
            this.map.zoomOut();
        });

        container.addChild(btn1.view);
        container.addChild(btn2.view);
        this.addChild(container);
    }
}