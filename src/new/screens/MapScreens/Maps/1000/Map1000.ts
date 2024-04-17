import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { GAME } from '../../../../../configs/game';

const TILE_SIZE = 256;

export class Map1000 extends Container {
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
            // 1st row
            [0, 0], [TILE_SIZE, 0], [TILE_SIZE * 2, 0], [TILE_SIZE * 3, 0], [TILE_SIZE * 4, 0], [TILE_SIZE * 5, 0], [TILE_SIZE * 6, 0], [TILE_SIZE * 7, 0],
            // 2nd row
            [0, TILE_SIZE], [TILE_SIZE, TILE_SIZE], [TILE_SIZE * 2, TILE_SIZE], [TILE_SIZE * 3, TILE_SIZE], [TILE_SIZE * 4, TILE_SIZE], [TILE_SIZE * 5, TILE_SIZE], [TILE_SIZE * 6, TILE_SIZE], [TILE_SIZE * 7, TILE_SIZE],
            // 3rd row
            [0, TILE_SIZE * 2], [TILE_SIZE, TILE_SIZE * 2], [TILE_SIZE * 2, TILE_SIZE * 2], [TILE_SIZE * 3, TILE_SIZE * 2], [TILE_SIZE * 4, TILE_SIZE * 2], [TILE_SIZE * 5, TILE_SIZE * 2], [TILE_SIZE * 6, TILE_SIZE * 2], [TILE_SIZE * 7, TILE_SIZE * 2],
            // 4th row
            [0, TILE_SIZE * 3], [TILE_SIZE, TILE_SIZE * 3], [TILE_SIZE * 2, TILE_SIZE * 3], [TILE_SIZE * 3, TILE_SIZE * 3], [TILE_SIZE * 4, TILE_SIZE * 3], [TILE_SIZE * 5, TILE_SIZE * 3], [TILE_SIZE * 6, TILE_SIZE * 3], [TILE_SIZE * 7, TILE_SIZE * 3],
            // 5th row
            [0, TILE_SIZE * 4], [TILE_SIZE, TILE_SIZE * 4], [TILE_SIZE * 2, TILE_SIZE * 4], [TILE_SIZE * 3, TILE_SIZE * 4], [TILE_SIZE * 4, TILE_SIZE * 4], [TILE_SIZE * 5, TILE_SIZE * 4], [TILE_SIZE * 6, TILE_SIZE * 4], [TILE_SIZE * 7, TILE_SIZE * 4],
            // 6th row
            [0, TILE_SIZE * 5], [TILE_SIZE, TILE_SIZE * 5], [TILE_SIZE * 2, TILE_SIZE * 5], [TILE_SIZE * 3, TILE_SIZE * 5], [TILE_SIZE * 4, TILE_SIZE * 5], [TILE_SIZE * 5, TILE_SIZE * 5], [TILE_SIZE * 6, TILE_SIZE * 5], [TILE_SIZE * 7, TILE_SIZE * 5],
            // 7th row
            [0, TILE_SIZE * 6], [TILE_SIZE, TILE_SIZE * 6], [TILE_SIZE * 2, TILE_SIZE * 6], [TILE_SIZE * 3, TILE_SIZE * 6], [TILE_SIZE * 4, TILE_SIZE * 6], [TILE_SIZE * 5, TILE_SIZE * 6], [TILE_SIZE * 6, TILE_SIZE * 6], [TILE_SIZE * 7, TILE_SIZE * 6],
            // 8th row
            [0, TILE_SIZE * 7], [TILE_SIZE, TILE_SIZE * 7], [TILE_SIZE * 2, TILE_SIZE * 7], [TILE_SIZE * 3, TILE_SIZE * 7], [TILE_SIZE * 4, TILE_SIZE * 7], [TILE_SIZE * 5, TILE_SIZE * 7], [TILE_SIZE * 6, TILE_SIZE * 7], [TILE_SIZE * 7, TILE_SIZE * 7],
        ];
        const texturePaths = [
            // 1st row
            'map/1000/1-1',
            'map/1000/1-2',
            'map/1000/1-3',
            'map/1000/1-4',
            'map/1000/1-5',
            'map/1000/1-6',
            'map/1000/1-7',
            'map/1000/1-8',
            // 2nd row
            'map/1000/2-1',
            'map/1000/2-2',
            'map/1000/2-3',
            'map/1000/2-4',
            'map/1000/2-5',
            'map/1000/2-6',
            'map/1000/2-7',
            'map/1000/2-8',
            // 3rd row
            'map/1000/3-1',
            'map/1000/3-2',
            'map/1000/3-3',
            'map/1000/3-4',
            'map/1000/3-5',
            'map/1000/3-6',
            'map/1000/3-7',
            'map/1000/3-8',
            // 4th row
            'map/1000/4-1',
            'map/1000/4-2',
            'map/1000/4-3',
            'map/1000/4-4',
            'map/1000/4-5',
            'map/1000/4-6',
            'map/1000/4-7',
            'map/1000/4-8',
            // 5th row
            'map/1000/5-1',
            'map/1000/5-2',
            'map/1000/5-3',
            'map/1000/5-4',
            'map/1000/5-5',
            'map/1000/5-6',
            'map/1000/5-7',
            'map/1000/5-8',
            // 6th row
            'map/1000/6-1',
            'map/1000/6-2',
            'map/1000/6-3',
            'map/1000/6-4',
            'map/1000/6-5',
            'map/1000/6-6',
            'map/1000/6-7',
            'map/1000/6-8',
            // 7th row
            'map/1000/7-1',
            'map/1000/7-2',
            'map/1000/7-3',
            'map/1000/7-4',
            'map/1000/7-5',
            'map/1000/7-6',
            'map/1000/7-7',
            'map/1000/7-8',
            // 8th row
            'map/1000/8-1',
            'map/1000/8-2',
            'map/1000/8-3',
            'map/1000/8-4',
            'map/1000/8-5',
            'map/1000/8-6',
            'map/1000/8-7',
            'map/1000/8-8',
        ];

        for (let i = 0; i < positions.length; i++) {
            const [x, y] = positions[i];
            this.addTile(texturePaths[i], x, y);
        }
    }
}