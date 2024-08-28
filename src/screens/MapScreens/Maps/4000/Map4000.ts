import {GAME_COLORS} from '../../../../config/styles';
import {MapFactory} from '../MapFactory';
import {
    ArasakaShorelineLineCords, KabukiLineCords,
    LittleChinaLineCords, NorthsideCords,
    texturePathsMap4000,
    WatsonDistrictLineCords
} from './Map4000.const';
import {Container, Graphics, Text} from 'pixi.js';

export class Map4000 extends MapFactory {
    private fooIcon: Container = null;
    private currentLine: Container = new Container();
    private watsonDistrictContainer: Container = new Container();
    private centreDistrictContainer: Container = new Container();
    private arasakaShoreLine: Container = new Container();
    private littleChinaContainer: Container = new Container();
    private kabukiContainer: Container = new Container();
    private northsideContainer: Container = new Container();

    private currentCords = [
        2403, 2467,
        2591, 2614
    ]

    constructor() {
        super({
            tilesPaths: texturePathsMap4000,
            tilesWidth: 30,
            tilesHeight: 30,
        });
        this.addChild(this.currentLine)
        this.mapContainer.addChild(this.currentLine);
        this.mapContainer.addChild(this.arasakaShoreLine);
        this.mapContainer.addChild(this.littleChinaContainer);
        this.mapContainer.addChild(this.kabukiContainer);
        this.mapContainer.addChild(this.northsideContainer);
        this.mapContainer.addChild(this.watsonDistrictContainer);
        this.mapContainer.addChild(this.watsonDistrictContainer);
        this.mapContainer.addChild(this.centreDistrictContainer);
        this.lineMove();
        this.setWatsonDistrict();
        this.setArasakaShoreline();
        this.setLittleChinaBorder();
        this.setKabukiBorder();
        this.setNorthsideBorder();
        this.setCentreDistrict();
    }

    private lineMove() {
        const velocity = 1;

        window.addEventListener("keydown", (event) => {
            let lastPointY = this.currentCords[this.currentCords.length - 1];
            let lastPointX = this.currentCords[this.currentCords.length - 2];
            console.log(event.key);
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
                case "Enter":
                    console.log(this.currentCords[this.currentCords.length - 2], this.currentCords[this.currentCords.length - 1])
                    break;
                default:
                    console.log(`Key pressed: ${event.key}`);
            }
            this.currentCords[this.currentCords.length - 1] = lastPointY;
            this.currentCords[this.currentCords.length - 2] = lastPointX;
            this.setCentreDistrict();
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

    // DISTRICTS
    private setWatsonDistrict() {
        this.watsonDistrictContainer.removeChildren();
        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(3, 'red');
        g.drawPolygon(WatsonDistrictLineCords);
        g.endFill();

        this.watsonDistrictContainer.addChild(g);
    }

    private setCentreDistrict() {
        this.centreDistrictContainer.removeChildren();
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

        this.centreDistrictContainer.addChild(g);
    }


    private setDistricts() {
        this.setWatsonDistrict();
    }


    private setArasakaShoreline() {
        this.arasakaShoreLine.removeChildren();
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon(ArasakaShorelineLineCords);
        g.endFill();

        const text = new Text('Arasaka waterfront', {
            fill: 'white',
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 18,
        });
        text.position.set(2270, 1400);
        g.addChild(text);
        this.arasakaShoreLine.addChild(g);
    }

    private setLittleChinaBorder() {
        this.littleChinaContainer.removeChildren();
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon(LittleChinaLineCords);
        g.endFill();

        const text = new Text('Little china', {
            fill: 'white',
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 18,
        });
        text.position.set(2840, 2080);
        g.addChild(text);

        this.littleChinaContainer.addChild(g);
    }

    private setKabukiBorder() {
        this.kabukiContainer.removeChildren();
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon(KabukiLineCords);
        g.endFill();

        const text = new Text('Kabuki', {
            fill: 'white',
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 18,
        });
        text.position.set(3260, 1900);
        g.addChild(text);
        this.kabukiContainer.addChild(g);
    }

    private setNorthsideBorder() {
        this.northsideContainer.removeChildren();
        const g = new Graphics();
        g.beginFill(0xFF0000, 0);
        g.lineStyle(3, 'red');
        g.drawPolygon(
            NorthsideCords
        );
        g.endFill();

        const text = new Text('Northside', {
            fill: 'white',
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 18,
        });
        text.position.set(3170, 1100);
        g.addChild(text);

        this.northsideContainer.addChild(g);
    }

}