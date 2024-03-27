import { Container, Text } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { GAME_COLORS } from '../../../../const/styles';

interface IItemCard {
    x: number;
    y: number;
}

const RARITY_BAR_WIDTH = 20;
const HEIGHT = 150;
const ITEM_CARD_WIDTH = 450;
const ITEM_TITLE_FONT_SIZE = 18;
const AMMO_TYPE_SIZE = 25;

export class ItemCard extends Container {
    constructor({ x, y }: IItemCard) {
        super();
        this.position.set(x, y);
        this.setComponents();
        this.onclick = () => {
            console.log(123);
        };
    }


    private setComponents() {
        this.addChild(this.getRarityGraphic());
        this.addChild(this.getItemCardGraphic());
        this.addChild(this.getItemTitle());
        this.addChild(this.getPriceTag());
        this.addChild(this.getAmmoTypeGraphic());
        this.addChild(this.getChipsGraphics());
        this.addChild(this.getAttachmentsGraphics());
    }

    private getItemCardGraphic() {
        const x = RARITY_BAR_WIDTH + 5;
        const y = 0;
        const width = ITEM_CARD_WIDTH;
        const height = HEIGHT;
        const offset = 30;

        const points = [
            x, y,
            x, y + height,
            x + width - offset, y + height,
            x + width, y + height - offset,
            x + width, y,
        ];

        const g = new Graphics();
        g.beginFill();
        g.lineStyle(2, 'red');
        g.drawPolygon(points);
        g.endFill();
        return g;
    }

    private getRarityGraphic() {
        const x = 0;
        const y = 0;
        const width = RARITY_BAR_WIDTH;
        const height = HEIGHT;

        const points = [
            x, y,

            x, y + 70,
            x + 6, y + 70,
            x + 6, y + 130,
            x, y + 135,

            x, y + height,
            x + width, y + height,
            x + width, y,
        ];

        const g = new Graphics();
        g.beginFill('red');
        g.drawPolygon(points);
        g.endFill();
        return g;
    }


    private getItemTitle() {
        const text = new Text('SNIPER-RIFLE', {
            fill: 'grey',
            fontSize: ITEM_TITLE_FONT_SIZE,
            letterSpacing: 1,
            fontWeight: 'bold',
        });
        text.position.set(100, HEIGHT - ITEM_TITLE_FONT_SIZE - 10);
        return text;
    }

    private getPriceTag() {
        const g = new Graphics();

        g.position.set((ITEM_CARD_WIDTH + RARITY_BAR_WIDTH) - 80, 10);
        g.beginFill();
        g.lineStyle(1, 'yellow');
        g.drawRect(0, 0, 70, 25);
        g.endFill();

        return g;
    }

    private getAmmoTypeGraphic() {
        const g = new Graphics();

        g.position.set(RARITY_BAR_WIDTH + 14, HEIGHT - AMMO_TYPE_SIZE - 12);
        g.beginFill();
        g.lineStyle(2, GAME_COLORS.lightBlue);
        g.drawRect(0, 0, AMMO_TYPE_SIZE, AMMO_TYPE_SIZE);
        g.endFill();
        return g;
    }

    private getChipsGraphics() {
        const container = new Container();

        container.position.set(RARITY_BAR_WIDTH + 22, 12);

        for (let i = 0; i < 3; i++) {
            const g = new Graphics();
            g.beginFill();
            g.lineStyle(2, 'grey');
            g.drawCircle(22 * i, 10, 8);
            g.endFill();
            container.addChild(g);
        }


        return container;
    }

    private getAttachmentsGraphics() {
        const container = new Container();

        container.position.set(ITEM_CARD_WIDTH - 80, 110);

        for (let i = 0; i < 3; i++) {
            const g = new Graphics();
            g.beginFill();
            g.lineStyle(2, 'grey');
            g.drawRect(26 * i, 10, 20, 20);
            g.endFill();
            container.addChild(g);
        }


        return container;
    }
}