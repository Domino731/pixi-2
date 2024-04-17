import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { GAME } from '../../../../../configs/game';

const TILE_SIZE = 256;

export class Map500 extends Container {
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
            [0, 0], [TILE_SIZE - 1, 0], [TILE_SIZE * 2 - 2, 0], [TILE_SIZE * 3 - 3, 0],
            [0, TILE_SIZE - 1], [TILE_SIZE - 1, TILE_SIZE - 1], [TILE_SIZE * 2 - 2, TILE_SIZE - 1], [TILE_SIZE * 3 - 3, TILE_SIZE - 1],
            [0, TILE_SIZE * 2 - 2], [TILE_SIZE - 1, TILE_SIZE * 2 - 2], [TILE_SIZE * 2 - 2, TILE_SIZE * 2 - 2], [TILE_SIZE * 3 - 3, TILE_SIZE * 2 - 2],
            [0, TILE_SIZE * 3 - 3], [TILE_SIZE - 1, TILE_SIZE * 3 - 3], [TILE_SIZE * 2 - 2, TILE_SIZE * 3 - 3], [TILE_SIZE * 3 - 3, TILE_SIZE * 3 - 3],
        ];
        const texturePaths = [
            'map/500/1',
            'map/500/2',
            'map/500/3',
            'map/500/4',

            'map/500/5',
            'map/500/6',
            'map/500/7',
            'map/500/8',

            'map/500/9',
            'map/500/10',
            'map/500/11',
            'map/500/12',

            'map/500/13',
            'map/500/14',
            'map/500/15',
            'map/500/16',
        ];

        for (let i = 0; i < positions.length; i++) {
            const [x, y] = positions[i];
            this.addTile(texturePaths[i], x, y);
        }
    }
}