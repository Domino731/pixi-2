import { Container, Graphics } from 'pixi.js';
import { CyberButton } from '../new/components/Button';
import { Navigation } from './navigation';
import { ProfileScreen } from '../new/screens/Profile/Profile';
import { FixersScreen } from '../new/screens/Fixers/FixersScreen';
import { GangCampScreen } from '../new/screens/GangCamp';
import { SettingsScreen } from '../new/screens/Settings';
import { ContractsScreen } from '../new/screens/Contracts';

export const NAVIGATION_BAR_CONFIG = {
    styles: {
        width: 300,
        height: window.innerHeight,
        leftPadding: 14,
        paddingTop: 40,
        buttonsGap: 60,
    },
};

const navOptions = [
    {
        label: 'Profile',
        screen: ProfileScreen,
    },
    {
        label: 'Map',
        screen: FixersScreen,
    },
    {
        label: 'Gang camp',
        screen: GangCampScreen,
    },
    {
        label: 'Contracts',
        screen: ContractsScreen,
    },
    {
        label: 'Setting',
        screen: SettingsScreen,
    },

];

export class NavigationBar {
    private container = new Container();
    private navigation: Navigation;

    constructor(navigation: Navigation) {
        this.navigation = navigation;
        // this.setStyles();
        // this.setButtons();
    }

    public getContainer() {
        return this.container;
    }


    public setStyles() {
        const graphics = new Graphics();
        graphics.beginFill(0xFF0000);
        graphics.drawRect(0, 0, NAVIGATION_BAR_CONFIG.styles.width, NAVIGATION_BAR_CONFIG.styles.height);
        graphics.endFill();
        this.container.addChild(graphics);
    }


    public setButtons() {
        navOptions.forEach((el, i) => {
            const btn = new CyberButton({
                label: el.label,
                onClick: () => this.navigation.showScreen(el.screen),
                styles: {
                    width: NAVIGATION_BAR_CONFIG.styles.width - (2 * NAVIGATION_BAR_CONFIG.styles.leftPadding),
                },
                position: {
                    x: NAVIGATION_BAR_CONFIG.styles.leftPadding,
                    y: (i * NAVIGATION_BAR_CONFIG.styles.buttonsGap) + NAVIGATION_BAR_CONFIG.styles.paddingTop,
                },

            });
            this.container.addChild(btn.container);
        });

    }


}