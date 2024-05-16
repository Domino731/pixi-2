import { Container, Graphics } from 'pixi.js';
import { CONFIG } from './StatsBar.const';
import { StatsBarOptions } from './StatsBar.types';
import { Button } from '@pixi/ui';
import { Text } from 'pixi.js';

export class StatsBar extends Container {
    private readonly inactiveStatsBtn: Button;
    private readonly inactiveSkillsBtn: Button;
    private readonly activeStatsBtn: Button;
    private readonly activeSkillsBtn: Button;

    constructor({ x, y }: StatsBarOptions) {
        super();
        this.position.set(x, y);
        this.inactiveStatsBtn = this.createButton(false, false);
        this.inactiveSkillsBtn = this.createButton(true, false);
        this.activeStatsBtn = this.createButton(false, true);
        this.activeSkillsBtn = this.createButton(true, true);
        this.addChild(this.inactiveStatsBtn.view);
        this.addChild(this.activeSkillsBtn.view);
        this.addEvents();
    }

    private addEvents() {
        this.inactiveSkillsBtn.onPress.connect(() => {
            this.removeChildren();
            this.addChild(this.inactiveStatsBtn.view);
            this.addChild(this.activeSkillsBtn.view);
        });

        this.inactiveStatsBtn.onPress.connect(() => {
            this.removeChildren();
            this.addChild(this.inactiveSkillsBtn.view);
            this.addChild(this.activeStatsBtn.view);


        });
    }

    private createButton(isSecondVariant: boolean, isActive: boolean) {

        const y = 0;
        const width = CONFIG.BUTTON_WIDTH - CONFIG.PADDING;
        const x = isSecondVariant ? (CONFIG.PADDING + width) : CONFIG.PADDING;
        const height = CONFIG.HEIGHT;
        const sharpOffset = CONFIG.BUTTON_SHARP_OFFSET;
        const g = new Graphics();


        g.beginFill(isActive ? CONFIG.BACKGROUND_ACTIVE : CONFIG.BACKGROUND_INACTIVE);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        if (isSecondVariant) {
            g.drawPolygon(
                x, y,
                x, y + height,
                x + width, y + height,
                x + width, y + sharpOffset,
                x + width - sharpOffset, y,
            );
        } else {
            g.drawPolygon(
                x, y,
                x, y + height,
                x + width, y + height,
                x + width, y,
            );
        }

        g.endFill();


        const btn = new Button(g);
        if (isActive) {
            btn.view.eventMode = 'none';
        }
        let textLabel = 'Stats';

        if (isSecondVariant) {
            textLabel = 'Skills';
        }
        const text = new Text(textLabel, {
            fill: isActive ? CONFIG.FONT_COLOR_ACTIVE : CONFIG.FONT_COLOR_INACTIVE,
            fontSize: CONFIG.FONT_SIZE,
            letterSpacing: CONFIG.LETTER_SPACING,
            fontWeight: CONFIG.FONT_WEIGHT,
        });
        const textX = x + (Math.floor(g.width / 2) - Math.floor(text.width / 2));
        const textY = y + (Math.floor(g.height / 2) - Math.floor(text.height / 2));
        text.position.set(textX, textY);
        btn.view.addChild(text);

        return btn;
    }
}