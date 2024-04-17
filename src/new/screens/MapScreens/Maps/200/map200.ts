import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { GAME } from '../../../../../configs/game';

const TILE_WIDTH = 256;

export class Map200 extends Container {
    constructor() {
        super();
        this.position.set(0, 0);
        this.setBackground();
        this.setGraphics();
    }

    private addTile(texturePath: string, x: number, y: number) {
        const tile = new Sprite(Texture.from(texturePath));
        const graphics = new Graphics();
        graphics.addChild(tile);
        graphics.position.set(x, y);
        this.addChild(graphics);
    }

    private setBackground() {
        const background = new Graphics();
        background.beginFill(GAME.MAP_BACKGROUND_COLOR);
        background.drawRect(0, 0, GAME.WINDOW_WIDTH, GAME.WINDOW_HEIGHT);
        background.endFill();
        this.addChild(background);
    }

    private setGraphics() {
        const positions = [
            [0, 0],
            [TILE_WIDTH - 1, 0],
            [0, TILE_WIDTH - 1],
            [TILE_WIDTH - 1, TILE_WIDTH - 1],
        ];
        const texturePaths = [
            'map/200/1',
            'map/200/2',
            'map/200/3',
            'map/200/4',
        ];

        for (let i = 0; i < positions.length; i++) {
            const [x, y] = positions[i];
            this.addTile(texturePaths[i], x, y);
        }
    }
}