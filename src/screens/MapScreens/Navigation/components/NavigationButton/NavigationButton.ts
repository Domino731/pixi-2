import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './NavigationButton.const';
import { Button } from '@pixi/ui';
import { NavigationButtonOptions } from './NavigationButton.types';

export class NavigationButton extends Container {
    constructor({ label, onClick }: NavigationButtonOptions) {
        super();
        this.addChild(this.createButton(label, onClick));
    }

    private createButton(label: string, onClick: () => void) {
        const size = CONFIG.SIZE;
        const x = 0;
        const y = 0;
        const sharpOffset = CONFIG.SHARP_OFFSET;

        const g = new Graphics();
        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_HEIGHT, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x + sharpOffset, y,
            x, y + sharpOffset,

            x, y + size - sharpOffset,
            x + sharpOffset, y + size,

            x + size - sharpOffset, y + size,
            x + size, y + size - sharpOffset,

            x + size, y + sharpOffset,
            x + size - sharpOffset, y,
        );
        g.endFill();
        const btn = new Button(g);
        btn.onPress.connect(onClick);
        return btn.view;
    }
}