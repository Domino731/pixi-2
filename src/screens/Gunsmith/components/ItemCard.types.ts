import { ItemRarityUnion } from '../../../config/types';
import { FederatedPointerEvent } from 'pixi.js';

export enum ITEM_CARD_SIZE {
    lg = 'lg',
    md = 'md',
    sm = 'sm'
}

export type ItemCardSizeUnion = keyof typeof ITEM_CARD_SIZE;

export interface ItemCardOptions {
    x: number;
    y: number;
    rarity: ItemRarityUnion;
    onPointerOver: (e: FederatedPointerEvent) => void;
    onPointerLeave: (e: FederatedPointerEvent) => void;
    onClick: (e: FederatedPointerEvent) => void;
    size: ItemCardSizeUnion;
    item: ItemCardItem;
    isMarked: boolean;
}

export interface ItemCardItem {
    label: string;
}