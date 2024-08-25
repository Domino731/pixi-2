import {GAME_COLORS} from '../../../../config/styles';
import {MapIcon} from '../../components/MapIcon/MapIcon';
import {MAP_ICON} from '../../components/MapIcon/MapIcon.const';
import {MapFactory} from '../MapFactory';
import {texturePathsMap4000} from './Map4000.const';
import {Container, Graphics, Text} from 'pixi.js';

export class Map4000 extends MapFactory {
    private fooIcon: Container = null;
    private currentLine: Container = new Container();
    private currentCords = [
        3340, 853,
        2480, 1061];

    constructor() {
        super({
            tilesPaths: texturePathsMap4000,
            tilesWidth: 30,
            tilesHeight: 30,
        });
        this.addChild(this.currentLine)
        this.mapContainer.addChild(this.currentLine);
        // this.setDistricts();
        // this.iconMove();
        this.lineMove();
        this.setWatsonDistrict();
    }

    private lineMove() {
        const velocity = 1;

        window.addEventListener("keydown", (event) => {
            let lastPointY = this.currentCords[this.currentCords.length - 1];
            let lastPointX = this.currentCords[this.currentCords.length - 2];
            switch (event.key) {
                case "ArrowUp":
                    lastPointY -= velocity;
                    break;
                case "ArrowDown":
                    lastPointY += velocity;
                    break;
                case "ArrowLeft":
                    lastPointX -= velocity
                    break;
                case "ArrowRight":
                    lastPointX += velocity;
                    break;
                default:
                    console.log(`Key pressed: ${event.key}`);
            }
            this.currentCords[this.currentCords.length - 1] = lastPointY;
            this.currentCords[this.currentCords.length - 2] = lastPointX;
            this.setWatsonDistrict();
        });
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

    private setWatsonDistrict() {
        this.currentLine.removeChildren();
        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(3, 'red');
        g.drawPolygon(this.currentCords);
        g.endFill();

        this.currentLine.addChild(g);
    }

    private setDistricts() {
        this.setWatsonDistrict();
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