import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { GAME } from '../../../../../configs/game';
import { texturePathsMap2000 } from './texturePaths';

const TILE_SIZE = 256;

export class Map2000 extends Container {
    constructor() {
        super();
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
        for (let row = 0; row < 15; row++) {
            for (let col = 0; col < 15; col++) {
                positions.push([col * TILE_SIZE, row * TILE_SIZE]);
            }
        }

        // Add tiles
        for (let i = 0; i < positions.length; i++) {
            const [x, y] = positions[i];
            this.addTile(texturePathsMap2000[i], x, y, tileContainer);
        }
    }
}