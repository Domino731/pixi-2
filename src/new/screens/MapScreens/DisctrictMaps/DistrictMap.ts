import { ContentContainer } from '../../../components/ContentContainer';
import { CyberButton } from '../../../components/Button';
import { ScrollBox } from '@pixi/ui';

export interface IDistrictEntity {
    name: string;
    onClick: () => void;
}

interface IDistrictMap {
    entities: Array<IDistrictEntity>;
}

export class DistrictMap extends ContentContainer {
    private entities: Array<IDistrictEntity>;

    constructor({ entities }: IDistrictMap) {
        super('');
        this.entities = entities;
        const scrollBox = new ScrollBox({
            width: 500,
            height: 1000,
            elementsMargin: 20,
            items: this.entities.map(el => new CyberButton({
                label: el.name,
                onClick: el.onClick,
                position: { x: 0, y: 0 },
            }).container),
        });

        this.addChild(scrollBox);
    }
}