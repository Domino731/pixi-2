import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { GAME } from '../../../../configs/game';
import { MapFactoryOptions } from './MapFactory.types';

const TILE_SIZE = 256;

export class MapFactory extends Container {
    private readonly tilesWidth: MapFactoryOptions['tilesWidth'];
    private readonly tilesHeight: MapFactoryOptions['tilesHeight'];
    private readonly tilesPaths: MapFactoryOptions['tilesPaths'];
    private readonly mapContainer: Container;
    private isDragging: boolean = false;
    private lastMousePosition: { x: number, y: number } = { x: 0, y: 0 };

    constructor({ tilesWidth, tilesPaths, tilesHeight }: MapFactoryOptions) {
        super();
        this.mapContainer = new Container();
        this.tilesWidth = tilesWidth;
        this.tilesHeight = tilesHeight;
        this.tilesPaths = tilesPaths;
        this.setBackground();
        this.position.set(0, 0);
        this.setGraphics();

        // Add mouse event listeners
        this.mapContainer.interactive = true;
        this.mapContainer.on('pointerdown', this.onPointerDown);
        this.mapContainer.on('pointerup', this.onPointerUp);
        this.mapContainer.on('pointerupoutside', this.onPointerUp);
        this.mapContainer.on('pointermove', this.onPointerMove);
    }

    private onPointerDown = (event: PIXI.InteractionEvent) => {
        this.isDragging = true;
        this.lastMousePosition = event.data.global.clone();
    };

    private onPointerUp = () => {
        this.isDragging = false;
    };

    private onPointerMove = (event: PIXI.InteractionEvent) => {
        if (this.isDragging) {
            const newPosition = event.data.global;
            const deltaX = newPosition.x - this.lastMousePosition.x;
            const deltaY = newPosition.y - this.lastMousePosition.y;
            this.mapContainer.position.x += deltaX;
            this.mapContainer.position.y += deltaY;
            this.lastMousePosition = newPosition.clone();
        }
    };

    private addTile(texturePath: string, x: number, y: number) {
        const tile = new Sprite(Texture.from(texturePath));
        tile.position.set(x, y);
        this.mapContainer.addChild(tile);
    }

    private setBackground() {
        const background = new Graphics();
        background.beginFill(GAME.MAP_BACKGROUND_COLOR);
        background.drawRect(0, 0, GAME.WINDOW_WIDTH, GAME.WINDOW_HEIGHT);
        background.endFill();
        this.addChild(background);
    }

    private setGraphics() {
        this.addChild(this.mapContainer);

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
            this.addTile(this.tilesPaths[i], x, y);
        }
    }
}