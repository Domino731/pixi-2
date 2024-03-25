import { ContentContainer } from '../../components/ContentContainer';
import { ContentColumn } from '../Profile/components/ContentColumn';
import { ContractDetails } from './ContractDetails';

export class FixersScreen extends ContentContainer {
    constructor() {
        super('Fixers screen');

        this.addChild(new ContentColumn())
        // this.addChild(new ContractDetails());
    }
}