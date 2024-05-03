import { ContentContainer } from '../../components/ContentContainer';
import { GangMemberCard } from './GangMemberCard';
import { List, ScrollBox } from '@pixi/ui';
import { GAME } from '../../../configs/game';
import { gangMembersApi } from '../../../modules/api/gang-members';
import { GAME_COLORS } from '../../../const/styles';


export class GangsMembersListScreen extends ContentContainer {
    constructor() {
        super();
        this.addChild(this.createGangMembersList());
    }


    private createGangMembersList() {
        const scrollbox = new ScrollBox({
            background: GAME_COLORS.black2,
            width: GAME.WINDOW_WIDTH,
            height: GAME.WINDOW_HEIGHT,
            horPadding: 20,
            vertPadding: 20,
            elementsMargin: 20,
            items: [],
        });

        gangMembersApi.getAllGangMembers().then(res => {
            res.forEach((gangMember) => scrollbox.addItem(new GangMemberCard(gangMember)));
        });

        return scrollbox;
    }

}