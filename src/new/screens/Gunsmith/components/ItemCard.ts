import { Container } from 'pixi.js';
import { Graphics } from '@pixi/graphics';

interface IItemCard {
    x: number;
    y: number;
}

const RARITY_BAR_WIDTH = 20;
const HEIGHT = 120;
const ITEM_CARD_WIDTH = 350;

export class ItemCard extends Container {
    constructor({ x, y }: IItemCard) {
        super();
        this.position.set(x, y);
        this.setStyles();
        this.onclick = () => {
            console.log(123);
        };
    }


    private setStyles() {
        this.addChild(this.getRarityGraphic());
        this.addChild(this.setItemCardGraphic());
    }

    private setItemCardGraphic() {
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

            x, y + 50,
            x + 6, y + 50,
            x + 6, y + 80,
            x, y + 85,

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
}