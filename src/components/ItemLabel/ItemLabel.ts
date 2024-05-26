import { Container, Graphics, Sprite, Text, Texture } from 'pixi.js';
import { ItemLabelOptions } from './ItemLabel.types';
import { List } from '@pixi/ui';
import { CONFIG } from './ItemLabel.const';
import { getColorByItemRarity } from '../../config/types';
import { GAME_COLORS } from '../../config/styles';
import { getGunAmmoTexture, getGunTechnologyTexture } from '../../textures/gun-textures';
import { getCommonTexture } from '../../textures/common-textures';
import { COMMON_TEXTURES_NAMES } from '../../textures/common-textures.const';
import { getGunAmmoText } from '../../utils/gun';

export class ItemLabel extends Container {
    constructor({ x, y }: ItemLabelOptions) {
        super();
        this.position.set(x, y);
        this.addChild(this.createItemsList());
    }

    private createItemsList() {
        const g = new Graphics();
        const list = new List({ elementsMargin: 10 });
        list.addChild(this.createDamageSection());
        list.addChild(this.createBorderLine());
        list.addChild(this.createItemGraphicSection());
        list.addChild(this.createBorderLine());
        list.addChild(this.createTitleSection());
        list.addChild(this.createBorderLine());
        list.addChild(this.createItemTypeSection());
        list.addChild(this.createBorderLine());
        list.addChild(this.createStatsSection());
        list.addChild(this.createBorderLine());
        list.addChild(this.createAdditionalInfo());
        list.addChild(this.createBorderLine());
        list.addChild(this.createAttachmentsList());
        list.addChild(this.createBorderLine());
        list.addChild(this.createItemDescription());
        list.type = 'vertical';
        list.position.set(CONFIG.PADDING, CONFIG.PADDING);
        const x = 0;
        const y = 0;
        const width = list.width + (2 * CONFIG.PADDING);
        const height = list.height + (2 * CONFIG.PADDING);
        const sharpOffset = CONFIG.SHARP_OFFSET;

        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, CONFIG.BORDER_COLOR);
        g.drawPolygon(
            x, y,
            x, y + height,
            x + width - sharpOffset, y + height,
            x + width, y + height - sharpOffset,
            x + width, y,
        );
        g.endFill();


        g.beginFill(...GAME_COLORS.transparent);
        g.lineStyle(1, GAME_COLORS.red2);
        g.drawRect(CONFIG.SECTION_WIDTH / 2, height - 60, 4, 60);
        g.endFill();
        // container.addChild(g);

        g.addChild(list);
        return g;
    }

    private createBorderLine() {
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent);
        g.drawRect(0, 0, CONFIG.SECTION_WIDTH, 40);
        g.endFill();

        g.beginFill(CONFIG.GAP_BORDER_COLOR);
        g.drawRect(0, 4, CONFIG.SECTION_WIDTH, CONFIG.GAP_BRODER_WIDTH);
        g.endFill();

        return g;
    }

    private createItemGraphicSection() {
        const container = new Container();
        const txt = Texture.from(`guns/sniperRifles/grad`);
        const gunTxt = new Sprite(txt);

        container.addChild(gunTxt);
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
                fill: GAME_COLORS.blue2,
            });
            labelText.position.set(valueText.width + 4, Math.floor(valueText.height / 2) - Math.floor(labelText.height / 2));
            container.addChild(labelText);
            return container;
        };

        const list = new List({ type: 'vertical', elementsMargin: 10 });
        list.addChild(createStat('+7-8', 'Electrical Damage'));
        list.addChild(createStat('+1.39%', 'Crit chance'));
        list.addChild(createStat('+2%', 'Crit damage'));
        list.addChild(createStat('0.85', 'Headshot damage multiplier'));
        container.addChild(list);
        return container;
    }

    private createItemDescription() {
        const container = new Container();
        const descriptionText = new Text('A genius among shotguns', {
            fontSize: 20,
            fill: GAME_COLORS.red2,
        });
        container.addChild(descriptionText);

        const list = new List({ elementsMargin: CONFIG.SECTION_WIDTH / 2 });

        const createIcon = (label: string, iconTxt: Texture, color: string) => {
            const container = new Container();
            const text = new Text(label, {
                fontSize: 22,
                fill: color,
            });
            const icon = new Sprite(iconTxt);
            icon.width = 26;
            icon.height = 26;
            text.position.set(icon.width + 8, Math.floor(icon.height / 2) - Math.floor(text.height / 2));
            container.addChild(icon);
            container.addChild(text);
            return container;
        };

        list.position.set(0, descriptionText.height + 25);
        list.type = 'horizontal';
        list.addChild(createIcon('5', getCommonTexture(COMMON_TEXTURES_NAMES.weight), GAME_COLORS.red2));
        list.addChild(createIcon('125', getCommonTexture(COMMON_TEXTURES_NAMES.euroDollar), GAME_COLORS.yellow));
        container.addChild(list);
        return container;
    }

    private createItemTypeSection() {
        const container = new Container();

        const iconT = getGunTechnologyTexture('blade');
        const icon = new Sprite(iconT);
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
        return container;
    }

    private createAttachmentsList() {
        const container = new Container();
        const list = new List({ elementsMargin: 10 });
        list.type = 'vertical';
        list.position.set(15, 15);
        const createItem = (label: string) => {
            const list = new Container();
            const circleG = new Graphics();
            circleG.beginFill(GAME_COLORS.red3);
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
        return container;
    }

    private createAdditionalInfo() {
        const container = new Container();
        const text = new Text('Deals additional electric damage', {
            fill: 'white',
            fontSize: 18,
        });
        container.addChild(text);
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

        const ammoText = new Text(getGunAmmoText('handgun'), {
            fontSize: CONFIG.DAMAGE_SECTION_AMMO_FONT_SIZE,
            fill: CONFIG.DAMAGE_SECTION_AMMO_FONT_COLOR,
        });
        ammoText.position.set(width - ammoText.width, yOffset);

        const ammoTxt = getGunAmmoTexture('handgun');
        const ammo = new Sprite(ammoTxt);
        ammo.width = 70;
        ammo.height = 70;
        ammo.position.set(ammoText.position.x - ammo.width, -20);
        container.addChild(ammo);

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
        specsList.position.set(mainDmgText.x, mainDmgText.height + 14);
        specsList.addChild(createDamageSpec('5-7', ' Damage'));
        specsList.addChild(createDamageSpec('7.54', ' Attacks per second'));
        container.addChild(specsList);

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
        return container;
    }
}