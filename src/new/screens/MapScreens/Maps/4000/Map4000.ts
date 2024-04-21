import { MapFactory } from '../MapFactory';
import { texturePathsMap4000 } from './Map4000.const';

export class Map4000 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap4000,
            tilesWidth: 29,
            tilesHeight: 8,
        });
    }
}