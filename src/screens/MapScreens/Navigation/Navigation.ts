import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './Navigation.const';
import { NavigationButton } from './components/NavigationButton';
import { List } from '@pixi/ui';
import { NAVIGATION_BUTTONS_LIST } from './components/NavigationButton/NavigationButton.const';

export class Navigation extends Container {
    constructor() {
        super();
        this.position.set(CONFIG.POSITION_X, CONFIG.POSITION_Y);
        this.addChild(this.createBackground());
        // this.addChild(new NavigationButton());
    }

    private createBackground() {
        const x = 0;
        const y = 0;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const sharpOffset = CONFIG.SHARP_OFFSET;
        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        g.drawPolygon([
            x, y,
            x, y + height,
            x + width, y + height,

            x + width, y + sharpOffset,
            x + width - sharpOffset, y,
        ]);
        g.endFill();
        g.addChild(this.createButtonsList());
        return g;
    }

    private createButtonsList() {
        const list = new List({
            elementsMargin: CONFIG.BUTTONS_LIST_MARGIN,
            horPadding: CONFIG.BUTTONS_LIST_HOR_PADDING,
            vertPadding: CONFIG.BUTTONS_LIST_VER_PADDING,
        });
        NAVIGATION_BUTTONS_LIST.forEach((data) => {
            list.addChild(new NavigationButton(data));
        });
        return list;
    }
}