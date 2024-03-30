import { ContentContainer } from '../../../components/ContentContainer';
import { CyberButton } from '../../../components/Button';
import { ScrollBox } from '@pixi/ui';
import { WatsonDistrict } from '../DisctrictMaps/WatsonDistrict';
import { Container } from 'pixi.js';


export class WholeMap extends ContentContainer {
    private DISTRICTS = [
        {
            name: 'Watson',
            onClick: () => console.log('onClick'),
            district: WatsonDistrict,
        },
        {
            name: 'Westbrook',
            onClick: () => console.log('onClick'),
            district: WatsonDistrict,
        },
        {
            name: 'Downtown',
            onClick: () => console.log('onClick'),
            district: WatsonDistrict,
        },
        {
            name: 'Heywood',
            onClick: () => console.log('onClick'),
            district: WatsonDistrict,
        },
        {
            name: 'Santo domingo',
            onClick: () => console.log('onClick'),
            district: WatsonDistrict,
        },
        {
            name: 'Pacifica',
            onClick: () => console.log('onClick'),
            district: WatsonDistrict,
        },
    ];
    private cityMapContainer: Container = new Container();
    private districtMapContainer: Container = new Container();

    constructor() {
        super('');

        const scrollBox = new ScrollBox({
            width: 500,
            height: 1000,
            elementsMargin: 20,
            items: this.DISTRICTS.map(el => new CyberButton({
                label: el.name,
                onClick: () => {
                    this.districtMapContainer.addChild(new el.district());
                    this.cityMapContainer.visible = false;
                    this.districtMapContainer.visible = true;
                },
                position: { x: 0, y: 0 },
            }).container),
        });

        this.cityMapContainer.addChild(scrollBox);
        this.districtMapContainer.visible = true;
        this.addChild(this.cityMapContainer);
        this.addChild(this.districtMapContainer);
    }
}