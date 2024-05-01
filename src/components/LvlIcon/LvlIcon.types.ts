import { LvlIconUnion } from './LvlIcon.const';

export interface LvlIconOptions {
    x: number;
    y: number;
    lvl: number;
    variant: LvlIconUnion;
    graphicsStyle: 1 | 2;
}