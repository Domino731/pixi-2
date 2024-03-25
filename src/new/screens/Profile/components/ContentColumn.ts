import { Container, Graphics } from 'pixi.js';
import { GAME_COLORS } from '../../../../const/styles';
import { FixerCard } from './FIxerCard';

const WIDTH = 500;
const HEIGHT = 1278;
const PADDING = 20;
const FIXERS_LIST_GAP = 90;


interface Mission {
    title: string;
}

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
        fixerName: 'Rogue',
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
        g.lineStyle(2, GAME_COLORS.yellow);
        g.drawRect(0, 0, WIDTH, HEIGHT);
        g.endFill();
        this.addChild(g);
    }
}

interface IContentColumn {
    onMissionClick: (mission: Mission) => void;
    hideMissionCard: () => void;
}

export class ContentColumn extends BaseColumn {
    private fixersContainer = new Container();
    private missionsContainer = new Container();
    private currentMissions: Mission[] = [];

    constructor({ onMissionClick }: IContentColumn) {
        super();
        this.addChild(this.fixersContainer);
        this.setFixersList(onMissionClick);
    }

    private setFixersList(onMissionClick: (mission: Mission) => void) {
        MOCK_DATA.forEach((el, i) => {
            this.fixersContainer.addChild(new FixerCard({
                width: WIDTH - (PADDING * 2),
                x: PADDING,
                y: PADDING + (i * FIXERS_LIST_GAP),
                label: el.fixerName,
                onClick: () => {
                    this.changeFixersContainerVisibility(false);
                    this.currentMissions = el.missions;
                    this.missionsContainer = this.getMissionsList(onMissionClick);
                    this.addChild(this.missionsContainer);
                },
            }));
        });
    }

    private getMissionsList(onMissionClick: (mission: Mission) => void) {
        const container = new Container();

        this.currentMissions.forEach((el, i) => {
            container.addChild(new FixerCard({
                width: WIDTH - (PADDING * 2),
                x: PADDING,
                y: PADDING + (i * FIXERS_LIST_GAP),
                label: el.title,
                onClick: () => {
                    this.changeFixersContainerVisibility(true);
                    onMissionClick(el);
                },
            }));
        });
        return container;
    }


    private changeFixersContainerVisibility(isVisible: boolean) {
        if (isVisible) {
            this.addChild(this.fixersContainer);
        } else {
            this.removeChild(this.fixersContainer);
        }
    }
}