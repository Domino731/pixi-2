import { MapFactory } from '../MapFactory';
import { texturePathsMap200 } from './Map200.const';

export class Map200 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap200,
            tilesWidth: 2,
            tilesHeight: 2,
        });
    }
}