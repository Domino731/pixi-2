import { MapFactory } from '../MapFactory';
import { texturePathsMap2000 } from './Map2000.const';

export class Map2000 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap2000,
            tilesHeight: 15,
            tilesWidth: 15,
        });
    }
}