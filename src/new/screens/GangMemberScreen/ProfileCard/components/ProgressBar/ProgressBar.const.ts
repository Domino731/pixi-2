import { GAME_COLORS } from "../../../../../../const/styles";

export enum PROGRESS_BAR_VARIANT {
    LEVEL = 'LEVEL',
    STREET_LEVEL = "STREET_LEVEL"
}
export type ProgressBarUnion = keyof typeof PROGRESS_BAR_VARIANT;


export const CONFIG = {
    HEIGHT: 30,
    BORDER_WIDTH: 2,
    BACKGROUND: GAME_COLORS.black2,
    VARIANTS: {
        [PROGRESS_BAR_VARIANT.LEVEL]: {
            BORDER_COLOR: GAME_COLORS.lightBlue,
            BACKGROUND: GAME_COLORS.lightBlue,
        },
        [PROGRESS_BAR_VARIANT.STREET_LEVEL]: {
            BORDER_COLOR: GAME_COLORS.green1,
            BACKGROUND: GAME_COLORS.green1
        }
    }
}