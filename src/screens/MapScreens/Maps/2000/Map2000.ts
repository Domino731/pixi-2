import {MapFactory} from '../MapFactory';
import {texturePathsMap2000} from './Map2000.const';
import {Graphics} from 'pixi.js';
import {MapIcon} from '../../components/MapIcon/MapIcon';

export class Map2000 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap2000,
            tilesHeight: 15,
            tilesWidth: 15,
        });
        this.setDistrictsLines();
    }

    private setDistrictsLines() {
        this.setWatsonDistricLine();
    }

    private setWatsonDistricLine() {
        const x = 1970;
        const y = 305;
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon([
            x, y,
            x + 150, y + 370,
            x + 95, y + 413,
            x + 67, y + 475,
            x + 64, y + 523,
            x + 30, y + 570,
            x + 33, y + 580,
            x - 96, y + 630,
            x - 166, y + 691,
            x - 166, y + 783,
            x - 187, y + 804,
            x - 187, y + 874,
            x - 208, y + 920,
            x - 308, y + 924,
            x - 568, y + 924,
            x - 637, y + 670,
            x - 946, y + 584,
            x - 906, y + 264,
            x - 656, y + 134,
            x - 500, y + 114,
            x - 414, y + 10,
            x - 240, y - 70,
            x - 70, y - 47,
        ]);
        g.endFill();
        this.mapContainer.addChild(g);
        this.setArasakaWaterfront();
        this.setLittleChinaBorderLine();
        this.setKubikiBorderLine();
    }

    private setKubikiBorderLine() {
        const x = 1970;
        const y = 305;
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(1, 'red');
        g.drawPolygon([
            x - 187, y + 874,
            x - 270, y + 874,
            x - 270, y + 564,
            x - 279, y + 534,
            x - 295, y + 484,
            x - 251, y + 458,
            x - 199, y + 461,
            x - 154, y + 431,
            x - 104, y + 470,
            x - 114, y + 530,
            x - 99, y + 560,

            x - 96, y + 630,
            x - 166, y + 691,
            x - 166, y + 783,
            x - 187, y + 804,
            x - 187, y + 874,
        ]);
        g.endFill();
        this.mapContainer.addChild(g);
    };

    private setArasakaWaterfront() {
        const x = 1970;
        const y = 305;
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(1, 'red');
        g.drawPolygon([
            x - 656, y + 134,
            x - 600, y + 224,
            x - 620, y + 274,
            x - 590, y + 320,
            x - 543, y + 322,
            x - 412, y + 562,
            x - 637, y + 670,
            x - 946, y + 584,
            x - 906, y + 264,
        ]);
        g.endFill();
        this.mapContainer.addChild(g);
    };

    private setLittleChinaBorderLine() {
        // x - 187, y + 874,
        const x = 1970;
        const y = 305;
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(1, 'red');
        g.drawPolygon([
            x - 187, y + 874,
            x - 270, y + 874,
            x - 270, y + 564,
            x - 412, y + 562,
            x - 637, y + 670,
            x - 568, y + 924,
            x - 308, y + 924,
            x - 208, y + 920,
        ]);
        g.endFill();
        this.mapContainer.addChild(g);
    }

}