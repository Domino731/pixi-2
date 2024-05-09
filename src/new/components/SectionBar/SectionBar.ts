import { Container, Graphics, Text } from 'pixi.js';
import { SECTION_BAR_CONFIG } from './SectionBar.const';
import { Button } from '@pixi/ui';
import { SectionBarOptions } from './SectionBar.types';

export class SectionBar extends Container {
    constructor({ onBackButtonClick, backButtonLabel }: SectionBarOptions) {
        super();
        this.addChild(this.createBackground());
        // this.addChild(this.createBottomBorder());
        this.addChild(this.createBackButton(onBackButtonClick, backButtonLabel));
    }

    private createBackground() {
        const g = new Graphics();
        g.beginFill(SECTION_BAR_CONFIG.BACKGROUND);
        g.drawRect(0, 0, SECTION_BAR_CONFIG.WIDTH, SECTION_BAR_CONFIG.HEIGHT);
        g.endFill();
        return g;
    }

    private createBottomBorder() {
        const g = new Graphics();
        g.beginFill(SECTION_BAR_CONFIG.BOTTOM_BORDER_COLOR);
        g.drawRect(0, SECTION_BAR_CONFIG.HEIGHT - SECTION_BAR_CONFIG.BOTTOM_BORDER_HEIGHT, SECTION_BAR_CONFIG.WIDTH, SECTION_BAR_CONFIG.BOTTOM_BORDER_HEIGHT);
        g.endFill();
        return g;
    }

    private createBackButton(onClick: () => void, label: string) {


        const g = new Graphics();
        const x = SECTION_BAR_CONFIG.BACK_BTN_X;
        const y = SECTION_BAR_CONFIG.BACK_BTN_Y;
        const width = SECTION_BAR_CONFIG.BACK_BTN_WIDTH;
        const height = SECTION_BAR_CONFIG.BACK_BTN_HEIGHT;
        const sharpOffset = SECTION_BAR_CONFIG.BACK_BTN_SHARP_OFFSET;
        const text = new Text(label.toUpperCase(), {
            fill: SECTION_BAR_CONFIG.BACK_BTN_TEXT_COLOR,
            fontSize: SECTION_BAR_CONFIG.BACK_BTN_TEXT_SIZE,
            fontWeight: SECTION_BAR_CONFIG.BACK_BTN_TEXT_BOLD,
            letterSpacing: SECTION_BAR_CONFIG.BACK_BTN_TEXT_SPACING,
        });
        text.position.set(x + SECTION_BAR_CONFIG.BACK_BTN_TEXT_X, y + SECTION_BAR_CONFIG.BACK_BTN_TEXT_Y);


        g.beginFill(SECTION_BAR_CONFIG.BACK_BTN_BACKGROUND);
        g.lineStyle(SECTION_BAR_CONFIG.BACK_BTN_LINE_HEIGHT, SECTION_BAR_CONFIG.BACK_BTN_LINE_COLOR);
        g.drawPolygon(
            x, y,
            x, y + height,
            x + width - sharpOffset, y + height,
            x + width, y + height - sharpOffset,
            x+ width, y
        );
        g.endFill();


        g.addChild(text);
        const btn = new Button(g);
        btn.onPress.connect(() => {
            onClick();
        });
        return btn.view;
    }
}