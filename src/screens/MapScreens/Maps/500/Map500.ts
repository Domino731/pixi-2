import { MapFactory } from '../MapFactory';
import { texturePathsMap500 } from './Map500.const';

export class Map500 extends MapFactory {
    constructor() {
        super({
            tilesPaths: texturePathsMap500,
            tilesHeight: 4,
            tilesWidth: 4,
        });
    }
}