import { MapFactory } from '../MapFactory';
import { texturePathsMap1000 } from './Map1000.const';

export class Map1000 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap1000,
            tilesWidth: 8,
            tilesHeight: 8,
        });
    }
}