import { ContentContainer } from '../../components/ContentContainer';
import { GangMemberCard } from './GangMemberCard';
import { List, ScrollBox } from '@pixi/ui';
import { GAME } from '../../config/game';
import { gangMembersApi } from '../../modules/api/gang-members';
import { GAME_COLORS } from '../../config/styles';
import { config } from './config';
import { SECTION_BAR_CONFIG } from '../../components/SectionBar/SectionBar.const';
import { SectionBar } from '../../components/SectionBar';
import { navigation } from '../../main';
import { CityMap } from '../MapScreens/Map';


export class GangsMembersListScreen extends ContentContainer {
    constructor() {
        super();
        this.addChild(this.createGangMembersList());
        this.addChild(this.createSectionBar());
    }

    private createSectionBar() {
        return new SectionBar({
            backButtonLabel: 'Go back',
            onBackButtonClick: () => {
                navigation.showScreen(CityMap);
            },
        });
    }

    private createGangMembersList() {
        const scrollbox = new ScrollBox({
            background: GAME_COLORS.black,
            width: GAME.WINDOW_WIDTH,
            height: config.MEMBERS_LIST_HEIGHT,
            horPadding: 20,
            vertPadding: 20,
            elementsMargin: 20,
            items: [],
        });
        scrollbox.position.set(0, SECTION_BAR_CONFIG.HEIGHT);

        gangMembersApi.getAllGangMembers().then(res => {
            res.forEach((gangMember) => scrollbox.addItem(new GangMemberCard(gangMember)));
        });

        return scrollbox;
    }

}