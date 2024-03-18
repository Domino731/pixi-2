import { ContentContainer } from '../../components/ContentContainer';
import { ProfileImageFrame } from '../../../components/ImageFrames';
import { StatisticBar } from './components/StatisticBar';
import { Container } from 'pixi.js';

const config = {
    styles: {
        statistics: {
            gap: 50,
        },
    },
};

/** The first screen that shows up after loading */
export class ProfileScreen extends ContentContainer {
    constructor() {
        super('profile screen');
        this.addChild(new ProfileImageFrame({
            position: { x: 40, y: 40 },
            width: 600,
            height: 600,
        }));
        this.createStatistics();
    }

    private createStatistics() {
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

        const container = new Container();
        container.position.set(40, 750);
        stats.forEach(({ title, onClick }, i) => {
            container.addChild(new StatisticBar({
                position: { x: 0, y: i * config.styles.statistics.gap },
                title,
                onClick,
                width: 500,
            }));
        });

        this.addChild(container);
    }
}
