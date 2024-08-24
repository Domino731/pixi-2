import {GAME_COLORS} from '../../../../config/styles';
import {MapIcon} from '../../components/MapIcon/MapIcon';
import {MAP_ICON} from '../../components/MapIcon/MapIcon.const';
import {MapFactory} from '../MapFactory';
import {texturePathsMap4000} from './Map4000.const';
import {Container, Graphics, Text} from 'pixi.js';

export class Map4000 extends MapFactory {
    private fooIcon: Container = null;

    constructor() {
        super({
            tilesPaths: texturePathsMap4000,
            tilesWidth: 30,
            tilesHeight: 30,
        });
        this.setDistricts();
        this.setIcons();
        this.iconMove();
    }

    private iconMove() {
        const velocity = 3;

        window.addEventListener("keydown", (event) => {
            console.log(event);
            const x = this.fooIcon.position.x;
            const y = this.fooIcon.position.y;
            const consolePos = () => {
                console.log(`x: ${this.fooIcon.position.x}, y: ${this.fooIcon.position.y}`)
            }
            switch (event.key) {
                case "ArrowUp":
                    this.fooIcon.position.set(x, y - velocity)
                    consolePos();
                    break;
                case "ArrowDown":
                    this.fooIcon.position.set(x, y + velocity)
                    consolePos();
                    break;
                case "ArrowLeft":
                    this.fooIcon.position.set(x - velocity, y)
                    consolePos();
                    break;
                case "ArrowRight":
                    this.fooIcon.position.set(x + velocity, y)
                    consolePos();
                    break;
                default:
                    console.log(`Key pressed: ${event.key}`);
            }
        });
    }

    private setIcons() {
        // Arasaka waterfront
        const awi1 = new MapIcon({x: 2444, y: 1808, name: MAP_ICON.PLACE, label: 'Konpeki plaza'});
        this.mapContainer.addChild(awi1)
        const awi2 = new MapIcon({x: 2555, y: 1745, name: MAP_ICON.TARROT, label: 'Cesar Tarrot'});
        this.mapContainer.addChild(awi2)
        const awi3 = new MapIcon({x: 2525, y: 1607, name: MAP_ICON.FAST_TRAVEL, label: 'California & Pershing'});
        this.mapContainer.addChild(awi3);
        const awi4 = new MapIcon({x: 2522, y: 1598, name: MAP_ICON.CHEST, label: 'Chest'});
        this.mapContainer.addChild(awi4)
        const awi5 = new MapIcon({x: 2786, y: 1694, name: MAP_ICON.FAST_TRAVEL, label: 'Fast travel'});
        this.mapContainer.addChild(awi5)
        const awi6 = new MapIcon({x: 2783, y: 1691, name: MAP_ICON.METRO, label: 'Metro'});
        this.mapContainer.addChild(awi6)
        const awi7 = new MapIcon({x: 2787, y: 1691, name: MAP_ICON.CHEST, label: 'Chest'});
        this.mapContainer.addChild(awi7)

        // northside
        const i1 = new MapIcon({x: 2678, y: 1104, name: MAP_ICON.MED_POINT, label: 'Paramed'});
        this.mapContainer.addChild(i1);
        const i2 = new MapIcon({x: 2698, y: 1104, name: MAP_ICON.FOOD, label: 'Gastronomy'});
        this.mapContainer.addChild(i2);
        const i3 = new MapIcon({x: 2718, y: 1114, name: MAP_ICON.GUN_VENDOR, label: 'Guns'});
        this.mapContainer.addChild(i3);
        const i4 = new MapIcon({x: 2699, y: 1264, name: MAP_ICON.CLOTHES, label: 'Clothes'});
        this.mapContainer.addChild(i4);
        const i5 = new MapIcon({x: 2842, y: 1351, name: MAP_ICON.RIPPERDOC, label: 'Cassious'});
        this.mapContainer.addChild(i5);
        const i6 = new MapIcon({x: 2912, y: 1551, name: MAP_ICON.MED_POINT, label: 'Med'});
        this.mapContainer.addChild(i6);
        const i7 = new MapIcon({x: 3428, y: 1471, name: MAP_ICON.GUN_VENDOR, label: 'Guns'});
        this.mapContainer.addChild(i7);
        const ni1 = new MapIcon({x: 2708, y: 1122, name: MAP_ICON.PLACE, label: 'Cargo Bay'});
        this.fooIcon = ni1;
        this.mapContainer.addChild(ni1);
        const ni2 = new MapIcon({x: 2735, y: 1119, name: MAP_ICON.CHEST, label: 'Chest'});
        this.fooIcon = ni2;
        this.mapContainer.addChild(ni2);
        const ni3 = new MapIcon({x: 2744, y: 1179, name: MAP_ICON.THIEF, label: 'Thief'});
        this.fooIcon = ni3;
        this.mapContainer.addChild(ni3);
        const ni4 = new MapIcon({x: 2768, y: 1263, name: MAP_ICON.PSYCHO, label: 'Just Say No'});
        this.fooIcon = ni4;
        this.mapContainer.addChild(ni4);
        const ni5 = new MapIcon({x: 2813, y: 1302, name: MAP_ICON.PSYCHO, label: 'Vice control'});
        this.fooIcon = ni5;
        this.mapContainer.addChild(ni5);
        const ni6 = new MapIcon({x: 2732, y: 1431, name: MAP_ICON.SOS_MERC_NEEDED, label: 'Freedom of the Press'});
        this.fooIcon = ni6;
        this.mapContainer.addChild(ni6);
        const ni7 = new MapIcon({x: 2756, y: 1491, name: MAP_ICON.CHEST, label: 'Chest'});
        this.fooIcon = ni7;
        this.mapContainer.addChild(ni7);
        const ni8 = new MapIcon({x: 2831, y: 1455, name: MAP_ICON.BAR, label: 'Bar'});
        this.fooIcon = ni8;
        this.mapContainer.addChild(ni8);
        const ni9 = new MapIcon({x: 2816, y: 1416, name: MAP_ICON.PSYCHO, label: 'Where the Bodies Hit the Floor'});
        this.fooIcon = ni9;
        this.mapContainer.addChild(ni9);
        const ni10 = new MapIcon({x: 2810, y: 1395, name: MAP_ICON.FAST_TRAVEL, label: 'Fast travel'});
        this.fooIcon = ni10;
        this.mapContainer.addChild(ni10);
        const ni11 = new MapIcon({x: 2855, y: 1581, name: MAP_ICON.THIEF, label: 'MANY WAYS TO SKIN A CAT'});
        this.fooIcon = ni11;
        this.mapContainer.addChild(ni11);
        const ni12 = new MapIcon({x: 2864, y: 1593, name: MAP_ICON.PLACE, label: 'Revere Courier Services'});
        this.fooIcon = ni12;
        this.mapContainer.addChild(ni12);
        const ni13 = new MapIcon({x: 2894, y: 1275, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni13;
        this.mapContainer.addChild(ni13);
        const ni14 = new MapIcon({x: 2963, y: 1446, name: MAP_ICON.APARTMENT, label: 'Northside Apartment'});
        this.fooIcon = ni14;
        this.mapContainer.addChild(ni14);
        const ni15 = new MapIcon({x: 3020, y: 1449, name: MAP_ICON.FAST_TRAVEL, label: 'Martin St'});
        this.fooIcon = ni15;
        this.mapContainer.addChild(ni15);
        const ni16 = new MapIcon({x: 2987, y: 1470, name: MAP_ICON.SOS_MERC_NEEDED, label: 'FLIGHT OF THE CHEETAH'});
        this.fooIcon = ni16;
        this.mapContainer.addChild(ni16);
        const ni17 = new MapIcon({x: 2978, y: 1476, name: MAP_ICON.FAST_TRAVEL, label: 'Northside Apartment'});
        this.fooIcon = ni17;
        this.mapContainer.addChild(ni17);
        const ni18 = new MapIcon({x: 3068, y: 1494, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni18;
        this.mapContainer.addChild(ni18);
        const ni19 = new MapIcon({x: 3080, y: 1488, name: MAP_ICON.DROP_POINT, label: ''});
        this.fooIcon = ni19;
        this.mapContainer.addChild(ni19);
        const ni20 = new MapIcon({x: 3020, y: 1692, name: MAP_ICON.REPORTED_CRIME, label: 'DANGEROUS CURRENTS'});
        this.fooIcon = ni20;
        this.mapContainer.addChild(ni20);
        const ni21 = new MapIcon({x: 2975, y: 1662, name: MAP_ICON.AUTOFIXER_TERMINAL, label: ''});
        this.fooIcon = ni21;
        this.mapContainer.addChild(ni21);
        const ni22 = new MapIcon({x: 3014, y: 1629, name: MAP_ICON.AgentSaboteur, label: 'CATCH A TYGER’S TOE'});
        this.fooIcon = ni22;
        this.mapContainer.addChild(ni22);
        const ni23 = new MapIcon({x: 3050, y: 1626, name: MAP_ICON.FAST_TRAVEL, label: ''});
        this.fooIcon = ni23;
        this.mapContainer.addChild(ni23);
        const ni24 = new MapIcon({x: 3035, y: 1629, name: MAP_ICON.DROP_POINT, label: ''});
        this.fooIcon = ni24;
        this.mapContainer.addChild(ni24);
        const ni25 = new MapIcon({x: 3038, y: 1602, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni25;
        this.mapContainer.addChild(ni25);
        const ni26 = new MapIcon({x: 3158, y: 1410, name: MAP_ICON.SOS_MERC_NEEDED, label: 'OCCUPATIONAL HAZARD'});
        this.fooIcon = ni26;
        this.mapContainer.addChild(ni26);
        const ni27 = new MapIcon({x: 3095, y: 1323, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni27;
        this.mapContainer.addChild(ni27);
        const ni28 = new MapIcon({x: 3185, y: 1320, name: MAP_ICON.ASSAULT, label: 'NO LICENCE, NO PROBLEM'});
        this.fooIcon = ni28;
        this.mapContainer.addChild(ni28);
        const ni29 = new MapIcon({x: 2963, y: 1260, name: MAP_ICON.PSYCHO, label: 'Bloody Ritual'});
        this.fooIcon = ni29;
        this.mapContainer.addChild(ni29);
        const ni30 = new MapIcon({x: 2954, y: 1227, name: MAP_ICON.REPORTED_CRIME, label: 'NEEDLE IN A HAYSTACK'});
        this.fooIcon = ni30;
        this.mapContainer.addChild(ni30);
        const ni31 = new MapIcon({x: 2969, y: 1185, name: MAP_ICON.DROP_POINT, label: ''});
        this.fooIcon = ni31;
        this.mapContainer.addChild(ni31);
        const ni32 = new MapIcon({x: 3374, y: 1368, name: MAP_ICON.THIEF, label: 'SCROLLS BEFORE SWINE'});
        this.fooIcon = ni32;
        this.mapContainer.addChild(ni32);
        const ni33 = new MapIcon({x: 3365, y: 1326, name: MAP_ICON.REPORTED_CRIME, label: 'ONE THING LED TO ANOTHER'});
        this.fooIcon = ni33;
        this.mapContainer.addChild(ni33);
        const ni34 = new MapIcon({x: 3479, y: 1251, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni34;
        this.mapContainer.addChild(ni34);
        const ni35 = new MapIcon({x: 3572, y: 1212, name: MAP_ICON.FAST_TRAVEL, label: ''});
        this.fooIcon = ni35;
        this.mapContainer.addChild(ni35);
        const ni36 = new MapIcon({x: 3620, y: 1302, name: MAP_ICON.REPORTED_CRIME, label: ''});
        this.fooIcon = ni36;
        this.mapContainer.addChild(ni36);
        const ni37 = new MapIcon({x: 3731, y: 1398, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni37;
        this.mapContainer.addChild(ni37);
        const ni38 = new MapIcon({x: 3608, y: 1701, name: MAP_ICON.FAST_TRAVEL, label: 'East'});
        this.fooIcon = ni38;
        this.mapContainer.addChild(ni38);
        const ni39 = new MapIcon({x: 3593, y: 1635, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni39;
        this.mapContainer.addChild(ni39);
        const ni40 = new MapIcon({x: 3614, y: 1620, name: MAP_ICON.DROP_POINT, label: ''});
        this.fooIcon = ni40;
        this.mapContainer.addChild(ni40);
        const ni41 = new MapIcon({x: 3497, y: 1482, name: MAP_ICON.FAST_TRAVEL, label: ''});
        this.fooIcon = ni41;
        this.mapContainer.addChild(ni41);
        const ni42 = new MapIcon({x: 3455, y: 1470, name: MAP_ICON.LAND_MARK, label: 'All Foods Factory'});
        this.fooIcon = ni42;
        this.mapContainer.addChild(ni42);
        const ni43 = new MapIcon({x: 3482, y: 1467, name: MAP_ICON.DROP_POINT, label: ''});
        this.fooIcon = ni43;
        this.mapContainer.addChild(ni43);
        const ni44 = new MapIcon({x: 3143, y: 1155, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni44;
        this.mapContainer.addChild(ni44);
        const ni45 = new MapIcon({x: 3227, y: 1080, name: MAP_ICON.PSYCHO, label: 'Six Feet Under'});
        this.fooIcon = ni45;
        this.mapContainer.addChild(ni45);
        const ni46 = new MapIcon({x: 3053, y: 1089, name: MAP_ICON.THIEF, label: 'LOUSY KLEPPERS'});
        this.fooIcon = ni46;
        this.mapContainer.addChild(ni46);
        const ni47 = new MapIcon({x: 2942, y: 1050, name: MAP_ICON.LAND_MARK, label: 'The Docks'});
        this.fooIcon = ni47;
        this.mapContainer.addChild(ni47);
        const ni48 = new MapIcon({x: 2978, y: 990, name: MAP_ICON.LAND_MARK, label: 'Heavenmed'});
        this.fooIcon = ni48;
        this.mapContainer.addChild(ni48);
        const ni49 = new MapIcon({x: 2972, y: 984, name: MAP_ICON.THIEF, label: 'RITE OF PASSAGE'});
        this.fooIcon = ni49;
        this.mapContainer.addChild(ni49);
        const ni50 = new MapIcon({x: 2984, y: 963, name: MAP_ICON.FAST_TRAVEL, label: 'Ebunike Docks'});
        this.fooIcon = ni50;
        this.mapContainer.addChild(ni50);
        const ni51 = new MapIcon({x: 3107, y: 1029, name: MAP_ICON.DROP_POINT, label: ''});
        this.fooIcon = ni51;
        this.mapContainer.addChild(ni51);
        const ni52 = new MapIcon({x: 3146, y: 993, name: MAP_ICON.ASSAULT, label: ''});
        this.fooIcon = ni52;
        this.mapContainer.addChild(ni52);
        const ni53 = new MapIcon({x: 3131, y: 987, name: MAP_ICON.FAST_TRAVEL, label: 'Offshore St'});
        this.fooIcon = ni53;
        this.mapContainer.addChild(ni53);
        const ni54 = new MapIcon({
            x: 3224, y: 711,
            name: MAP_ICON.REPORTED_CRIME,
            label: 'DON’T FORGET THE PARKING BRAKE!'
        });
        this.fooIcon = ni54;
        this.mapContainer.addChild(ni54);
        const ni55 = new MapIcon({
            x: 2939, y: 867,
            name: MAP_ICON.LAND_MARK,
            label: 'EBUNIKE'
        });
        this.fooIcon = ni55;
        this.mapContainer.addChild(ni55);

        // littlechina
        const i8 = new MapIcon({x: 2949, y: 1784, name: MAP_ICON.MED_POINT, label: 'Med'});
        this.mapContainer.addChild(i8);
        const i9 = new MapIcon({x: 3014, y: 2052, name: MAP_ICON.MELEE_VENDOR, label: 'Melee'});
        this.mapContainer.addChild(i9);
        const i10 = new MapIcon({x: 3002, y: 2062, name: MAP_ICON.GUN_VENDOR, label: 'Guns'});
        this.mapContainer.addChild(i10);
        const i11 = new MapIcon({x: 2830, y: 2108, name: MAP_ICON.MED_POINT, label: 'Med'});
        this.mapContainer.addChild(i11);
        const i12 = new MapIcon({x: 2938, y: 2121, name: MAP_ICON.RIPPERDOC, label: 'Ripperdoc'});
        this.mapContainer.addChild(i12);
        const i13 = new MapIcon({x: 2668, y: 2181, name: MAP_ICON.FOOD, label: 'Food'});
        this.mapContainer.addChild(i13);
        // Kabuki
        const i14 = new MapIcon({x: 3286, y: 1981, name: MAP_ICON.JUNK, label: 'Junk'});
        this.mapContainer.addChild(i14);
        const i15 = new MapIcon({x: 3269, y: 1978, name: MAP_ICON.RIPPERDOC, label: 'Ripperdoc'});
        this.mapContainer.addChild(i15);
        const i16 = new MapIcon({x: 3199, y: 1882, name: MAP_ICON.FIXER, label: 'Fixer'});
        this.mapContainer.addChild(i16);
        const i17 = new MapIcon({x: 3220, y: 1776, name: MAP_ICON.CLOTHES, label: 'Clothes'});
        this.mapContainer.addChild(i17);
        const i18 = new MapIcon({x: 3320, y: 1782, name: MAP_ICON.FOOD, label: 'Food'});
        this.mapContainer.addChild(i18);
        const i19 = new MapIcon({x: 3330, y: 1746, name: MAP_ICON.MED_POINT, label: 'Med'});
        this.mapContainer.addChild(i19);
        const i20 = new MapIcon({x: 3138, y: 1643, name: MAP_ICON.RIPPERDOC, label: 'Ripperdoc'});
        this.mapContainer.addChild(i20);
        const i21 = new MapIcon({x: 3148, y: 1617, name: MAP_ICON.FOOD, label: 'Food'});
        this.mapContainer.addChild(i21);
        const i22 = new MapIcon({x: 3154, y: 1569, name: MAP_ICON.GUN_VENDOR, label: 'Gun'});
        this.mapContainer.addChild(i22);
        const i23 = new MapIcon({x: 3184, y: 1573, name: MAP_ICON.RIPPERDOC, label: 'Netrunner'});
        this.mapContainer.addChild(i23);
        const i24 = new MapIcon({x: 3194, y: 1591, name: MAP_ICON.FOOD, label: 'Food'});
        this.mapContainer.addChild(i24);
        const i25 = new MapIcon({x: 3240, y: 1503, name: MAP_ICON.RIPPERDOC, label: 'Ripperdoc'});
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