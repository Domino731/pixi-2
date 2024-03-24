import { ContentContainer } from '../../components/ContentContainer';
import { ContractDetails } from './ContractDetails';

export class FixersScreen extends ContentContainer {
    constructor() {
        super('Fixers screen');
        this.addChild(new ContractDetails());
    }
}