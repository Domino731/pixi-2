import { GAME_COLORS } from '../../const/styles';

export enum LVL_ICON_VARIANT {
    OVERALL = 'OVERALL',
    POWER = 'POWER'
}

export type LvlIconVariantUnion = keyof typeof LVL_ICON_VARIANT;

export const LvlIconColorsVariants = {
    [LVL_ICON_VARIANT.OVERALL]: GAME_COLORS.green1,
    [LVL_ICON_VARIANT.POWER]: GAME_COLORS.lightBlue,
};