import { GAME_COLORS } from '../../../../../config/styles';
import { NavigationButtonOptions } from './NavigationButton.types';
import { navigation } from '../../../../../main';
import { GangsMembersListScreen } from '../../../../GangsMembersListScreen';

export const CONFIG = {
    SIZE: 64,
    BACKGROUND: GAME_COLORS.black2,
    BORDER_COLOR: GAME_COLORS.red1,
    BORDER_HEIGHT: 2,
    SHARP_OFFSET: 8,
};

export const NAVIGATION_BUTTONS_LIST: Array<NavigationButtonOptions> = [
    {
        label: 'Gang members',
        onClick: () => {
            navigation.showScreen(GangsMembersListScreen);
        },
    },
];