import { Container, Graphics } from 'pixi.js';
import { GAME_COLORS } from '../../../../const/styles';
import { FixerCard } from './FIxerCard';

const WIDTH = 500;
const HEIGHT = 1278;
const PADDING = 20;
const FIXERS_LIST_GAP = 70;


const MOCK_DATA = [
    {
        fixerId: 1,
        fixerName: 'Judy Alvarez',
        missions: [{
            title: 'TEST 123123',
        }, { title: 'DUPA123123123' }],
    },
    {
        fixerId: 2,
        fixerName: '',
        missions: [{
            title: 'TEST x',
        }, { title: 'ASD!()*@#&' }],
    },
];

class BaseColumn extends Container {
    constructor() {
        super();
        console.log(this.height);
        this.position.set(1759, 0);
        this.addContainerStyles();
    }

    private addContainerStyles() {
        const g = new Graphics();
        g.beginFill();
        g.lineStyle(1, GAME_COLORS.yellow);
        g.drawRect(0, 0, WIDTH, HEIGHT);
        g.endFill();
        this.addChild(g);
    }
}

export class ContentColumn extends BaseColumn {
    constructor() {
        super();
        this.setFixersList();
    }

    private setFixersList() {
        const container = new Container();

        MOCK_DATA.forEach((el, i) => {
            this.addChild(new FixerCard({
                width: WIDTH - (PADDING * 2),
                x: PADDING,
                y: PADDING + (i * FIXERS_LIST_GAP),
                label: 'Judy Alvarez',
                onClick: () => console.log(123123),
            }));
        });

        this.addChild(container);
    }
}