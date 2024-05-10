import { navigation } from '../../../main';
import { ContentContainer } from '../../components/ContentContainer';
import { SectionBar } from '../../components/SectionBar';
import { GangsMembersListScreen } from '../GangsMembersListScreen';
import { GangsListBar } from './GangsListBar';
import { InventorySelectionBar } from './InventorySelectionBar';
import { ItemTile } from './ItemTile/ItemTile';

export class GangMemberScreen extends ContentContainer {
    constructor() {
        super();
        this.addChild(this.createSectionBar())
        this.addChild(new GangsListBar())
        this.addChild(new ItemTile({x: 500, y: 500}));
        this.addChild(new InventorySelectionBar())
    }

    private createSectionBar() {
        return new SectionBar({
            backButtonLabel: 'Go back',
            onBackButtonClick: () => {
                navigation.showScreen(GangsMembersListScreen);
            },
        });
    }
}