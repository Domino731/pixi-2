import {Container, Graphics, Rectangle, Sprite, Text, Texture} from 'pixi.js';
import {MapIconOptions, MapIconUnion, MapIconVariantsUnion} from './MapIcon.types';
import {MAP_ICON, MAP_ICON_VARIANTS, MAP_ICONS_CONFIG, mapIconColors} from './MapIcon.const';
import {Button} from '@pixi/ui';
import {createAppTexture} from "../../../../main";
import {GAME_COLORS} from "../../../../config/styles";

const tooltipHeight = 26;
const tooltipSharpOffset = 8;
const tooltipPaddingHorizontal = 10;

const iconWidth = 68;
const iconHeight = 89;

export class MapIcon extends Container {
    private readonly variant: MapIconVariantsUnion;
    private readonly iconName: MapIconUnion;
    private readonly tooltip: Graphics;
    private readonly label: string;

    constructor({x, y, variant = MAP_ICON_VARIANTS.VENDOR, name = MAP_ICON.ASSAULT, label}: MapIconOptions) {
        super();
        this.variant = variant;
        this.iconName = name;
        this.label = label;
        this.tooltip = this.createTooltip();
        this.position.set(x, y);
        this.setGraphics();
    }

    private getIcon() {
        const x = 0;
        const y = MAP_ICONS_CONFIG[this.iconName].y
        const width = iconWidth;
        const height = iconHeight;
        const baseTexture = Texture.from('icons/map/netrunner');
        const texture = new Texture(baseTexture, new Rectangle(x, y, width, height));
        const sprite = new Sprite(texture);
        return sprite;
    }

    private createTooltip() {
        const text = new Text(this.label, {
            fontSize: 16,
            fill: 'white',
        });
        text.position.set(tooltipPaddingHorizontal, 3);

        const x = 0;
        const y = 0;
        const tooltipWidth = text.width + tooltipPaddingHorizontal * 2;

        const tooltip = new Graphics();
        tooltip.position.set(0, tooltipHeight * -1 - 3);
        tooltip.beginFill(mapIconColors[this.variant].bg);
        tooltip.lineStyle(1, mapIconColors[this.variant].border);
        tooltip.drawPolygon([
            x, y + tooltipSharpOffset,

            x, y + tooltipHeight,
            x + tooltipWidth - tooltipSharpOffset, y + tooltipHeight,
            x + tooltipWidth, y + tooltipHeight - tooltipSharpOffset,

            x + tooltipWidth, y,
            x + tooltipSharpOffset, y,
        ]);
        tooltip.endFill();
        tooltip.addChild(text);

        return tooltip;
    }

    private getIconGraphics() {
        const g = new Graphics();
        const x = 36;
        const y = 4;
        g.position.set(-35, -4)
        g.beginFill(...GAME_COLORS.transparent);
        const icon = this.getIcon();
        const texture2 = createAppTexture(icon);
        g.beginTextureFill({texture: texture2})
        g.drawPolygon([
            x, y,

            x + (iconWidth / 2) - 2, y - 32,
            x + (iconWidth / 2) - 2, y - 90,

            x - (iconWidth / 2), y - 90,
            x - (iconWidth / 2), y - 32,
            // 60, 60
        ]);
        g.endFill();
        return g;
    }

    private setGraphics() {
        const g = new Graphics();
        const x = 0;
        const y = 0;
        g.position.set(0, 0)
        g.beginFill(...GAME_COLORS.transparent);
        g.drawPolygon([
            x, y,

            x + (iconWidth / 2) - 2, y - 32,
            x + (iconWidth / 2) - 2, y - 90,

            x - (iconWidth / 2), y - 90,
            x - (iconWidth / 2), y - 32,
        ]);
        g.addChild(this.getIconGraphics())
        g.endFill();

        g.scale.set(0.3, 0.3)
        const btn = new Button(g);

        btn.onPress.connect(() => {
            alert('MAP ICON CLICK');
        });

        btn.onOut.connect(() => {
            // TODO: tooltip
            // const index = btn.view.getChildIndex(this.tooltip);
            // btn.view.removeChildAt(index);
        });

        btn.onHover.connect(() => {
            // btn.view.addChild(this.tooltip);
        });

        this.addChild(btn.view);
    }
}