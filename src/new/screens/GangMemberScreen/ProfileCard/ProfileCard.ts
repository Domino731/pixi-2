import { Container, Graphics } from 'pixi.js';
import { ProfileCardOptions } from './ProfileCard.types';
import { CONFIG } from './ProfileCard.const';
import { ProfileFrame } from './components/ProfileFrame';
import { List } from '@pixi/ui';
import { AttributeRow } from './components/AttributeRow';
import { AttributesListTitle } from './components/AttributesListTitle';
import { ICONS } from '../../../components/Icon/Icon.const';

export class ProfileCard extends Container {
    constructor({ x, y }: ProfileCardOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createBackground());
        this.addChild(new ProfileFrame({ x: CONFIG.PROFILE_FRAME_X, y: CONFIG.PROFILE_FRAME_Y }));
        this.addChild(new AttributesListTitle(({
            x: CONFIG.ATTRIBUTE_LIST_TITLE_X,
            y: CONFIG.ATTRIBUTE_LIST__TITLE_Y,
            width: CONFIG.ATTRIBUTE_ROW_WIDTH,
        })));
        this.addChild(this.createAttributesList());
    }

    private createAttributesList() {
        const attributes = [
            {
                name: 'Reflexes',
                icon: ICONS.ATTRIBUTE_REFLEXES,
                count: 1,
            },
            {
                name: 'Body',
                icon: ICONS.ATTRIBUTE_BODY,
                count: 11,
            },
            {
                name: 'Intelligence',
                icon: ICONS.ATTRIBUTE_INTELLIGENCE,
                count: 9,
            },
            {
                name: 'Cool',
                icon: ICONS.ATTRIBUTE_COOL,
                count: 20,
            },
            {
                name: 'Technical ability',
                icon: ICONS.ATTRIBUTE_TECHNICAL_ABILITY,
                count: 18,
            },

        ];

        const list = new List({ elementsMargin: 16 });
        list.position.set(CONFIG.ATTRIBUTES_LIST_X, CONFIG.ATTRIBUTES_LIST_Y + 40);
        list.type = 'vertical';
        list.width = 0;
        attributes.forEach(({ name, icon, count }) => {
            list.addChild(new AttributeRow({
                x: 0,
                y: 0,
                width: CONFIG.ATTRIBUTE_ROW_WIDTH,
                attributeName: name,
                icon,
                count,
            }));
        });

        return list;
    }

    private createBackground(): Graphics {
        const g = new Graphics();
        const x = 0;
        const y = 0;
        const width = CONFIG.WIDTH;
        const height = CONFIG.HEIGHT;
        const sharpOffsetPrimary = CONFIG.SHARP_OFFSET_PRIMARY;
        const halfHeight = Math.floor(height / 2);

        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x, y,

            x, y + halfHeight,
            x + sharpOffsetPrimary, y + halfHeight + sharpOffsetPrimary,

            x + sharpOffsetPrimary, y + height,

            x + width + sharpOffsetPrimary, y + height,
            x + width + sharpOffsetPrimary, y + sharpOffsetPrimary + height - halfHeight,
            x + width, y + height - halfHeight,

            x + width, y + sharpOffsetPrimary,
            x + width - sharpOffsetPrimary, y,
        );
        g.endFill();

        return g;
    }
}