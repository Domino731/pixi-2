import { Container, Graphics, Sprite, Text, Texture } from 'pixi.js';
import { ItemLabelOptions } from './ItemLabel.types';
import { List } from '@pixi/ui';
import { CONFIG } from './ItemLabel.const';
import { getColorByItemRarity } from '../../config/types';
import { GAME_COLORS } from '../../config/styles';

export class ItemLabel extends Container {
    constructor({ x, y }: ItemLabelOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createItemsList());
    }

    private createItemsList() {
        const g = new Graphics();
        const list = new List({ elementsMargin: 30 });
        list.addChild(this.createTitleSection());
        list.addChild(this.createDamageSection());
        list.addChild(this.createAdditionalInfo());
        list.addChild(this.createAttachmentsList());
        list.addChild(this.createItemTypeSection());
        list.addChild(this.createItemDescription());
        list.addChild(this.createStatsSection());
        list.addChild(this.createItemGraphicSection());
        list.type = 'vertical';
        list.position.set(CONFIG.PADDING, CONFIG.PADDING);
        const x = 0;
        const y = 0;
        const width = list.width + (2 * CONFIG.PADDING);
        const height = list.height + (2 * CONFIG.PADDING);

        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x, y,
            x, y + height,
            x + width, y + height,
            x + width, y,
        );
        g.endFill();

        g.addChild(list);
        return g;
    }

    private createItemGraphicSection() {
        const container = new Container();
        const g = new Graphics();
        g.beginFill(GAME_COLORS.red1);
        g.drawRect(0, 0, CONFIG.SECTION_WIDTH, 40);
        g.endFill();
        container.addChild(g);
        return container;
    }

    private createStatsSection() {
        const container = new Container();
        const createStat = (value: string, label: string) => {
            const container = new Container();
            const valueText = new Text(value, {
                fontSize: 20,
                fill: GAME_COLORS.lightBlue,
            });
            container.addChild(valueText);

            const labelText = new Text(label, {
                fontSize: 20,
                fill: GAME_COLORS.lightBlue,
            });
            labelText.position.set(valueText.width + 4, Math.floor(valueText.height / 2) - Math.floor(labelText.height / 2));
            container.addChild(labelText);
            return container;
        };

        const list = new List({ type: 'vertical', elementsMargin: 5 });
        list.addChild(createStat('+7-8', 'Electrical Damage'));
        list.addChild(createStat('+1.39%', 'Crit chance'));
        list.addChild(createStat('+2%', 'Crit damage'));
        list.addChild(createStat('0.85', 'Headshot damage multiplier'));
        container.addChild(list);

        const g = new Graphics();
        g.beginFill(CONFIG.SECTION_BORDER_COLOR);
        g.drawRect(0, list.y + list.height, CONFIG.SECTION_WIDTH, CONFIG.SECTION_BORDER_WIDTH);
        g.endFill();
        container.addChild(g);


        return container;
    }

    private createItemDescription() {
        const container = new Container();
        const descriptionText = new Text('A genius among shotguns', {
            fontSize: 20,
            fill: GAME_COLORS.red1,
        });
        container.addChild(descriptionText);

        const list = new List({ elementsMargin: CONFIG.SECTION_WIDTH / 2 });

        const weightText = new Text('5', {
            fontSize: 22,
            fill: GAME_COLORS.red1,
        });
        const priceText = new Text('5', {
            fontSize: 22,
            fill: GAME_COLORS.yellow,
        });
        list.position.set(0, descriptionText.height + 10);
        list.type = 'horizontal';
        list.addChild(weightText);
        list.addChild(priceText);
        container.addChild(list);

        return container;
    }

    private createItemTypeSection() {
        const container = new Container();

        const icon = new Graphics();
        icon.beginFill('red');
        icon.drawRect(0, 0, 30, 30);
        icon.endFill();

        container.addChild(icon);

        const typeText = new Text('Smart', {
            fill: GAME_COLORS.lightBlue,
            fontSize: 22,
        });
        const descriptionText = new Text('Homes in on targets with self-guided \nmicro-projectiles', {
            fill: GAME_COLORS.lightBlue,
            fontSize: 18,
        });
        const list = new List({ elementsMargin: 5, type: 'vertical' });
        list.addChild(typeText);
        list.addChild(descriptionText);
        list.position.set(icon.width + 10, 0);
        container.addChild(list);

        icon.position.set(0, Math.floor(list.height / 2) - Math.floor(icon.height / 2));


        const g = new Graphics();
        g.beginFill(CONFIG.SECTION_BORDER_COLOR);
        g.drawRect(0, list.y + list.height, CONFIG.SECTION_WIDTH, CONFIG.SECTION_BORDER_WIDTH);
        g.endFill();
        container.addChild(g);

        return container;
    }

    private createAttachmentsList() {
        const container = new Container();
        const list = new List({ elementsMargin: 10 });
        list.type = 'vertical';
        const createItem = (label: string) => {
            const list = new Container();
            const circleG = new Graphics();
            circleG.beginFill('red');
            circleG.drawCircle(0, 0, 5);
            circleG.endFill();

            const text = new Text(label, {
                fill: 'white',
                fontSize: 18,
            });
            text.position.set(circleG.width + 5, -10);
            list.addChild(circleG);
            list.addChild(text);
            return list;
        };

        list.addChild(createItem('Empty mod slot'));
        list.addChild(createItem('Empty mod slot'));
        list.addChild(createItem('Empty mod slot'));
        list.addChild(createItem('Empty mod slot'));
        container.addChild(list);

        const g = new Graphics();
        g.beginFill(CONFIG.SECTION_BORDER_COLOR);
        g.drawRect(0, list.y + list.height, CONFIG.SECTION_WIDTH, CONFIG.SECTION_BORDER_WIDTH);
        g.endFill();
        container.addChild(g);

        return container;
    }

    private createAdditionalInfo() {
        const container = new Container();
        const text = new Text('Deals additional electric damage', {
            fill: 'white',
            fontSize: 18,
        });
        container.addChild(text);

        const g = new Graphics();
        g.beginFill(CONFIG.SECTION_BORDER_COLOR);
        g.drawRect(0, text.y + text.height, CONFIG.SECTION_WIDTH, CONFIG.SECTION_BORDER_WIDTH);
        g.endFill();

        container.addChild(g);

        return container;
    }

    private createTitleSection() {
        const container = new Container();

        const width = CONFIG.SECTION_WIDTH;

        const yOffset = 5;
        const mainDmgText = new Text('151', {
            fontSize: CONFIG.DAMAGE_SECTION_MAIN_DAMAGE_FONT_SIZE,
            fill: CONFIG.DAMAGE_SECTION_MAIN_DAMAGE_FONT_COLOR,
        });
        mainDmgText.position.set(0, yOffset);
        container.addChild(mainDmgText);

        const mainDmgDecimalText = new Text('.6 DPS', {
            fontSize: CONFIG.DAMAGE_SECTION_MAIN_DAMAGE_DECIMAL_FONT_SIZE,
            fill: CONFIG.DAMAGE_SECTION_MAIN_DAMAGE_FONT_COLOR,
        });
        mainDmgDecimalText.position.set(mainDmgText.width + CONFIG.DAMAGE_SECTION_MAIN_DAMAGE_DECIMAL_FONT_X_OFFSET, yOffset + CONFIG.DAMAGE_SECTION_MAIN_DAMAGE_DECIMAL_FONT_Y_OFFSET);
        container.addChild(mainDmgDecimalText);

        const ammoText = new Text('511', {
            fontSize: CONFIG.DAMAGE_SECTION_AMMO_FONT_SIZE,
            fill: CONFIG.DAMAGE_SECTION_AMMO_FONT_COLOR,
        });
        ammoText.position.set(width - ammoText.width, yOffset);
        container.addChild(ammoText);

        const createDamageSpec = (range: string, label: string) => {
            const container = new Container();
            const numberText = new Text(range, {
                fontSize: CONFIG.DAMAGE_SECTION_SPECS_MAIN_FONT_SIZE,
                fill: CONFIG.DAMAGE_SECTION_SPECS_FONT_COLOR,
            });
            container.addChild(numberText);

            const labelText = new Text(label, {
                fontSize: CONFIG.DAMAGE_SECTION_SPECS_SECOND_FONT_SIZE,
                fill: CONFIG.DAMAGE_SECTION_SPECS_FONT_COLOR,
            });
            labelText.position.set(numberText.width, CONFIG.DAMAGE_SECTION_SPECS_MAIN_FONT_SIZE - CONFIG.DAMAGE_SECTION_SPECS_SECOND_FONT_SIZE);
            container.addChild(labelText);
            return container;
        };

        const specsList = new List({ elementsMargin: 5 });
        specsList.type = 'vertical';
        specsList.position.set(mainDmgText.x, mainDmgText.height + 10);
        specsList.addChild(createDamageSpec('5-7', ' Damage'));
        specsList.addChild(createDamageSpec('7.54', ' Attacks per second'));
        container.addChild(specsList);


        const g = new Graphics();
        g.beginFill(CONFIG.SECTION_BORDER_COLOR);
        g.drawRect(0, specsList.y + specsList.height, width, CONFIG.SECTION_BORDER_WIDTH);
        g.endFill();

        container.addChild(g);

        return container;
    }

    private createDamageSection() {
        const container = new Container();

        const width = CONFIG.SECTION_WIDTH;

        const itemTitle = new Text('YINGLONG', {
            fontSize: CONFIG.TITLE_SECTION_ITEM_FONT_SIZE,
            fill: getColorByItemRarity('LEGENDARY'),
        });
        container.addChild(itemTitle);

        const itemRarity = new Text('LEGENDARY', {
            fontSize: CONFIG.TITLE_SECTION_RARITY_FONT_SIZE,
            fill: getColorByItemRarity('LEGENDARY'),
        });
        itemRarity.position.set(width - itemRarity.width, 0);
        container.addChild(itemRarity);

        const itemType = new Text('Smart Submachine Gun', {
            fontSize: CONFIG.TITLE_SECTION_RARITY_FONT_SIZE,
            fill: CONFIG.TITLE_SECTION_RARITY_COLOR,
        });
        itemType.position.set(0, itemTitle.height * 2);

        container.addChild(itemType);

        const g = new Graphics();
        g.beginFill(CONFIG.SECTION_BORDER_COLOR);
        g.drawRect(0, itemType.position.y + itemType.height + 4, width, CONFIG.SECTION_BORDER_WIDTH);
        g.endFill();

        container.addChild(g);
        console.log(container.height);
        return container;
    }
}