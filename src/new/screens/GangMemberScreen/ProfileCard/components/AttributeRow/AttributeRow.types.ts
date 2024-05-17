import { IconsUnion } from '../../../../../components/Icon/Icon.const';

export interface AttributeRowOptions {
    x: number;
    y: number;
    width: number;
    attributeName: string;
    icon?: IconsUnion;
    count: number;
}