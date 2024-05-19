import { GAME_COLORS } from '../../../../config/styles';
import { MapIcon } from '../../components/MapIcon/MapIcon';
import { MAP_ICON } from '../../components/MapIcon/MapIcon.const';
import { MapFactory } from '../MapFactory';
import { texturePathsMap4000 } from './Map4000.const';
import { Graphics, Text } from 'pixi.js';

export class Map4000 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap4000,
            tilesWidth: 30,
            tilesHeight: 30,
        });
        this.setDistricts();
        this.setIcons();

    }

    private setIcons() {
        // northside
        const i1 = new MapIcon({ x: 2678, y: 1104, name: MAP_ICON.MED_POINT, label: 'Paramed' });
        this.mapContainer.addChild(i1);
        const i2 = new MapIcon({ x: 2698, y: 1104, name: MAP_ICON.FOOD, label: 'Gastronomy' });
        this.mapContainer.addChild(i2);
        const i3 = new MapIcon({ x: 2718, y: 1114, name: MAP_ICON.GUN_VENDOR, label: 'Guns' });
        this.mapContainer.addChild(i3);
        const i4 = new MapIcon({ x: 2699, y: 1264, name: MAP_ICON.CLOTHES, label: 'Clothes' });
        this.mapContainer.addChild(i4);
        const i5 = new MapIcon({ x: 2842, y: 1351, name: MAP_ICON.RIPPERDOC, label: 'Cassious' });
        this.mapContainer.addChild(i5);
        const i6 = new MapIcon({ x: 2912, y: 1551, name: MAP_ICON.MED_POINT, label: 'Med' });
        this.mapContainer.addChild(i6);
        const i7 = new MapIcon({ x: 3428, y: 1471, name: MAP_ICON.GUN_VENDOR, label: 'Guns' });
        this.mapContainer.addChild(i7);
        // littlechina
        const i8 = new MapIcon({ x: 2949, y: 1784, name: MAP_ICON.MED_POINT, label: 'Med' });
        this.mapContainer.addChild(i8);
        const i9 = new MapIcon({ x: 3014, y: 2052, name: MAP_ICON.MELEE_VENDOR, label: 'Melee' });
        this.mapContainer.addChild(i9);
        const i10 = new MapIcon({ x: 3002, y: 2062, name: MAP_ICON.GUN_VENDOR, label: 'Guns' });
        this.mapContainer.addChild(i10);
        const i11 = new MapIcon({ x: 2830, y: 2108, name: MAP_ICON.MED_POINT, label: 'Med' });
        this.mapContainer.addChild(i11);
        const i12 = new MapIcon({ x: 2938, y: 2121, name: MAP_ICON.RIPPERDOC, label: 'Ripperdoc' });
        this.mapContainer.addChild(i12);
        const i13 = new MapIcon({ x: 2668, y: 2181, name: MAP_ICON.FOOD, label: 'Food' });
        this.mapContainer.addChild(i13);
        // Kabuki
        const i14 = new MapIcon({ x: 3286, y: 1981, name: MAP_ICON.JUNK, label: 'Junk' });
        this.mapContainer.addChild(i14);
        const i15 = new MapIcon({ x: 3269, y: 1978, name: MAP_ICON.RIPPERDOC, label: 'Ripperdoc' });
        this.mapContainer.addChild(i15);
        const i16 = new MapIcon({ x: 3199, y: 1882, name: MAP_ICON.FIXER, label: 'Fixer' });
        this.mapContainer.addChild(i16);
        const i17 = new MapIcon({ x: 3220, y: 1776, name: MAP_ICON.CLOTHES, label: 'Clothes' });
        this.mapContainer.addChild(i17);
        const i18 = new MapIcon({ x: 3320, y: 1782, name: MAP_ICON.FOOD, label: 'Food' });
        this.mapContainer.addChild(i18);
        const i19 = new MapIcon({ x: 3330, y: 1746, name: MAP_ICON.MED_POINT, label: 'Med' });
        this.mapContainer.addChild(i19);
        const i20 = new MapIcon({ x: 3138, y: 1643, name: MAP_ICON.RIPPERDOC, label: 'Ripperdoc' });
        this.mapContainer.addChild(i20);
        const i21 = new MapIcon({ x: 3148, y: 1617, name: MAP_ICON.FOOD, label: 'Food' });
        this.mapContainer.addChild(i21);
        const i22 = new MapIcon({ x: 3154, y: 1569, name: MAP_ICON.GUN_VENDOR, label: 'Gun' });
        this.mapContainer.addChild(i22);
        const i23 = new MapIcon({ x: 3184, y: 1573, name: MAP_ICON.RIPPERDOC, label: 'Netrunner' });
        this.mapContainer.addChild(i23);
        const i24 = new MapIcon({ x: 3194, y: 1591, name: MAP_ICON.FOOD, label: 'Food' });
        this.mapContainer.addChild(i24);
        const i25 = new MapIcon({ x: 3240, y: 1503, name: MAP_ICON.RIPPERDOC, label: 'Ripperdoc' });
        this.mapContainer.addChild(i25);
    }

    private setDistricts() {
        this.setWatsonDistrict();
    }

    private setWatsonDistrict() {
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


        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        text.position.set(2870, 1450);
        g.addChild(text);

        this.mapContainer.addChild(g);

        this.setArasakaShoreline();
        this.setLittleChinaBorder();
        this.setKabukiBorder();
        this.setNorthsideBorder();
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

        const text = new Text('Arasaka waterfront', {
            fill: 'white',
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 18,
        });
        text.position.set(2270, 1400);
        g.addChild(text);
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

        const text = new Text('Little china', {
            fill: 'white',
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 18,
        });
        text.position.set(2840, 2080);
        g.addChild(text);

        this.mapContainer.addChild(g);
    }

    private setKabukiBorder() {
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon([
            3310, 2360,
            3140, 2360,
            3167, 1741,
            3113, 1683,
            3084, 1583,
            3184, 1523,
            3281, 1527,

            3371, 1473,
            3477, 1557,
            3451, 1667,
            3483, 1739,
            3507, 1864,
            3357, 1989,
            3357, 2180,
            3310, 2230,
            // 2863, 1730,
            // 2433, 1969,
            // 2544, 2444,
            // 3250, 2444,
        ]);
        g.endFill();

        const text = new Text('Kabuki', {
            fill: 'white',
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 18,
        });
        text.position.set(3260, 1900);
        g.addChild(text);
        this.mapContainer.addChild(g);
    }

    private setNorthsideBorder() {
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
            3483, 1739,
            3451, 1667,
            3477, 1557,
            3371, 1473,
            3281, 1527,
            3184, 1523,
            3084, 1583,
            3113, 1683,
            3167, 1741,
            2863, 1730,
            2593, 1240,
            2502, 1241,
            2447, 1147, 2480, 1061,
            2340, 853,
            2670, 838,
            2840, 628,


        ]);
        g.endFill();

        const text = new Text('Northside', {
            fill: 'white',
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 18,
        });
        text.position.set(3170, 1100);
        g.addChild(text);

        this.mapContainer.addChild(g);
    }

}