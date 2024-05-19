import { MAP_ICON, MAP_ICON_VARIANTS } from './MapIcon.const';

export interface MapIconOptions {
    x: number;
    y: number;
    variant?: MapIconVariantsUnion;
    name: MapIconUnion;
    label: string;
}

export type MapIconVariantsUnion = keyof typeof MAP_ICON_VARIANTS;
export type MapIconUnion = keyof typeof MAP_ICON;