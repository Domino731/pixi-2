import { MapFactory } from '../MapFactory';
import { texturePathsMap2000 } from './Map2000.const';
import { Graphics } from 'pixi.js';
import { GAME_COLORS } from '../../../../../const/styles';
import { GAME } from '../../../../../configs/game';
import { MapIcon } from '../../components/MapIcon/MapIcon';

export class Map2000 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap2000,
            tilesHeight: 15,
            tilesWidth: 15,
        });
        this.setDistrictsLines();
        this.setIcons();
    }

    private setDistrictsLines() {
        this.setWatsonDistricLine();
    }

    private setIcons() {
        // Little china
        const i1 = new MapIcon({ x: 1460, y: 1070, variant: 'VENDOR', name: 'FOOD', label: 'Gun vendor' });
        this.mapContainer.addChild(i1);
        const i2 = new MapIcon({ x: 1535, y: 1035, variant: 'VENDOR', name: 'MED_POINT', label: 'Gun vendor' });
        this.mapContainer.addChild(i2);
        const i3 = new MapIcon({ x: 1621, y: 1015, variant: 'VENDOR', name: 'GUN_VENDOR', label: 'Gun vendor' });
        this.mapContainer.addChild(i3);
        const i4 = new MapIcon({ x: 1629, y: 1009, variant: 'VENDOR', name: 'MELEE_VENDOR', label: 'Gun vendor' });
        this.mapContainer.addChild(i4);
        const i5 = new MapIcon({ x: 1588, y: 1042, variant: 'VENDOR', name: 'RIPPERDOC', label: 'Gun vendor' });
        this.mapContainer.addChild(i5);
        const i6 = new MapIcon({ x: 1594, y: 885, variant: 'VENDOR', name: 'CLOTHES', label: 'Gun vendor' });
        this.mapContainer.addChild(i6);
        // Kabuki
        const i7 = new MapIcon({ x: 1767, y: 971, variant: 'VENDOR', name: 'JUNK', label: 'Gun vendor' });
        this.mapContainer.addChild(i7);
        const i8 = new MapIcon({ x: 1756, y: 968, variant: 'VENDOR', name: 'RIPPERDOC', label: 'Gun vendor' });
        this.mapContainer.addChild(i8);
        const i9 = new MapIcon({ x: 1718, y: 924, variant: 'FIXER', name: 'FIXER', label: 'Gun vendor' });
        this.mapContainer.addChild(i9);
        const i10 = new MapIcon({ x: 1781, y: 874, variant: 'VENDOR', name: 'FOOD', label: 'Gun vendor' });
        this.mapContainer.addChild(i10);
        const i11 = new MapIcon({ x: 1788, y: 856, variant: 'VENDOR', name: 'MED_POINT', label: 'Gun vendor' });
        this.mapContainer.addChild(i11);
        const i12 = new MapIcon({ x: 1739, y: 733, variant: 'VENDOR', name: 'RIPPERDOC', label: 'Gun vendor' });
        this.mapContainer.addChild(i12);
        const i13 = new MapIcon({ x: 1690, y: 800, variant: 'VENDOR', name: 'RIPPERDOC', label: 'Gun vendor' });
        // this.mapContainer.addChild(i13);
        const i14 = new MapIcon({ x: 1699, y: 790, variant: 'VENDOR', name: 'FOOD', label: 'Gun vendor' });
        // this.mapContainer.addChild(i14);
        const i15 = new MapIcon({ x: 1720, y: 776, variant: 'VENDOR', name: 'FOOD', label: 'Gun vendor' });
        // this.mapContainer.addChild(i15);
        const i16 = new MapIcon({ x: 1694, y: 769, variant: 'VENDOR', name: 'GUN_VENDOR', label: 'Gun vendor' });
        this.mapContainer.addChild(i16);
        // const i2 = new MapIcon({ x: 440, y: 400, variant: 'VENDOR', name: 'CLOTHES' });
        // const i3 = new MapIcon({ x: 480, y: 400, variant: 'FIXER', name: 'FIXER', label: 'Fixer' });
        // const i4 = new MapIcon({ x: 520, y: 400, variant: 'VENDOR', name: 'JUNK' });
        // const i5 = new MapIcon({ x: 560, y: 400, variant: 'VENDOR', name: 'MED_POINT' });
        // const i6 = new MapIcon({ x: 600, y: 400, variant: 'VENDOR', name: 'MELEE_VENDOR' });
        // const i7 = new MapIcon({ x: 640, y: 400, variant: 'VENDOR', name: 'NETRUNNER' });
        // const i8 = new MapIcon({ x: 680, y: 400, variant: 'VENDOR', name: 'RIPPERDOC' });


        // this.mapContainer.addChild(i2);
        // this.mapContainer.addChild(i3);
        // this.mapContainer.addChild(i4);
        // this.mapContainer.addChild(i5);
        // this.mapContainer.addChild(i6);
        // this.mapContainer.addChild(i7);
        // this.mapContainer.addChild(i8);
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