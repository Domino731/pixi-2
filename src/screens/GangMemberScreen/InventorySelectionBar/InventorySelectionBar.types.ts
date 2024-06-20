import { InventorySectionUnion } from '../GangMemberScreen.const';

export interface InventorySelectionBarOptions {
    x: number;
    y: number;
    onChange: (v: InventorySectionUnion) => void;
}