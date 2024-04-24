import { MapFactory } from '../MapFactory';
import { texturePathsMap4000 } from './Map4000.const';
import { Graphics } from 'pixi.js';

export class Map4000 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap4000,
            tilesWidth: 30,
            tilesHeight: 30,
        });
        this.setDistricts();
    }

    private setDistricts() {
        this.setKabukiDistrict();
    }

    private setKabukiDistrict() {
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon([
            3227, 470,
            3537, 528,
            3681, 612,
            3978, 1338,
            3862, 1429,
            3818, 1562,
            3815, 1661,
            3745, 1757,
            3751, 1774,
            3507, 1864,
            3357, 1989,
            3357, 2180,
            3310, 2230,
            3310, 2360,
            3250, 2444,
            2544, 2444,
            2433, 1969,
            1773, 1790,
            1870, 1150,
            2340, 853,
            2670, 838,
            2840, 628,
        ]);
        // g.drawPolygon([
        //     1000, 200,
        // ]);
        g.endFill();
        this.mapContainer.addChild(g);

        this.setArasakaShoreline();
        this.setLittleChinaBorder();
    }


    private setArasakaShoreline() {
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon([
            2340, 853,
            2480, 1061,
            2447, 1147,
            2502, 1241,
            2593, 1240,
            2863, 1730,
            2433, 1969,
            1773, 1790,
            1870, 1150,
        ]);
        g.endFill();
        this.mapContainer.addChild(g);
    }

    private setLittleChinaBorder() {
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon([
            3310, 2360,
            3140, 2360,
            3167, 1741,
            2863, 1730,
            2433, 1969,
            2544, 2444,
            3250, 2444,
        ]);
        g.endFill();
        this.mapContainer.addChild(g);
    }

}