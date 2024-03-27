import { ContentContainer } from '../../components/ContentContainer';
import { Container } from 'pixi.js';
import { Graphics } from '@pixi/graphics';
import { ItemCard } from './components/ItemCard';

export class GunsmithScreen extends ContentContainer {
    constructor() {
        super('');
        this.createGunsSection();
    }

    private createGunsSection() {
        const container = new Container();
        container.position.set(500, 0);
        const g = new Graphics();
        g.beginFill();
        g.lineStyle(2, 'red');
        g.drawRect(0, 0, 1000, 1276);
        g.endFill();
        container.addChild(g);
//
//         container.interactive = true;
        container.addChild(new ItemCard({ x: 10, y: 10 }));
//         container.on('click', onClick);
//
// // Click event handler function
//         function onClick(event) {
//             console.log('Container clicked!');
//             // You can access event data such as event.target or event.currentTarget here
//         }

        this.addChild(container);
    }
}