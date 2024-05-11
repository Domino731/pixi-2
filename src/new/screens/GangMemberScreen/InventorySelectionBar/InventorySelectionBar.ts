import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { CONFIG, INVENTORY_SECTIONS } from './InventorySelectionBar.const';
import { Button } from '@pixi/ui';

export class InventorySelectionBar extends Container {
    private icons: Sprite[];

    constructor() {
        super();
        this.icons = [];
        this.position.set(300, 300);
        this.addChild(this.createBar());
        this.addChild(this.createButtonsList());
    }

    private createGapLine(x: number, y: number) {
        const g = new Graphics();
        g.beginFill(CONFIG.GAP_LINE_COLOR);
        g.drawRect(x, y, 2, CONFIG.BUTTON_HEIGHT);
        g.endFill();
        return g;
    }

    private createButton(x: number, y: number, iconSrc: string) {
        const g = new Graphics();
        const width = CONFIG.BUTTON_WIDTH;
        const height = CONFIG.HEIGHT - (2 * CONFIG.VERTICAL_PADDING);
        const iconPositionX = Math.floor(width / 2) - Math.floor(CONFIG.BUTTON_ICON_SIZE / 2);
        const iconPositionY = Math.floor(height / 2) - Math.floor(CONFIG.BUTTON_ICON_SIZE / 2);
        const icon = new Sprite(Texture.from(iconSrc));
        this.icons.push(icon);
        g.position.set(x, y);
        g.beginFill(CONFIG.BACKGROUND);
        g.drawRect(0, 0, width, height);
        g.endFill();
        icon.width = CONFIG.BUTTON_ICON_SIZE;
        icon.height = CONFIG.BUTTON_ICON_SIZE;
        icon.position.set(iconPositionX, iconPositionY);
        g.addChild(icon);

        const btn = new Button(g);
        btn.onPress.connect(() => {
            this.icons.forEach(el => el.tint = 'white');
            icon.tint = 0xFFFF00;
        });
        return btn.view;
    }

    private createButtonsList() {
        const container = new Container();
        INVENTORY_SECTIONS.forEach((el, i) => {
            const buttonX = i * CONFIG.BUTTON_WIDTH + (i * CONFIG.BUTTONS_GAP) + CONFIG.HORIZONTAL_PADDING;
            this.addChild(this.createButton(buttonX, CONFIG.VERTICAL_PADDING, el.icon));
            if (i === INVENTORY_SECTIONS.length - 1) return;
            const lineX = buttonX + CONFIG.BUTTON_WIDTH + Math.floor(CONFIG.BUTTONS_GAP / 2);
            this.addChild(this.createGapLine(lineX, CONFIG.VERTICAL_PADDING));
        });
        return container;
    }

    private createBar() {
        const x = 0;
        const y = 0;
        const width = (INVENTORY_SECTIONS.length * CONFIG.BUTTONS_GAP) + (INVENTORY_SECTIONS.length * CONFIG.BUTTON_WIDTH) + (CONFIG.HORIZONTAL_PADDING * 2) - CONFIG.BUTTONS_GAP;
        const height = CONFIG.HEIGHT;
        const sharpOffset = CONFIG.SHARP_OFFSET;
        
        const g = new Graphics();
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