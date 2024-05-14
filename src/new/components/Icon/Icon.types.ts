import { ICONS } from './Icon.const';

export interface IconOptions {
    name: keyof typeof ICONS;
    width?: number;
    height?: number;
    tint?: string;
}