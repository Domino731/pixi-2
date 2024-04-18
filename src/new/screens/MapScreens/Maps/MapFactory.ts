import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { GAME } from '../../../../configs/game';
import { MapFactoryOptions } from './MapFactory.types';

const TILE_SIZE = 256;

export class MapFactory extends Container {
    private readonly tilesWidth: MapFactoryOptions['tilesWidth'];
    private readonly tilesHeight: MapFactoryOptions['tilesHeight'];
    private readonly tilesPaths: MapFactoryOptions['tilesPaths'];

    constructor({ tilesWidth, tilesPaths, tilesHeight }: MapFactoryOptions) {
        super();
        this.tilesWidth = tilesWidth;
        this.tilesHeight = tilesHeight;
        this.tilesPaths = tilesPaths;
        this.setBackground();
        this.position.set(0, 0);
        this.setGraphics();
    }

    private addTile(texturePath: string, x: number, y: number, container: Container) {
        const tile = new Sprite(Texture.from(texturePath));
        tile.position.set(x, y);
        container.addChild(tile);
    }

    private setBackground() {
        const background = new Graphics();
        background.beginFill(GAME.MAP_BACKGROUND_COLOR);
        background.drawRect(0, 0, GAME.WINDOW_WIDTH, GAME.WINDOW_HEIGHT);
        background.endFill();
        this.addChild(background);
    }

    private setGraphics() {
        // Create a single container for all tiles
        const tileContainer = new Container();
        this.addChild(tileContainer);

        // Pre-calculate tile positions
        const positions = [];
        for (let row = 0; row < this.tilesWidth; row++) {
            for (let col = 0; col < this.tilesHeight; col++) {
                positions.push([col * TILE_SIZE - col, row * TILE_SIZE - row]);
            }
        }

        // Add tiles
        for (let i = 0; i < positions.length; i++) {
            const [x, y] = positions[i];
            this.addTile(this.tilesPaths[i], x, y, tileContainer);
        }
    }
}