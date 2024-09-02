import {GAME_COLORS} from '../../../../config/styles';
import {MapFactory} from '../MapFactory';
import {
    ArasakaShorelineLineCords,
    Arroro,
    CentreCords, CharterHill,
    CorporatePlaza,
    DowntownCords,
    Glen,
    HeywoodDistrictCords, Japantown,
    KabukiLineCords,
    LittleChinaLineCords, MorroRock, Northoak,
    NorthsideCords, RanchoCoronado,
    SantoDomingo,
    texturePathsMap4000,
    VistalDelRay,
    WatsonDistrictLineCords,
    Wellsprings, Westbrook
} from './Map4000.const';
import {Container, Graphics, Text} from 'pixi.js';

export class Map4000 extends MapFactory {
    private fooIcon: Container = null;
    private currentLine: Container = new Container();
    private watsonDistrictContainer: Container = new Container();
    private centreDistrictContainer: Container = new Container();
    private heywoodDistrictContainer: Container = new Container();
    private arasakaShoreLine: Container = new Container();
    private littleChinaContainer: Container = new Container();
    private kabukiContainer: Container = new Container();
    private northsideContainer: Container = new Container();
    private downtownContainer: Container = new Container();
    private corporatePlaza: Container = new Container();
    private vistaDelRayContainer = new Container();
    private wellspringsContainer = new Container();
    private glenContainer = new Container();
    private santoDomingoContainer = new Container();
    private arroyoContainer = new Container();
    private ranchoCoronadoContainer = new Container();
    private morroRockContainer = new Container();
    private westbrookContainer = new Container();
    private japantownContainer = new Container();
    private northoakContainer = new Container();
    private charterHillContainer = new Container();
    private currentCords = [
        4204, 2607,
        4204, 2607,
        4299, 2740,
        4404, 2810,
        4613, 2824,
        4846, 3073,
        5015, 3462,
        4904, 3353,
        4538, 3412,
        4440, 3392,
        4142, 3179,
        4117, 3204,
        3987, 3107,
        3969, 3074,
        4112, 2679,
        4095, 2655,
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
        this.mapContainer.addChild(this.heywoodDistrictContainer);
        this.mapContainer.addChild(this.downtownContainer);
        this.mapContainer.addChild(this.corporatePlaza);
        this.mapContainer.addChild(this.vistaDelRayContainer);
        this.mapContainer.addChild(this.wellspringsContainer);
        this.mapContainer.addChild(this.glenContainer);
        this.mapContainer.addChild(this.santoDomingoContainer);
        this.mapContainer.addChild(this.arroyoContainer);
        this.mapContainer.addChild(this.ranchoCoronadoContainer);
        this.mapContainer.addChild(this.morroRockContainer);
        this.mapContainer.addChild(this.westbrookContainer);
        this.mapContainer.addChild(this.japantownContainer);
        this.mapContainer.addChild(this.northoakContainer);
        this.mapContainer.addChild(this.charterHillContainer);
        this.lineMove();
        this.setWatsonDistrict();
        this.setArasakaShoreline();
        this.setLittleChinaBorder();
        this.setKabukiBorder();
        this.setNorthsideBorder();
        this.setCentreDistrict();
        this.setHeywoodDistrict();
        this.setDowntown();
        this.setCorporatePlaza();
        this.setVistaDelRay();
        this.setWellsprings();
        this.setGlen();
        this.setSantoDomingo();
        this.setArroyo();
        this.setRanchoCoronado();
        this.setMorroRock();
        this.setWestbrookDistrict();
        this.setJapantown();
        this.setNorthoak();
        this.setCharterHill();
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
            this.setCharterHill();
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

    private setCharterHill() {
        this.charterHillContainer.removeChildren();
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(1, 'red');
        g.drawPolygon(CharterHill);
        g.endFill();

        this.charterHillContainer.addChild(g);
    }

    private setNorthoak() {
        this.northoakContainer.removeChildren();
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(1, 'red');
        g.drawPolygon(Northoak);
        g.endFill();

        this.northoakContainer.addChild(g);
    }

    private setJapantown() {
        this.japantownContainer.removeChildren();
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(1, 'red');
        g.drawPolygon(Japantown);
        g.endFill();

        this.japantownContainer.addChild(g);
    }

    private setWestbrookDistrict() {
        this.westbrookContainer.removeChildren();
        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(3, 'red');
        g.drawPolygon(Westbrook);
        g.endFill();

        this.westbrookContainer.addChild(g);
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
        g.drawPolygon(CentreCords);
        g.endFill();

        this.centreDistrictContainer.addChild(g);
    }

    private setHeywoodDistrict() {
        this.heywoodDistrictContainer.removeChildren();
        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(3, 'red');
        g.drawPolygon(HeywoodDistrictCords);
        g.endFill();

        this.heywoodDistrictContainer.addChild(g);
    }

    private setDowntown() {
        this.downtownContainer.removeChildren();
        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(3, 'red');
        g.drawPolygon(DowntownCords);
        g.endFill();

        this.downtownContainer.addChild(g);
    }

    private setCorporatePlaza() {
        this.corporatePlaza.removeChildren();
        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(3, 'red');
        g.drawPolygon(CorporatePlaza);
        g.endFill();

        this.corporatePlaza.addChild(g);
    }

    private setVistaDelRay() {
        this.vistaDelRayContainer.removeChildren();
        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(2, 'red');
        g.drawPolygon(VistalDelRay);
        g.endFill();

        this.vistaDelRayContainer.addChild(g);
    }

    private setWellsprings() {
        this.wellspringsContainer.removeChildren();
        const text = new Text('Watson', {
            fill: GAME_COLORS.yellow,
            stroke: GAME_COLORS.black2,
            strokeThickness: 2,
            fontSize: 22,
        });
        const g = new Graphics();

        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(1, 'red');
        g.drawPolygon(Wellsprings);
        g.endFill();

        this.wellspringsContainer.addChild(g);
    }

    private setGlen() {
        this.glenContainer.removeChildren();
        const g = new Graphics();
        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(1, 'red');
        g.drawPolygon(Glen);
        g.endFill();
        this.glenContainer.addChild(g);
    }

    private setSantoDomingo() {
        this.santoDomingoContainer.removeChildren();
        const g = new Graphics();
        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(3, 'red');
        g.drawPolygon(SantoDomingo);
        g.endFill();
        this.santoDomingoContainer.addChild(g);
    }

    private setArroyo() {
        this.arroyoContainer.removeChildren();
        const g = new Graphics();
        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(1, 'red');
        g.drawPolygon(Arroro);
        g.endFill();
        this.arroyoContainer.addChild(g);
    }

    private setRanchoCoronado() {
        this.ranchoCoronadoContainer.removeChildren();
        const g = new Graphics();
        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(1, 'red');
        g.drawPolygon(RanchoCoronado);
        g.endFill();
        this.ranchoCoronadoContainer.addChild(g);
    }

    private setMorroRock() {
        this.morroRockContainer.removeChildren();
        const g = new Graphics();
        g.beginFill(...GAME_COLORS.transparent)
        g.lineStyle(3, 'red');
        g.drawPolygon(MorroRock);
        g.endFill();
        this.morroRockContainer.addChild(g);
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