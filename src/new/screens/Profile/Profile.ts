import { ContentContainer } from '../../components/ContentContainer';
import { ProfileImageFrame } from '../../../components/ImageFrames';
import { StatisticBar } from './components/StatisticBar';
import { Container } from 'pixi.js';
import { LevelBar } from './components/LevelBar';
import { SectionTitle } from './components/SectionTitle';

const config = {
    styles: {
        statistics: {
            gap: 50,
        },
    },
};

const stats = [
    {
        title: 'Strength',
        onClick: () => console.log(123),
    },
    {
        title: 'Strength',
        onClick: () => console.log(123),
    },
];

/** The first screen that shows up after loading */
export class ProfileScreen extends ContentContainer {
    constructor() {
        super();
        this.addChild(new ProfileImageFrame({
            position: { x: 40, y: 40 },
            width: 600,
            height: 600,
        }));
        // this.createStatistics();
        this.addChild(new LevelBar({ position: { x: 31, y: 360 }, barWidth: 540 }));
        this.createStats();
    }

    private createStats() {
        const container = new Container();
        container.position.set(40, 830);

        container.addChild(new SectionTitle({
            position: { x: 0, y: 0 },
            width: 600,
            text: 'Statistics',
        }));

        const statisticsWrapper = new Container();
        statisticsWrapper.position.set(0, 50);
        stats.forEach(({ title, onClick }, i) => {
            statisticsWrapper.addChild(new StatisticBar({
                position: { x: 0, y: i * config.styles.statistics.gap },
                title,
                onClick,
                width: 600,
            }));
        });

        container.addChild(statisticsWrapper);
        this.addChild(container);
    }
}
