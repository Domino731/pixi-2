import {GAME_COLORS} from '../../../../config/styles';
import {MapFactory} from '../MapFactory';
import {
    ArasakaShorelineLineCords,
    Arroro,
    CentreCords,
    CorporatePlaza,
    DowntownCords,
    Glen,
    HeywoodDistrictCords,
    KabukiLineCords,
    LittleChinaLineCords, MorroRock,
    NorthsideCords, RanchoCoronado,
    SantoDomingo,
    texturePathsMap4000,
    VistalDelRay,
    WatsonDistrictLineCords,
    Wellsprings
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
    private currentCords = [
        713, 2110,
        2062, 2110,
        2321, 2276,
        2321, 2431,
        2063, 2863,
        1424, 3453,
        718, 3442,
        588, 3294,
        588, 2257
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
            this.setMorroRock();
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