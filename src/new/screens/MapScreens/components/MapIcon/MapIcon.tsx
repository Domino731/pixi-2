import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { MapIconOptions, MapIconUnion, MapIconVariantsUnion } from './MapIcon.types';
import { MAP_ICON, MAP_ICON_VARIANTS, mapIconColors } from './MapIcon.const';
import { Button } from '@pixi/ui';

export class MapIcon extends Container {
    private readonly variant: MapIconVariantsUnion;
    private readonly iconName: MapIconUnion;

    constructor({ x, y, variant = MAP_ICON_VARIANTS.VENDOR, name = MAP_ICON.GUN_VENDOR }: MapIconOptions) {
        super();
        this.variant = variant;
        this.iconName = name;
        this.position.set(x, y);
        this.setGraphics();
    }

    private getIcon() {
        switch (this.iconName) {
            case MAP_ICON.NETRUNNER:
                return new Sprite(Texture.from('icons/map/netrunner'));
            case MAP_ICON.MELEE_VENDOR:
                return new Sprite(Texture.from('icons/map/melee-vendor'));
            case MAP_ICON.JUNK:
                return new Sprite(Texture.from('icons/map/junk'));
            case MAP_ICON.MED_POINT:
                return new Sprite(Texture.from('icons/map/med-point'));
            case MAP_ICON.FIXER:
                return new Sprite(Texture.from('icons/map/fixer'));
            case MAP_ICON.CLOTHES:
                return new Sprite(Texture.from('icons/map/clothes'));
            case MAP_ICON.GUN_VENDOR:
                return new Sprite(Texture.from('icons/map/gun-vendor'));
            case MAP_ICON.RIPPERDOC:
                return new Sprite(Texture.from('icons/map/ripperdoc'));
            default:
                console.error(`MapIcon.getIcon(): no match for ${this.iconName}`);
                return new Sprite(Texture.from('icons/map/gun-vendor'));
        }
    }

    private setGraphics() {
        const x = 0;
        const y = 0;
        const width = 28;
        const height = 28;
        const padding = 4;

        const g = new Graphics();
        const icon = this.getIcon();
        icon.width = width - padding;
        icon.height = height - padding;
        g.beginFill(mapIconColors[this.variant].bg);
        g.lineStyle(1, mapIconColors[this.variant].border);
        g.drawPolygon([
            x, y,
            x, y + height,

            x + (width / 2), y + width + 10,

            x + width, y + height,
            x + width, y,
        ]);
        g.endFill();
        icon.position.set(2, 2);
        g.addChild(icon);

        const btn = new Button(g);
        btn.onPress.connect(() => {
            alert('MAP ICON CLICK');
        });

        this.addChild(btn.view);
    }
}