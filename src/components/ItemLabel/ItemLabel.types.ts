import { FederatedPointerEvent } from 'pixi.js';

export interface ItemLabelOptions {
    x: number;
    y: number;
    onPointerLeave: (e: FederatedPointerEvent) => void;
    onPointerOver: (e: FederatedPointerEvent) => void;
}