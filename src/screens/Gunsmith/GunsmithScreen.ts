import { ContentContainer } from '../../components/ContentContainer';
import { Container } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { ItemCard } from './components/ItemCard';
import { ScrollBox } from '@pixi/ui';
import { ITEM_RARITY } from '../../config/types';

export class GunsmithScreen extends ContentContainer {
    constructor() {
        super('');
        this.createGunsSection();
    }

    private createGunsSection() {
        const container = new Container();
        container.position.set(1244, 0);


        const g = new Graphics();
        g.beginFill();
        g.lineStyle(2, 'red');
        g.drawRect(0, 0, 1015, 1276);
        g.endFill();
        container.addChild(g);

        const scrollBox = new ScrollBox({
            width: 1200,
            height: 1276,
            elementsMargin: 20,
        });
        scrollBox.position.set(20, 20);

        [{ rarity: ITEM_RARITY.EPIC }, { rarity: ITEM_RARITY.RARE }, { rarity: ITEM_RARITY.COMMON }, { rarity: ITEM_RARITY.LEGENDARY }, { rarity: ITEM_RARITY.LEGENDARY }].forEach((el, index) => {
            if (index % 2 === 0) {
                scrollBox.addItem(new ItemCard({ x: 0, y: 0, rarity: el.rarity }));
            } else {
                scrollBox.addItem(new ItemCard({ x: 0, y: 0, rarity: el.rarity }));
            }
        });

        container.addChild(scrollBox);
        // container.addChild(new ItemCard({ x: 10, y: 10 }));


        this.addChild(container);
    }
}