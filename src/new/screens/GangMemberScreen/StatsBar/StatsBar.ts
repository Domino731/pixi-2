import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './StatsBar.const';
import { StatsBarOptions } from './StatsBar.types';
import { List } from '@pixi/ui';
import { Icon } from '../../../components/Icon';
import { ICONS } from '../../../components/Icon/Icon.const';

export class StatsBar extends Container {
    constructor({ x, y }: StatsBarOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createBackground());
        this.addChild(this.createList());
    }

    private createList() {
        const list = new List();
        // list.addChild(new Icon({name: ICONS.ATTRIBUTE_TECHNICAL_ABILITY}));

        const container = new Container();
        container.addChild(new Icon({ name: ICONS.STAT_STAMINA, width: 50, height: 50 }));
        list.addChild(container);


        return list;
    }

    private createBackground() {
        const x = 0;
        const y = 0;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const g = new Graphics();

        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawRect(x, y, width, height);
        g.endFill();

        return g;
    }
}