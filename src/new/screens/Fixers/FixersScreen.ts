import { ContentContainer } from '../../../components/ContentContainer';
import { ContentColumn } from '../Profile/components/ContentColumn';
import { ContractDetails } from './ContractDetails';

export class FixersScreen extends ContentContainer {
    private contractCard: ContractDetails;

    constructor() {
        super('Fixers screen');

        this.addChild(new ContentColumn({
            onMissionClick: () => {
                if (this.contractCard) {
                    this.removeChild(this.contractCard);
                }
                this.contractCard = new ContractDetails({
                    onCloseButtonClick: () => {
                        this.removeChild(this.contractCard);
                    },
                });
                this.addChild(this.contractCard);
            },
            hideMissionCard: () => alert('hideMissionCard'),
        }));

    }
}