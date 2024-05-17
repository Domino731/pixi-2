import { Container, Graphics } from 'pixi.js';
import { ProfileCardOptions } from './ProfileCard.types';
import { CONFIG } from './ProfileCard.const';
import { ProfileFrame } from './components/ProfileFrame';
import { List } from '@pixi/ui';
import { AttributeRow } from './components/AttributeRow';
import { AttributesListTitle } from './components/AttributesListTitle';
import { ICONS } from '../../../components/Icon/Icon.const';
import { ProgresBar } from './components/ProgressBar';
import { PROGRESS_BAR_VARIANT } from './components/ProgressBar/ProgressBar.const';
import { StatsBar } from '../StatsBar';

export class ProfileCard extends Container {
    private readonly skillsListContainer: Container;
    private readonly statsListContainer: Container;

    constructor({ x, y }: ProfileCardOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createBackground());
        this.addChild(new ProfileFrame({ x: CONFIG.PROFILE_FRAME_X, y: CONFIG.PROFILE_FRAME_Y }));
        this.addChild(new AttributesListTitle(({
            title: 'Attributes',
            x: CONFIG.ATTRIBUTE_LIST_TITLE_X,
            y: CONFIG.ATTRIBUTE_LIST__TITLE_Y,
            width: CONFIG.ATTRIBUTE_ROW_WIDTH,
            isSharpOffset: true,
        })));
        this.addChild(new AttributesListTitle({
            title: 'Overview',
            x: CONFIG.OVERVIEW_TITLE_X,
            y: CONFIG.OVERVIEW_TITLE_Y,
            width: CONFIG.ATTRIBUTE_ROW_WIDTH,
            isSharpOffset: false,
        }));
        this.addChild(this.createAttributesList());
        this.addChild(this.createLevels());
        this.skillsListContainer = this.createSkillsList();
        this.statsListContainer = this.createStatsList();
        // this.addChild(this.skillsListContainer);
        this.addChild(this.statsListContainer);
        this.addChild(this.createStatsBar());
    }

    private createStatsBar() {
        const onStatsClick = () => {
            this.removeChild(this.skillsListContainer);
        };
        const onSkillsClick = () => {
            this.addChild(this.skillsListContainer);
        };

        return new StatsBar({ x: CONFIG.STATS_BAR_X, y: CONFIG.STATS_BAR_Y, onStatsClick, onSkillsClick });
    }

    private createLevels() {
        const list = new List({ elementsMargin: 10 });
        list.position.set(CONFIG.LEVELS_LIST_X, CONFIG.LEVELS_LIST_Y);
        list.type = 'vertical';
        list.addChild(new ProgresBar({
            width: CONFIG.ATTRIBUTE_ROW_WIDTH,
            variant: PROGRESS_BAR_VARIANT.LEVEL,
            progress: 50,
        }));
        list.addChild(new ProgresBar({
            width: CONFIG.ATTRIBUTE_ROW_WIDTH,
            variant: PROGRESS_BAR_VARIANT.STREET_LEVEL,
            progress: 10,
        }));
        return list;
    }

    private createSkillsList() {
        const skillsLeftColumn = [
            // body
            {
                name: 'Athetics',
                icon: ICONS.SKILL_ATHETICS,
                value: 3,
            },
            {
                name: 'Annihilation',
                icon: ICONS.SKILL_ANNIHILATION,
                value: 19,
            },
            {
                name: 'Street brawler',
                icon: ICONS.SKILL_STREET_BRAWLER,
                value: 7,
            },
            // reflexes
            {
                name: 'Handguns',
                icon: ICONS.SKILL_HANDGUNS,
                value: 4,
            },
            {
                name: 'blades',
                icon: ICONS.SKILL_BLADES,
                value: 13,
            },
            {
                name: 'Assault',
                icon: ICONS.SKILL_ASSAULT,
                value: 17,
            },
        ];
        const skillsRightColumn = [
            // cool
            {
                name: 'Stealth',
                icon: ICONS.SKILL_STEALTH,
                value: 1,
            },
            {
                name: 'Cold blood',
                icon: ICONS.SKILL_COLD_BLOOD,
                value: 20,
            },
            // Intelligence
            {
                name: 'Breach protocol',
                icon: ICONS.SKILL_BREACH_PROTOCOL,
                value: 11,
            },
            {
                name: 'Quickhacking',
                icon: ICONS.SKILL_QUICKHACKING,
                value: 12,
            },
            // Tech ability
            {
                name: 'Crafting',
                icon: ICONS.SKILL_CRAFTING,
                value: 8,
            },
            {
                name: 'Engineering',
                icon: ICONS.SKILL_ENGINEERING,
                value: 3,
            },
        ];
        const container = new List({ elementsMargin: 20 });
        const leftList = new List({ elementsMargin: 16 });
        const rightList = new List({ elementsMargin: 16 });
        container.addChild(leftList);
        container.addChild(rightList);
        container.position.set(CONFIG.SKILLS_CONTAINER_X, CONFIG.SKILLS_CONTAINER_Y);

        skillsLeftColumn.forEach(({ name, icon, value }) => {
            leftList.addChild(new AttributeRow({
                x: 0,
                y: 0,
                width: CONFIG.SKILL_ROW_WIDTH,
                attributeName: name,
                icon,
                count: value,
            }));
        });

        skillsRightColumn.forEach(({ name, icon, value }) => {
            rightList.addChild(new AttributeRow({
                x: 0,
                y: 0,
                width: CONFIG.SKILL_ROW_WIDTH,
                attributeName: name,
                icon,
                count: value,
            }));
        });
        return container;
    }

    private createStatsList() {
        const skillsLeftColumn = [
            // body
            {
                name: 'Health',
                value: 3,
            },
            {
                name: 'Stamina',
                value: 19,
            },
            {
                name: 'Amor',
                value: 7,
            },
            {
                name: 'Armor penetration',
                value: 4,
            },
            {
                name: 'Adrenaline',
                value: 13,
            },
            {
                name: 'Resistances',
                value: 17,
            },
            {
                name: 'Mitigation Chance',
                value: 12,
            },
        ];
        const skillsRightColumn = [
            {
                name: 'Mitigation Strength',
                value: 12,
            },
            {
                name: 'Crit Chance',
                value: 20,
            },
            {
                name: 'Crit Damage',
                value: 11,
            },
            {
                name: 'Cyberware Capacity',
                value: 12,
            },
            {
                name: 'Headshot Damage Multiplier',
                value: 12,
            },
            {
                name: 'Bonus Ricochet Damage',
                value: 8,
            },
            {
                name: 'Charge Damage Multiplier',
                value: 3,
            },
        ];

        const container = new List({ elementsMargin: 20 });
        const leftList = new List({ elementsMargin: 16 });
        const rightList = new List({ elementsMargin: 16 });
        container.addChild(leftList);
        container.addChild(rightList);
        container.position.set(CONFIG.SKILLS_CONTAINER_X, CONFIG.SKILLS_CONTAINER_Y - 40);

        skillsLeftColumn.forEach(({ name, value }) => {
            leftList.addChild(new AttributeRow({
                x: 0,
                y: 0,
                width: CONFIG.SKILL_ROW_WIDTH,
                attributeName: name,
                count: value,
            }));
        });

        skillsRightColumn.forEach(({ name, icon, value }) => {
            rightList.addChild(new AttributeRow({
                x: 0,
                y: 0,
                width: CONFIG.SKILL_ROW_WIDTH,
                attributeName: name,
                icon,
                count: value,
            }));
        });
        return container;
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

        const list = new List({ elementsMargin: 10 });
        list.position.set(CONFIG.ATTRIBUTES_LIST_X, CONFIG.ATTRIBUTES_LIST_Y + 44);
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