import { FederatedPointerEvent } from 'pixi.js';
import { ItemCard } from '../../Gunsmith/components/ItemCard';
import { GangMemberInventoryData } from '../GangMemberScreen.types';

export interface InventoryOptions {
    x: number;
    y: number;
    onInventoryItemHover: (e: FederatedPointerEvent, itemCard: ItemCard) => void;
    onInventoryItemPointerLeave: (e: FederatedPointerEvent, itemCard: ItemCard) => void;
    inventoryItems: GangMemberInventoryData;
}