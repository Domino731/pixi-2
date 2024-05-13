import { Container, Graphics, Text } from 'pixi.js';
import { ProfileToggleBarOptions } from './ProfileToggleBar.types';
import { CONFIG } from './ProfileToggleBar.const';
import { Button } from '@pixi/ui';

export class ProfileToggleBar extends Container {
    constructor({ x, y }: ProfileToggleBarOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createBackground());
        this.addChild(this.createText());
        this.addChild(this.createButton('left'));
        this.addChild(this.createButton('right'));
    }

    private createText() {
        const text = new Text('Johnny', {
            fill: CONFIG.TEXT_FILL,
            fontWeight: CONFIG.TEXT_WEIGHT as 'bolder',
            fontSize: CONFIG.TEXT_SIZE,
            letterSpacing: CONFIG.TEXT_LETTER_SPACING,
        });
        const y = CONFIG.TEXT_OFFSET_Y;
        const x = Math.floor(CONFIG.WIDTH / 2) - Math.floor(text.width / 2);
        text.position.set(x, y);
        return text;
    }

    private createButton(orientation: 'left' | 'right') {
        const g = new Graphics();
        const x = orientation === 'left' ? 0 : CONFIG.WIDTH - CONFIG.BUTTON_WIDTH;
        const y = 0;
        const width = CONFIG.BUTTON_WIDTH;
        const height = CONFIG.BUTTON_HEIGHT;
        const sharpOffset = CONFIG.BUTTON_SHARP_OFFSET;
        g.position.set(CONFIG.PADDING_HORIZONTAL, CONFIG.PADDING_VERTICAL);
        g.beginFill(CONFIG.BUTTON_BACKGROUND);
        g.lineStyle(CONFIG.BUTTON_BORDER_WIDTH, CONFIG.BUTTON_BORDER_COLOR);
        if (orientation === 'left') {
            g.drawPolygon(
                x + sharpOffset, y,
                x, y + sharpOffset,
                x, y + height,
                x + width, y + height,
                x + width, y,
            );
        } else {
            g.drawPolygon(
                x, y,
                x, y + height,
                x + width, y + height,
                x + width, y + sharpOffset,
                x + width - sharpOffset, y,
            );
        }

        g.endFill();
        const btn = new Button(g);
        return btn.view;
    }

    private createBackground() {
        const g = new Graphics();
        const x = 0;
        const y = 0;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const sharpOffset = CONFIG.SHARP_OFFSET;

        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x + sharpOffset, y,
            x, y + sharpOffset,
            x, y + height,
            x + width, y + height,
            x + width, y + sharpOffset,
            x + width - sharpOffset, y,
        );
        g.endFill();
        return g;
    }

}